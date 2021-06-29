import React, { useState } from "react";
import Input from "./components/Input";
import LottoRows from "./components/LottoRows";
import "./App.css";

const isValidPirce = (price: string): boolean => {
  const intPrice: number = +price; //자스 단항연산자
  if (intPrice % 1000 === 0) {
    return true;
  }
  return false;
};

const App: React.FC = () => {
  const [price, setPrice] = useState("");

  return (
    <div className="App">
      <Input
        onSubmit={_price => {
          if (isValidPirce(_price)) {
            setPrice(_price);
          } else {
            alert("1000 단위로 넣으세요");
          }
        }}
      />
      <LottoRows _price={price} />
    </div>
  );
};

export default App;
