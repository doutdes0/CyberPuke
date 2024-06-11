import styles from "./index.module.scss";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <p>Доступно на всех платформах</p>
        <button>Узнать больше</button>
      </div>
    </div>
  );
};

export default Card;
