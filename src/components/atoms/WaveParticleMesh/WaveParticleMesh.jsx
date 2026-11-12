import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Atom: WaveParticleMesh
 * High-performance HTML5 Canvas 3D particle wave matrix angled from top-right to bottom-left.
 * Renders an undulating curved mesh of glowing cyan, blue, and indigo dots with 3D perspective.
 * Pure canvas/styles — zero external images.
 */
export function WaveParticleMesh({
  className = '',
  rows = 30,
  cols = 52,
  opacity = 0.45,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let step = 0;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width || canvas.parentElement?.clientWidth || window.innerWidth;
      height = rect.height || canvas.parentElement?.clientHeight || 500;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        updateSize();
      });
      resizeObserver.observe(canvas.parentElement);
    }
    window.addEventListener('resize', updateSize);

    // Diagonal angle from top-right to bottom-left (approx -28.6 deg)
    const angle = -0.50;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    const render = () => {
      step += 0.012;
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;

      // Adjust camera center so the wave fills and passes nicely behind content
      const centerX = isMobile ? width * 0.48 : isTablet ? width * 0.5 : width * 0.52;
      const centerY = isMobile ? height * 0.52 : isTablet ? height * 0.5 : height * 0.48;
      const fov = isMobile ? 320 : 380;

      // Density tuned so dots are distinct and spaced well with larger dot size
      const effectiveCols = isMobile ? 32 : isTablet ? 42 : cols;
      const effectiveRows = isMobile ? 22 : isTablet ? 26 : rows;

      // Spread parameters
      const baseSpreadX = width * (isMobile ? 1.75 : 1.55);
      const baseSpreadZ = isMobile ? 360 : 440;

      // Check dark mode state for glowing vibrant colors
      const isDark = document.documentElement.classList.contains('dark');

      // Dot sizing: BOLD and PROMINENT matching reference design
      // Scaled with 3D perspective
      const baseSize = isMobile ? 3.2 : isTablet ? 3.6 : 4.0;

      for (let ix = 0; ix < effectiveCols; ix++) {
        for (let iy = 0; iy < effectiveRows; iy++) {
          const u = ix / (effectiveCols - 1) - 0.5; // -0.5 to 0.5
          const v = iy / (effectiveRows - 1) - 0.5; // -0.5 to 0.5

          // Diagonal rotation (Top-Right to Bottom-Left orientation)
          const rotU = u * cosA - v * sinA;
          const rotV = u * sinA + v * cosA;

          // 3D world coordinates
          const worldX = rotU * baseSpreadX;
          const worldZ = rotV * baseSpreadZ + 280;

          // Sinusoidal wave equations sweeping along the diagonal
          const wave1 = Math.sin(rotU * 4.4 + step * 1.15) * (isMobile ? 50 : 64);
          const wave2 = Math.cos(rotV * 3.6 - step * 0.9) * (isMobile ? 38 : 48);
          const wave3 = Math.sin(rotU * 2.4 + rotV * 2.8 + step * 0.65) * (isMobile ? 26 : 34);

          // Tilt elevation: higher in top-right (negative screen Y), lower in bottom-left (positive screen Y)
          const slopeElevation = -rotU * (height * (isMobile ? 0.55 : 0.5));
          const worldY = wave1 + wave2 + wave3 + slopeElevation;

          // 3D Perspective projection
          const perspective = fov / (fov + worldZ);
          const screenX = centerX + worldX * perspective;
          const screenY = centerY + worldY * perspective;

          // Particle sizing scaling with 3D depth (bold, prominent dots)
          const size = Math.max(isMobile ? 1.8 : 2.2, baseSize * perspective * 1.55);

          // Normalized height for color gradient
          const normHeight = (worldY - slopeElevation + 75) / 160;
          const clampedNorm = Math.max(0, Math.min(1, normHeight));

          // Electric Cyan (#22d3ee / #38bdf8) at peaks, Royal Blue / Indigo (#3b82f6 / #6366f1) in valleys
          let r;
          let g;
          let b;
          if (isDark) {
            if (clampedNorm > 0.5) {
              const factor = (clampedNorm - 0.5) * 2;
              r = Math.round(34 + (56 - 34) * factor);
              g = Math.round(211 + (189 - 211) * factor);
              b = Math.round(238 + (248 - 238) * factor);
            } else {
              const factor = clampedNorm * 2;
              r = Math.round(99 + (59 - 99) * factor);
              g = Math.round(102 + (130 - 102) * factor);
              b = Math.round(241 + (246 - 241) * factor);
            }
          } else {
            // High-contrast vivid teal/sky and deep indigo for light mode
            if (clampedNorm > 0.5) {
              const factor = (clampedNorm - 0.5) * 2;
              r = Math.round(14 + (2 - 14) * factor);
              g = Math.round(165 + (132 - 165) * factor);
              b = Math.round(233 + (199 - 233) * factor);
            } else {
              const factor = clampedNorm * 2;
              r = Math.round(79 + (67 - 79) * factor);
              g = Math.round(70 + (56 - 70) * factor);
              b = Math.round(229 + (202 - 229) * factor);
            }
          }

          // Refined, subtle alpha so the wave pattern provides elegant depth without overpowering
          const dotAlpha = Math.max(
            0.14,
            Math.min(0.68, (0.2 + perspective * 0.65) * opacity)
          );

          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dotAlpha})`;

          // Gentle ambient glow for foreground dots in dark mode
          if (perspective > 0.62 && isDark) {
            ctx.shadowBlur = Math.min(4, size * 1.0);
            ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${dotAlpha * 0.45})`;
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, [rows, cols, opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
    />
  );
}

WaveParticleMesh.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  opacity: PropTypes.number,
};

export default WaveParticleMesh;
