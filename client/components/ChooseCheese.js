import React from "react";

const ChooseCheese = ({ name, id }) => {
  return (
    <div>
      <label>
        {name}
        <input type='radio' checked='unchecked' name='radio'></input>
      </label>
    </div>
  );
};

export default ChooseCheese;
