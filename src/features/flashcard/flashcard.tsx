import React, { useState, useEffect } from 'react'
import type { Card } from '../../types/types'
import "./flashcard.css";
/*

*/
type FlashcardProps = { deck: Card[] };

export const Flashcard = ({ deck }: FlashcardProps): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    const [isFront, setIsFront] = useState<boolean>(true);
    const showRandomCard = () => {
        setIndex(Math.floor(Math.random() * deck.length));
        setIsFront(true);
    };

    useEffect(() => {
        showRandomCard();
    }, [deck]);

    const flipcard = () => {
        setIsFront(!isFront);

    };

    const card = deck[index] ?? { front: "", back: "" };
    return (
        <div className="scene">
            <div onClick={flipcard} className={`card ${isFront ? '' : 'card--is-flipped'}`}>
                <div className={`card__face card__face--front`}>{card.front}</div>
                <div className={`card__face card__face--back`}>{card.back}</div>
            </div>
                <div>
                    <span style={{textAlign:"left", width:"100%"}}>click card to show reverse</span>
                </div>
            <button className="show_random_card_btn" onClick={showRandomCard}>Random Card</button>
        </div>
    )
}