import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e: MouseEvent) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        const onMouseDown = () => cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        const onMouseUp = () => cursor.style.transform = 'translate(-50%, -50%) scale(1)';

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        // Hover effect for expand elements
        const applyHoverEffect = () => {
            const expandElements = document.querySelectorAll('.cursor-expand, button, a');
            expandElements.forEach(el => {
                const handleEnter = () => {
                    if (el.classList.contains('cursor-expand')) {
                        cursor.classList.add('expand');
                    } else {
                        cursor.style.width = '30px';
                        cursor.style.height = '30px';
                        cursor.style.background = 'transparent';
                        cursor.style.border = '1px solid var(--text-primary)';
                    }
                };
                const handleLeave = () => {
                    cursor.classList.remove('expand');
                    cursor.style.width = '12px';
                    cursor.style.height = '12px';
                    cursor.style.background = 'var(--text-primary)';
                    cursor.style.border = 'none';
                };
                
                el.addEventListener('mouseenter', handleEnter);
                el.addEventListener('mouseleave', handleLeave);
                
                // Store references to remove later if needed (simplified for this demo)
            });
        };

        // Delay slightly to let React render the DOM first
        setTimeout(applyHoverEffect, 500);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return <div className="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
