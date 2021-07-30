import React from 'react'
import { Flashcard2d } from './flashcard2d'
import { Flashcard3d } from './flashcard3d'
import {useOptions} from '../options/useOptions.hook'
import type { Card } from '../../types/types'

type FlashcardProps = { deck: Card[] };

export const Flashcard = ({deck}: FlashcardProps) => {
    const [options, setOptions] = useOptions();
    const components = {
      "2D": Flashcard3d,
      "3D": Flashcard3d
    };

    const Component = components[options.animation];
    return <Component deck={deck}/>;
}
