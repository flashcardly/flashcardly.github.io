import React, { useState, useEffect } from 'react'
import type { Card } from '../../types/types'
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
            <div onClick={flipcard} className="card">
                <div className={`card__face ${isFront ? '' : 'is-flipped'}`}>
                    <div className={`card__face--front`}>
                        <h1>{card.front}</h1>
                    </div>
                    <div className={`card__face--back`}>
                        <h1>{card.back}</h1>
                    </div>
                </div>
            </div>
                <div>
                    <span style={{textAlign:"left", width:"100%"}}>click card to show reverse</span>
                </div>
            <button className="show_random_card_btn" onClick={showRandomCard}>Random Card</button>
        </div>
    )
}