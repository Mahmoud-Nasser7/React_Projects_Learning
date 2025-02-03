const CoreConcept = ({CORE_CONCEPTS}) => {
  return (
    <>
      {CORE_CONCEPTS.map((Concept, index) => (
        <li key={index}>
          <img src={Concept.image} alt="" />
          <h3>{Concept.title}</h3>
          <p>{Concept.description}</p>
        </li>
      ))}
    </>
  );
};

export default CoreConcept;
