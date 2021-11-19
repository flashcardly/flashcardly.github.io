import React, { useState, useEffect, useRef } from 'react'
import type { Card } from '../../types/types'
import "./flashcard.css";
/*
- front -> back (flipping animation)
- back -> front (flipping animation)
*/
type FlashcardProps = { deck: Card[] };

export const Flashcard3d = ({ deck }: FlashcardProps): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    const [isFront, setIsFront] = useState<boolean>(true);
    const cardRef = useRef<HTMLDivElement>(null);

    const showRandomCard = () => {
        setIndex(Math.floor(Math.random() * deck.length));
        setIsFront(true);
        const element = cardRef.current;
        element!.style.transform = startAngle.transform;
    };

    useEffect(() => {
        showRandomCard();
    }, [deck]);

    const startAngle = { transform: "rotateY(0.0turn)" };
    const endAngle = { transform: "rotateY(0.5turn)" };

    const flipCard = () => {
        if (!cardRef.current) return;
        const element = cardRef.current;
        const keyframes = [startAngle, endAngle];
        const timing = { duration: 700, easing: "ease-in-out" };

        const animation = element.animate(keyframes, timing);

        if (!isFront) {
            animation.finish();
            animation.reverse();
        }
        animation.addEventListener("finish", () => {
            element.style.transform = !isFront
              ? startAngle.transform
              : endAngle.transform;
        }, { once: true });
        setIsFront(!isFront);
    }
    const reset = () => {
        setIsFront(true);
        showRandomCard();
    }


    // const rotation = isFront ? `rotateY(0turn)` : `rotateY(0.5turn)`;
    const card = deck[index] ?? { front: "", back: "" };
    return (
        <div>
            <div className="card" style={{ perspective: "1000px"}}>
                <div
                    onClick={flipCard}
                    ref={cardRef}
                    style={{height:"300px", transformStyle: "preserve-3d" }}>
                    <div className="card__face" style={{ WebkitBackfaceVisibility:"hidden" }}>{card.front}</div>
                    <div className="card__face" style={{ WebkitBackfaceVisibility:"hidden", transform: "rotateY(180deg)" }}>{card.back}</div>
                </div>
            </div>
            <div>
                <span>click card to show reverse</span>
            </div>
            <button
                className="show_random_card_btn"
                onClick={reset}>
                Random Card
            </button>

        </div>
    )
}