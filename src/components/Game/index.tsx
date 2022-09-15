import React from 'react';
import useGame from '../../hooks/useGame';
import { Deck } from '../Deck';
import { Container, Button } from './styles';

export function Game() {
  const { decks, generateDecks } = useGame();

  return (
    <Container data-testid={`game`}>
      <Deck type='N' data={decks.N.deck} total={decks.N.total}/>
      <Deck type='E' data={decks.E.deck} total={decks.E.total}/>
      <Deck type='S' data={decks.S.deck} total={decks.S.total}/>
      <Deck type='W' data={decks.W.deck} total={decks.W.total}/>
      <Button onClick={() => generateDecks()}>shuffle</Button>
    </Container>
  );
}
