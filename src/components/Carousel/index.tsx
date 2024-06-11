import styles from "./index.module.scss";
import { useState, useEffect, useRef, FC } from "react";

const Carousel: FC = () => {
  const imgs = [
    "/CyberPuke/slide1.jpeg",
    "/CyberPuke/slide2.png",
    "/CyberPuke/slide3.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const [isLoaded, setIsloaded] = useState(false);

  const timerRef = useRef<null | number>(null);

  useEffect(() => {
    if (!isLoaded) return;
    timerRef.current = setTimeout(() => {
      index === imgs.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
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
