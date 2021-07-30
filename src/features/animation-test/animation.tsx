import React, { useRef, useState } from "react";

const startAngle = `rotateY(0)`;
const endAngle = `rotateY(180deg)`;

export const A = () => {
    const squareRef = useRef<HTMLDivElement>(null);
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => {
        if (!squareRef.current) return;

        const el = squareRef.current;
        const keyframes = [{ transform: startAngle }, { transform: endAngle }];
        const timing = { duration: 500, easing: "ease-in-out" };
        const animation = el.animate(keyframes, timing);

        if (flipped) {
            animation.finish();
            animation.reverse();
        }

        setFlipped(!flipped);
    };
    const reset = () => {
        setFlipped(false);
    }

    const rotation = flipped ? endAngle : startAngle;
    return (
        <div>
            <div
                style={{ backgroundColor: "rosybrown", perspective: "500px", width: "500px", height: "300px" }}>
                <div
                    onClick={flipCard}
                    ref={squareRef}
                    style={{ transformStyle: "preserve-3d", transform: rotation, width: "70px", height: "140px" }}>
                    <div style={{ position:"absolute", left:"0", top:"0", backgroundColor: "tan", width: "100%", height: "100%", WebkitBackfaceVisibility:"hidden", backfaceVisibility: "hidden", }}>Front!!!</div>
                    <div style={{ position:"absolute", left:"0", top:"0", backgroundColor: "tan", width: "100%", height: "100%", WebkitBackfaceVisibility:"hidden", backfaceVisibility: "hidden", transform: "rotateY(180deg)", }}>Back</div>
                </div>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    );
}