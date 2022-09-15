import React from 'react';
import { Container, Number, Suit, Group, Mark, MarkWrapper } from './styles'
import imagens from '../../utils/images';

export enum Suits {
  Spade = 'SPADE',
  Heart = 'HEART',
  Diamond = 'DIAMOND',
  Club = 'CLUB',
}

export enum Numbers {
  A = 'A',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  J = 'J',
  Q = 'Q',
  K = 'K',
}

const Colors = {
  'SPADE': '#545550',
  'HEART': '#981c1d',
  'DIAMOND': '#981c1d',
  'CLUB': '#515055',
}

export interface ICardProps {
  suit: Suits,
  number: Numbers,
  width: number,
}

export function Card({ suit, number, width = 120 }: ICardProps) {
  return (
    <Container data-testid={`card-${suit}-${number}`} width={width}>
      <Group>
        <Number color={Colors[suit]} fontSize={width*0.15}>{number}</Number>
        <Suit src={imagens[`${suit}-1`]} />
      </Group>
      <MarkWrapper>
        <Mark src={imagens[`${suit}-2`]} />
      </MarkWrapper>
      <Group reverse>
        <Number color={Colors[suit]}>{number}</Number>
        <Suit src={imagens[`${suit}-1`]} />
      </Group>
    </Container>
  );
}
