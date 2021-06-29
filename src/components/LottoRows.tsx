import React, { useEffect, useState } from "react";

const createLotto = (num: number): string => {
  return `<li></li>`;
};

const LottoRows = (props: { _price: string }) => {
  useEffect(() => {
    const num = +props._price / 1000;
    createLotto(num);
  }, []);

  return (
    <ul>
      {test.map(res => (
        <li>{res}</li>
      ))}
    </ul>
  );
};

export default LottoRows;
