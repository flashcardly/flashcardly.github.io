import React, { useState, useEffect, useRef } from 'react'
import type { Card } from '../../types/types'
import "./flashcard.css";

type FlashcardProps = { deck: Card[] };

export const Flashcard2d = ({ deck }: FlashcardProps): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    const [isFront, setIsFront] = useState<boolean>(true);
    const cardRef = useRef<HTMLDivElement>(null);

    const showRandomCard = () => {
        setIndex(Math.floor(Math.random() * deck.length));
        setIsFront(true);
    };

    useEffect(() => {
        showRandomCard();
    }, [deck]);


    const flipCard = () => {
        setIsFront(!isFront);
    }

    const card = deck[index] ?? { front: "", back: "" };
    return (
        <div>
            <div className="card">
                <div
                    onClick={flipCard}
                    ref={cardRef}
                    style={{ backgroundColor: "blue", width: "500px", height: "300px" }}>
                    <div className="card__face">
                        {isFront ? card.front : card.back}
                    </div>
                </div>
            </div>
            <div>
                <span>click card to show reverse</span>
            </div>
            <button
                className="show_random_card_btn"
                onClick={showRandomCard}>
                Random Card
            </button>

        </div>
    )
}