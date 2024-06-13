import cblogo from "/logos/cb-logo.svg";
import fblogo from "/logos/fb-logo.svg";
import iglogo from "/logos/ig-logo.svg";
import twitchlogo from "/logos/twitch-logo.svg";
import vklogo from "/logos/vk-logo.svg";
import xlogo from "/logos/x-logo.svg";
import ytlogo from "/logos/yt-logo.svg";
import styles from "./index.module.scss";

const Socials: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={cblogo} alt="CyberPuke-logo" />
      <ul>
        <li>
          <img src={fblogo} alt="fb-logo" />
        </li>
        <li>
          <img src={iglogo} alt="ig-logo" />
        </li>
        <li>
          <img src={twitchlogo} alt="twitch-logo" />
        </li>
        <li>
          <img src={vklogo} alt="vk-logo" />
        </li>
        <li>
          <img src={xlogo} alt="x-logo" />
        </li>
        <li>
          <img src={ytlogo} alt="yt-logo" />
        </li>
      </ul>
    </div>
  );
};

export default Socials;
