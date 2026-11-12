import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Atom: WaveParticleMesh
 * High-performance HTML5 Canvas 3D particle wave matrix matching the user's reference design.
 * Renders an undulating curved mesh of glowing cyan, blue, and indigo dots with 3D perspective.
 * Pure canvas/styles — zero external images.
 */
export function WaveParticleMesh({
  className = '',
  rows = 38,
  cols = 64,
  opacity = 0.85,
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

    const render = () => {
      step += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Camera & 3D space projection parameters
      const centerX = width * 0.5;
      const centerY = height * 0.52;
      const fov = 340;

      // Adjust grid density based on screen width
      const effectiveCols = width < 768 ? Math.floor(cols * 0.6) : cols;
      const effectiveRows = width < 768 ? Math.floor(rows * 0.65) : rows;

      const zSpacing = width < 768 ? 16 : 22;

      for (let ix = 0; ix < effectiveCols; ix++) {
        for (let iy = 0; iy < effectiveRows; iy++) {
          const u = ix / (effectiveCols - 1) - 0.5; // -0.5 to 0.5
          const v = iy / (effectiveRows - 1) - 0.5; // -0.5 to 0.5

          // 3D coordinates with horizontal spread
          const worldX = u * width * 1.45;
          const worldZ = iy * zSpacing - effectiveRows * zSpacing * 0.5 + 260;

          // Undulating dual-crest wave equation matching the reference screenshot
          const wave1 = Math.sin(u * 4.8 + step * 1.1) * 58;
          const wave2 = Math.cos(v * 3.8 - step * 0.85) * 44;
          const wave3 = Math.sin(u * 2.8 + v * 3.2 + step * 0.6) * 36;
          const worldY = wave1 + wave2 + wave3 + v * 110;

          // 3D Perspective projection
          const perspective = fov / (fov + worldZ);
          const screenX = centerX + worldX * perspective;
          const screenY = centerY + worldY * perspective;

          // Size scaling with depth
          const baseSize = width < 768 ? 1.4 : 2.1;
          const size = Math.max(0.6, baseSize * perspective * 1.3);

          // Normalized height for color gradient (-80 to 110)
          const normHeight = (worldY + 80) / 190;
          const clampedNorm = Math.max(0, Math.min(1, normHeight));

          // Color interpolation: Electric Cyan (#38bdf8 / #22d3ee) at top, Royal/Indigo (#3b82f6 / #6366f1) at bottom
          let r;
          let g;
          let b;
          if (clampedNorm > 0.5) {
            // Peaks: Electric Cyan / Neon Sky Blue
            r = Math.round(34 + (56 - 34) * (clampedNorm - 0.5) * 2);
            g = Math.round(211 + (189 - 211) * (clampedNorm - 0.5) * 2);
            b = Math.round(238 + (248 - 238) * (clampedNorm - 0.5) * 2);
          } else {
            // Valleys: Royal Blue to Indigo
            r = Math.round(99 + (59 - 99) * clampedNorm * 2);
            g = Math.round(102 + (130 - 102) * clampedNorm * 2);
            b = Math.round(241 + (246 - 241) * clampedNorm * 2);
          }

          const dotAlpha = Math.max(0.06, Math.min(0.92, perspective * 1.15 * opacity));

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
      className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 ${className}`}
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
