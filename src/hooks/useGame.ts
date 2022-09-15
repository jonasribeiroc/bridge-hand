import { useCallback, useEffect, useMemo, useState } from "react";
import { Numbers as N, Suits } from "../components";

const useGame = () => {
  const suits: Suits[] = useMemo(() => [Suits.Spade, Suits.Heart, Suits.Diamond, Suits.Club], []);
  const numbers: N[] = useMemo(() => [N.A, N.Two, N.Three, N.Four, N.Five, N.Six, N.Seven, N.Eight, N.Nine, N.Ten, N.J, N.Q, N.K], []);
  const values: any = useMemo(() => ({[N.A]: 4, [N.J]: 1, [N.Q]: 2, [N.K]: 4}), []);
  const [decks, setDecks] = useState<any>({ N: { deck: [], total: 0 }, E: { deck: [], total: 0 }, S: { deck: [], total: 0 }, W: { deck: [], total: 0 } });
  
  const generateMatrix = useCallback((): any => {
    return suits
      .map((suit) => (numbers.map((number) => ({ suit, number }))))
      .flat()
      .map((n, i) => ({ ...n, value: values[n.number] || 0, i }));
  }, [suits, numbers, values]);

  const generateDecks = useCallback((): void => {
    const ds = generateMatrix().sort(() => Math.random() - 0.5);
    const dsN = ds.splice(0, 13).sort((a: any, b: any) => a.i - b.i);
    const dsE = ds.splice(0, 13).sort((a: any, b: any) => a.i - b.i);
    const dsS = ds.splice(0, 13).sort((a: any, b: any) => a.i - b.i);
    const dsW = ds.splice(0, 13).sort((a: any, b: any) => a.i - b.i);

    setDecks({
      N: { deck: dsN, total: dsN.reduce((r: any, a: any) => r + a.value, 0) },
      E: { deck: dsE, total: dsE.reduce((r: any, a: any) => r + a.value, 0) },
      S: { deck: dsS, total: dsS.reduce((r: any, a: any) => r + a.value, 0) },
      W: { deck: dsW, total: dsW.reduce((r: any, a: any) => r + a.value, 0) },
    })
  }, [generateMatrix]);

  useEffect(() => {
    generateDecks();
  }, [generateDecks])

  return { decks, generateDecks }
}

export default useGame;