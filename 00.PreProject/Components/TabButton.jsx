
const TabButton = ({CORE_CONCEPTS , Click , isSelectd}) => {

  return (
    <>
    {CORE_CONCEPTS.map((Button,index)=>(
        <li key={index}><button className={isSelectd(Button.title) ? "active" : ""} onClick={()=>Click(Button.title)}>{Button.title}</button></li>
    ))}
    
    </>
  )
}

export default TabButton