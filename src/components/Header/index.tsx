import Socials from "../Socials";
import Carousel from "../Carousel";
import Card from "../Card";
import "./index.module.scss";

const Header = () => {
  return (
    <header>
      <Socials />
      <Carousel />
      <Card />
    </header>
  );
};

export default Header;
