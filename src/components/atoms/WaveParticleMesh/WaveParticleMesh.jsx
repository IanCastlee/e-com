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
  rows = 36,
  cols = 60,
  opacity = 0.5,
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

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Diagonal angle from top-right to bottom-left (approx -30 deg)
    const angle = -0.52;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    const render = () => {
      step += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Camera center: adjusted to fill viewport from top-right to bottom-left
      const isMobile = width < 768;
      const centerX = isMobile ? width * 0.5 : width * 0.52;
      const centerY = isMobile ? height * 0.5 : height * 0.48;
      const fov = isMobile ? 300 : 360;

      // Adjust grid density based on screen width
      const effectiveCols = isMobile ? 38 : cols;
      const effectiveRows = isMobile ? 24 : rows;

      const baseSpreadX = width * (isMobile ? 1.6 : 1.5);
      const baseSpreadZ = isMobile ? 320 : 420;

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
          const wave1 = Math.sin(rotU * 4.6 + step * 1.15) * 55;
          const wave2 = Math.cos(rotV * 3.8 - step * 0.9) * 42;
          const wave3 = Math.sin(rotU * 2.6 + rotV * 3.0 + step * 0.65) * 32;

          // Tilt elevation: higher in top-right (negative screen Y), lower in bottom-left (positive screen Y)
          const slopeElevation = -rotU * (height * (isMobile ? 0.45 : 0.5));
          const worldY = wave1 + wave2 + wave3 + slopeElevation;

          // 3D Perspective projection
          const perspective = fov / (fov + worldZ);
          const screenX = centerX + worldX * perspective;
          const screenY = centerY + worldY * perspective;

          // Particle sizing scaling with 3D depth
          const baseSize = isMobile ? 1.35 : 2.1;
          const size = Math.max(0.6, baseSize * perspective * 1.3);

          // Normalized height for color gradient
          const normHeight = (worldY - slopeElevation + 75) / 160;
          const clampedNorm = Math.max(0, Math.min(1, normHeight));

          // Electric Cyan (#22d3ee / #38bdf8) at peaks, Royal Blue / Indigo (#3b82f6 / #6366f1) in valleys
          let r;
          let g;
          let b;
          if (clampedNorm > 0.5) {
            r = Math.round(34 + (56 - 34) * (clampedNorm - 0.5) * 2);
            g = Math.round(211 + (189 - 211) * (clampedNorm - 0.5) * 2);
            b = Math.round(238 + (248 - 238) * (clampedNorm - 0.5) * 2);
          } else {
            r = Math.round(99 + (59 - 99) * clampedNorm * 2);
            g = Math.round(102 + (130 - 102) * clampedNorm * 2);
            b = Math.round(241 + (246 - 241) * clampedNorm * 2);
          }

          const dotAlpha = Math.max(
            0.08,
            Math.min(0.9, perspective * 1.25 * opacity)
          );

          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dotAlpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
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
