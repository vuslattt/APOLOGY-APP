import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ top: "auto", left: "auto" });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const startMovingTimeout = setTimeout(() => {
      setIsMoving(true);
    }, 2000);

    return () => clearTimeout(startMovingTimeout);
  }, []);

  useEffect(() => {
    if (!isMoving) return;

    const moveButton = () => {
      const maxWidth = window.innerWidth - 80;
      const maxHeight = window.innerHeight - 80;

      const newTop = Math.random() * maxHeight + "px";
      const newLeft = Math.random() * maxWidth + "px";

      setPosition({ top: newTop, left: newLeft });
    };

    const interval = setInterval(moveButton, 200);
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
              top: isMoving ? position.top : "calc(100% + 10px)",
              left: isMoving ? position.left : "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          >
            Hayır
          </button>
        </div>
      </div>

      {/* Altına Resim ve "Nah basarsın" Yazısı */}
      <div className="nah-section">
      <p className="nah-text">YETER SORGULAMA SENİ AZRAİL DEĞİL MERAK ÖLDÜRECEK</p>
        <img
          src="https://i.hizliresim.com/LyoPgz.png"
          alt="Nah Basarsın"
          className="nah-image"
        />
        <p className="nah-text">Nah basarsın</p>
      </div>
    </div>
  );
}

export default Home;
