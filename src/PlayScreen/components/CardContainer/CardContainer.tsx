import React, { useState, useEffect } from 'react';

import Card from './Card/Card';

interface Props {
  lives: number;
  setMaxScore: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setLives: React.Dispatch<React.SetStateAction<number>>;
  score: number
}

interface CardSetting {
  name: string;
  state: boolean;
}

const CardContainer: React.FC<Props> = (props) => {
  const data: CardSetting[] = [
    {name: 'angular', state: false},
    {name: 'aws', state: false},
    {name: 'css', state: false},
    {name: 'elementor', state: false},
    {name: 'figma', state: false},
    {name: 'github', state: false},
    {name: 'html', state: false},
    {name: 'java', state: false},
    {name: 'javascript', state: false},
    {name: 'laravel', state: false},
    {name: 'linux', state: false}
  ];
  const [cards, setCards] = useState<CardSetting[]>(data);

  const changeState = (name: string) => {
    const newCards = [...cards]
    const icon = newCards?.find((card) => card.name === name);

    if (icon === null || icon === undefined ) {
      return false;
    }

    if (icon.state === false) {
      icon.state = true;
      props.setScore(props.score + 1)
    } else {
      props.setLives(props.lives - 1)
    }
    shuffleCards(newCards);
    setCards(newCards);
  }

  const shuffleCards = (newCards: CardSetting[]) => {
    for (var i = 0; i < cards.length; i++) {
      const newIndex = Math.floor(Math.random() * cards.length);
      [newCards[i], newCards[newIndex]] = [newCards[newIndex], newCards[i]];
    }
  }

  useEffect(() => {
    props.setMaxScore(data.length)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div
      className='card-container'
    >
      {
        cards.length > 0 ? cards.map((card) => (
          <Card
            changeFn={() => changeState(card.name)}
            setScore={props.setScore}
            score={props.score}
            name={card.name}
            state={card.state}
          />
        )) : null
      }
    </div>
  )
}

export default CardContainer;