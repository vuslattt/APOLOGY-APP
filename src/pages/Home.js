import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ top: "auto", left: "auto" });
  const [isMoving, setIsMoving] = useState(false); // Hareket etmeye başlamak için kontrol

  useEffect(() => {
    // 2 saniye sonra buton hareket etmeye başlayacak
    const startMovingTimeout = setTimeout(() => {
      setIsMoving(true);
    }, 2000);

    return () => clearTimeout(startMovingTimeout);
  }, []);

  useEffect(() => {
    if (!isMoving) return; // Eğer hareket başlamadıysa, fonksiyonu çalıştırma

    const moveButton = () => {
      const maxWidth = window.innerWidth - 80; // Butonun çıkmaması için sınır
      const maxHeight = window.innerHeight - 70;

      const newTop = Math.random() * maxHeight + "px"; // Tüm ekran içinde yukarı-aşağı rastgele kaçma
      const newLeft = Math.random() * maxWidth + "px"; // Tam ekran içinde sağa-sola rastgele kaçma

      setPosition({ top: newTop, left: newLeft });
    };

    const interval = setInterval(moveButton, 300); // 0.2 saniyede bir hareket etsin
    return () => clearInterval(interval);
  }, [isMoving]);

  return (
    <div className="container">
      <div className="card">
        <img
          src="https://preview.redd.it/l9vklw5gh4841.jpg?width=640&crop=smart&auto=webp&s=23af19b0a52caa673ad2076aae46f9b850b967fb"
          alt="Cute Cat"
          className="cat-image"
        />
        <p className="text">Seni Üzdüğüm İçin Özür Dilerim, Barışalımmı Güzelimm?</p>
        <div className="buttons">
          <button className="yes" onClick={() => navigate("/thank-you")}>Evet</button>
          <button
            className="no"
            style={{
              position: "absolute",
              top: isMoving ? position.top : "calc(100% + 10px)", // Başlangıçta "Evet"in altında
              left: isMoving ? position.left : "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          >
            Hayır
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
