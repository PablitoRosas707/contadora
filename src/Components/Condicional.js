import { useState } from "react";

export const Switch = function (luz=true) {
  const [carState, setCarState] = useState(luz);

  const encenderApagar = (corriente) => {
    setCarState(!carState);
  };
  const Condicion = carState ? "Encendido" : "Apagado";
  return {
    encenderApagar,
    Condicion,
  };
};
