import "./accordion.css";
import { accordionData } from "../data/data.js";
import { useState } from "react";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);
  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  function handleMultiSelection(id) {
    let copyMultiAray = [...multiSelected];
    if (copyMultiAray.includes(id)) {
      copyMultiAray = copyMultiAray.filter((item) => item !== id);
      setMultiSelected(copyMultiAray);
    } else {
      copyMultiAray.push(id);
        setMultiSelected(copyMultiAray);
    }
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection((prev) => !prev)}>
          {enableMultiSelection ? "Single Selection" : "Multi Selection"}
        </button>
        <div className="accordian">
          {accordionData?.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ||multiSelected.indexOf(item.id) !== -1  ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
