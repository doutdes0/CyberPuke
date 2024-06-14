import Socials from "../Socials";
import Carousel from "../Carousel";
import Card from "../Card";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Socials />
        <Carousel />
      </div>
      <Card />
    </header>
  );
};

export default Header;
