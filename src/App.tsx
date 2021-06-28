import React, { useState } from "react";
import Input from "./components/Input";
import "./App.css";

const App: React.FC = () => {
  const [price, setPrice] = useState("");

  return (
    <div className="App">
      <Input
        onSubmit={_price => {
          setPrice("hello");
        }}
      />
    </div>
  );
};

export default App;
