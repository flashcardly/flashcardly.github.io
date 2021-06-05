import React, { useState, useEffect } from 'react'
import type { Card } from '../../types/types'
/*

*/
type FlashcardProps = { deck: Card[] }

export const Flashcard = ({ deck }: FlashcardProps): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    const [isFront, setIsFront] = useState<boolean>(true);
    const showRandomCard = () => {
        setIndex(Math.floor(Math.random() * deck.length));
        setIsFront(true);
    }
    useEffect(() => {
        showRandomCard();
    }, [])

    const flipcard = () => {
        setIsFront(!isFront);
    }

    return (
        <div>
            <div onClick={flipcard} style={{ "position": "relative", "height": "300px", "width": "500px", "border": "2px solid black", "margin": "0 auto", "backgroundColor":"#f0ffff" }}>
                <h1>{isFront ? deck[index].front : deck[index].back}</h1>
                <div style={{ "position": "absolute", "bottom": "0" }}>
                    <span>click card to show reverse</span>
                </div>
            </div>
            <button style={{ "width": "200px", "border": "rgb(30,30,30)", "fontSize": "24px","backgroundColor":"#88ABFB", "marginTop":"20px" }} onClick={showRandomCard}>Random Card</button>
        </div>
    )
}