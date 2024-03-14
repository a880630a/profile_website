import React, { useEffect } from "react";

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = document.getElementById("background-music");
    audio.play();

    // 當元件卸載時暫停音樂，避免音樂持續播放
    return () => {
      audio.pause();
    };
  }, []);

  return (
    <audio id="background-music" loop>
      <source src="/coldplay_guitar.mp3" type="audio/mp3" />
      您的瀏覽器不支援audio元素。
    </audio>
  );
};

export default BackgroundMusic;
