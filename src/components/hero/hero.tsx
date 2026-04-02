"use client";

import { useEffect, useState } from "react";
import styles from "./hero.module.css";

type HeroProps = {
  heading: string;
  slides: string[];
  interval?: number;
  fadeDuration?: number;
};

export default function Hero({
  heading,
  slides,
  interval = 5000,
  fadeDuration = 1000,
}: HeroProps) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    setCurrent(Math.floor(Math.random() * slides.length));

    const timer = setInterval(() => {
      setCurrent((prev) => {
        let next: number;
        do {
          next = Math.floor(Math.random() * slides.length);
        } while (next === prev);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <section className={styles.hero}>
      {slides.map((src, i) => (
        <div
          key={src}
          className={styles.slide}
          style={{
            backgroundImage: `url("${src}")`,
            opacity: i === current ? 1 : 0,
            transition: `opacity ${fadeDuration}ms ease-in-out`,
          }}
        />
      ))}
      <h1 className={styles.heading}>{heading}</h1>
    </section>
  );
}
