import React from 'react';
import { Card } from '../Card';
import { Container, Total } from './styles';

export type Type = 'N'|'E'|'S'|'W';

export interface IDeckProps {
  type: Type,
  data: [],
  total: number,
}

export function Deck({ type, data, total }: IDeckProps) {
  return (
    <Container data-testid={`deck-${type}`} type={type}>
      {data.map((p: any, i: number) => {
        return (
          <Card
            key={i}
            suit={p.suit}
            number={p.number}
            width={120}
          />
        )
      })}
      <Total type={type}>{total}</Total>
    </Container>
  );
}
