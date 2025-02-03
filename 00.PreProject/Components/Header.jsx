const Content = ["Fundamental", "Core", "Cructial"];
function genRandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}
import headerImage from '../assets/react-core-concepts.png'
const Header = () => {
    const description = Content[genRandomNum(2)]
  return (
    <header>
      <img src={headerImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
       {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
};

export default Header;
