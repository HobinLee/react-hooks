import { useState } from "react";

export default (
  checkValidation,
  defaultValue
) => {
  const [isValid, setIsValid] = useState(defaultValue);

  const onCheck = (input) => {
    setIsValid(checkValidation(input));
  };

  return { isValid, onCheck, setIsValid };
};
