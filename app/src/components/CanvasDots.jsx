import React, { useRef, useEffect } from 'react';

function CanvasDots() {
    const canvasRef = useRef(null);
    const dotsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;
        const dots = [];
        const maxDots = 1000;

        // Create dots
        for (let i = 0; i < maxDots; i++) {
            dots.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: 1,
                baseSize: 1,
                growSize: 2,
                hovered: false,
                opacity: 1,
            });
        }

        dotsRef.current = dots;

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, width, height);

            dots.forEach(dot => {
                if (dot.hovered) {
                    if (dot.size < dot.growSize) {
                        dot.size += 0.1;
                    } else {
                        dot.opacity -= 0.01;
                        if (dot.opacity <= 0.1) {
                            dot.size = dot.baseSize;
                            dot.opacity = 1;
                            dot.hovered = false;
                        }
                    }
                } else {
                    if (dot.size > dot.baseSize) {
                        dot.size -= 0.1;
                    }
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 100, 100, ${dot.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Handle mouse move
        function handleMouseMove(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            dots.forEach(dot => {
                const distance = Math.hypot(dot.x - mouseX, dot.y - mouseY);
                if (distance < 50) {
                    dot.hovered = true;
                }
            });
        }

        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
}

export default CanvasDots;
