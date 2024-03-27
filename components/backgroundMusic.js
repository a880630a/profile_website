import React, { useEffect } from "react";

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = document.getElementById("background-music");
    audio.play();
  }, []);

  return (
    <audio id="background-music" loop>
      <source src="/coldplay_guitar.mp3" type="audio/mp3" />
      您的瀏覽器不支援audio元素。
    </audio>
  );
};

export default BackgroundMusic;
