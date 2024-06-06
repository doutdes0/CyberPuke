import styles from "./index.module.scss";
import { useState, useEffect, useRef, FC } from "react";

const Carousel: FC = () => {
  const imgs = ["/slide1.jpeg", "/slide2.png", "/slide3.jpeg"];

  const [index, setIndex] = useState(0);
  const [isLoaded, setIsloaded] = useState(false);

  const timerRef = useRef<null | number>(null);

  function resetTimeout() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }

  useEffect(() => {
    if (!isLoaded) return;
    resetTimeout();
    timerRef.current = setTimeout(() => {
      index === imgs.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
    }, 5000);
    return () => resetTimeout();
  }, [index, isLoaded]);

  return (
    <div
      className={styles.container}
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      {imgs.map((url, i) =>
        i === 0 ? (
          <img
            onLoad={() => setIsloaded(true)}
            key={url}
            src={url}
            alt={`slide${i}`}
          />
        ) : (
          <img loading="lazy" key={url} src={url} alt={`slide${i}`} />
        )
      )}
    </div>
  );
};

export default Carousel;
