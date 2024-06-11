import Socials from "../Socials";
import Carousel from "../Carousel";
import Card from "../Card";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Socials />
      <Carousel />
      <Card />
    </div>
  );
};

export default Header;
