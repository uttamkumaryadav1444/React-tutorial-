// src/components/ImageCarousel.js
import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "/images/CAR1.jpeg",
    "/images/CAR2.jpeg",
    "/images/CAR5.jpeg",
    "/images/computer.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div style={styles.carouselContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  carouselContainer: {
    width: "100%",
    maxWidth: "600px",
    margin: "20px auto",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },
};

export default ImageCarousel;
