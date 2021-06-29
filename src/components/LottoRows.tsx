import React, { useEffect, useState } from "react";

const createLotto = (): string => {
  const ret: string[] = [];
  for (let i = 0; i < 6; i = i + 1) {
    const randNum = parseInt(String(Math.random() * 45)) + 1;
    ret.push(String(randNum));
  }
  return ret.join("  ");
};

const LottoRows = (props: { _price: string }): JSX.Element => {
  const [lottos, setLottos] = useState<Array<string>>([]); //지네릭

  useEffect(() => {
    const num = +props._price / 1000;
    const tmp = [];
    for (let i = 0; i < num; i = i + 1) {
      const lotto = createLotto();
      tmp.push(lotto);
      // setLottos([...lottos, lotto]); //...문법
    }
    setLottos(tmp);
  }, [props._price]);

  return (
    <>
      <ul>
        {lottos.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
      </ul>
      <li>당첨번호: {createLotto()}</li>
    </>
  );
};

export default LottoRows;
