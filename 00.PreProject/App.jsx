import { useState } from "react";
import CoreConcept from "./Components/CoreConcept";
import Header from "./Components/Header";
import TabButton from "./Components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please Select a Topic");
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton.toLowerCase());
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept CORE_CONCEPTS={CORE_CONCEPTS} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              CORE_CONCEPTS={CORE_CONCEPTS}
              Click={(theTitle) => handleClick(theTitle)}
              isSelectd = {(theTitle)=> selectedTopic === theTitle.toLowerCase()}
            />
          </menu>
          <div id="tab-content">
            {EXAMPLES[selectedTopic] ? (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </>
            ) : (
              <p>{selectedTopic}</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
