import img1 from "/imgs/showcase1.png";
import img2 from "/imgs/showcase2.png";
import img3 from "/imgs/showcase3.png";
import { FC } from "react";
import styles from "./index.module.scss";
const Promo1: FC = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <p className={styles.header}>Найт-Сити изменит тебя навсегда!</p>
          <p className={styles.info}>
            <span className={styles.accent}>Cyberpunk 2077</span> —
            приключенческая ролевая игра, действие которой происходит в
            мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся
            выше всего. Ты играешь за V, наёмника в поисках устройства,
            позволяющего обрести бессмертие. Ты сможешь менять киберимпланты,
            навыки и стиль игры своего персонажа, исследуя открытый мир, где
            твои поступки влияют на ход сюжета и всё, что тебя окружает.
          </p>
        </div>

        <div className={styles.container_outer}>
          <div className={styles.container_inner}>
            <img className={styles.img_inner} src={img1} alt="showcase1" />

            <img className={styles.img_inner} src={img2} alt="showcase2" />
          </div>

          <img className={styles.img_outer} src={img3} alt="showcase3" />
        </div>
      </div>
    </section>
  );
};

export default Promo1;
