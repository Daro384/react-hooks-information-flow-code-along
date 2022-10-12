import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")

  const handleClick = () => {
    setColor(color => getRandomColor())
    setChildColor(childColor => getRandomColor())
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleClick} childColor={childColor}/>
      <Child onChangeColor={handleClick} childColor={childColor}/>
    </div>
  );
}

export default Parent;
