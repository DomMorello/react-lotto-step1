import { useState } from "react";

function Input(): JSX.Element {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="금액을 넣어주세요"
        onChange={e => setText(e.target.value)}
      />
      <input type="submit" value="구매하기" />
    </>
  );
}

export default Input;
