import React, { useState } from "react";

interface lottoPriceProps {
  onSubmit: (price: string) => void;
}

const Input = ({ onSubmit }: lottoPriceProps) => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={function(e) {
        e.preventDefault();
        onSubmit(text);
      }}
    >
      <input
        type="text"
        placeholder="금액을 넣어주세요"
        onChange={e => {
          setText(e.target.value);
          console.log(text);
        }}
      />
      <input type="submit" value="구매하기" />
    </form>
  );
};

export default Input;
