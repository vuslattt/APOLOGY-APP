import React, { useEffect, useState } from "react";
import "./ThankYou.css";

function ThankYou() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100 + "vw",
        size: Math.random() * 20 + 10 + "px",
        duration: Math.random() * 3 + 2 + "s",
        color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Rastgele renk
      };

      setHearts((prevHearts) => [...prevHearts, heart]);

      // Kalplerin temizlenmesi
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
      }, 5000); // 5 saniye sonra kaybolsun
    };

    const interval = setInterval(createHeart, 200); // 0.2 saniyede bir yeni kalp
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="thank-you-container">
      <h1>
        Teşekkür Ederim{" "}
        <span role="img" aria-label="kalp">
          💖
        </span>
      </h1>
      <div className="hearts-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: heart.left,
              width: heart.size,
              height: heart.size,
              animationDuration: heart.duration,
              backgroundColor: heart.color, // Rastgele renkler
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ThankYou;
