import "./Random.css";
import { useState } from "react";
const Random = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function handleRandomHex() {
    // f6f6f6
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  }
  function handleRandomRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let RGBColor = `rgb(${red},${green},${blue})`;

    setColor(RGBColor);
  }
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="container"
    >
      <button
        onClick={typeOfColor === "hex" ? handleRandomHex : handleRandomRGB}
      >
        Generate Random Color
      </button>
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
      <button onClick={() => setTypeOfColor("RGB")}>Generate RGB Color</button>

      <div className="colorName">
        <h1>{color}</h1>
        <h2>{typeOfColor}</h2>
      </div>
    </div>
  );
};

export default Random;
