import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const cursorWidth = cursorRef.current.offsetWidth;
            const cursorHeight = cursorRef.current.offsetHeight;

            gsap.to(cursorRef.current, {
                x: clientX - cursorWidth / 2,
                y: clientY - cursorHeight / 2,
                duration: 0.8,
                ease: "power4.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleMouseEnter = () => {
        gsap.to(cursorRef.current, { scale: 8, duration: 0.3 });
    };

    const handleMouseLeave = () => {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
    };

    return (
        <>
            <div
                ref={cursorRef}
                id="cursor"
                className='fixed top-0 left-0 h-[20px] w-[20px] bg-white rounded-full z-1 pointer-events-none mix-blend-lighten'
                style={{
                    background: 'linear-gradient(45deg, #1e90ff, #8a2be2, #ff69b4, #ff4500)', 
                    filter: 'blur(0.8px)',
                }}
            />

            <div className='w-full h-100 flex justify-center items-center'>
                <h1 
                    id='quote' 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    className='font-clash font-regular text-6xl mx-7 max-sm:mr-10 text-center'
                >
                    Glow through the code.
                </h1>
            </div>
        </>
    );
};

export default Cursor;