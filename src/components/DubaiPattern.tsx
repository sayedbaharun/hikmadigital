import { useEffect, useRef } from 'react';

interface DubaiPatternProps {
  className?: string;
  opacity?: number;
}

const DubaiPattern = ({ className = "", opacity = 0.1 }: DubaiPatternProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      drawPattern();
    };

    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `rgba(255, 215, 0, ${opacity})`); // Gold
      gradient.addColorStop(0.5, `rgba(0, 191, 255, ${opacity * 0.5})`); // Blue
      gradient.addColorStop(1, `rgba(255, 215, 0, ${opacity * 0.3})`); // Gold

      // Draw geometric pattern inspired by Dubai architecture
      const size = 60;
      const rows = Math.ceil(canvas.height / size) + 1;
      const cols = Math.ceil(canvas.width / size) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * size;
          const y = row * size;
          
          // Alternating pattern
          if ((row + col) % 2 === 0) {
            // Diamond shape
            ctx.beginPath();
            ctx.moveTo(x + size / 2, y);
            ctx.lineTo(x + size, y + size / 2);
            ctx.lineTo(x + size / 2, y + size);
            ctx.lineTo(x, y + size / 2);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();
          } else {
            // Smaller circles
            ctx.beginPath();
            ctx.arc(x + size / 2, y + size / 2, size / 6, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }
        }
      }

      // Add some flowing lines for movement
      ctx.strokeStyle = `rgba(255, 215, 0, ${opacity * 0.3})`;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const startY = (canvas.height / 5) * i;
        ctx.moveTo(0, startY);
        
        // Create flowing curve
        for (let x = 0; x <= canvas.width; x += 10) {
          const wave = Math.sin((x / 100) + (i * 0.5)) * 20;
          ctx.lineTo(x, startY + wave);
        }
        ctx.stroke();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animate the pattern
    let animationId: number;
    let phase = 0;
    
    const animate = () => {
      phase += 0.01;
      // You can add subtle animation here if needed
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        width: '100%', 
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default DubaiPattern;