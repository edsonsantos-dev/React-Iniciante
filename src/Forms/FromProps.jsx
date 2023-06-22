import React from "react";
import ButtonProps from "./ButtonProps";
import InputProps from "./InputProps";

const FromProps = () => {
  return (
    <div>
      <InputProps id="email" label="Email" required />
      <InputProps id="senha" type="password" label="Senha" />
      <ButtonProps />
    </div>
  );
};

export default FromProps;
