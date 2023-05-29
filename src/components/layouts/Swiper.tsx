import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import { Navigation } from "swiper";

import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../../styles/TestSwiper.module.css";

// カルーセルにする画像のソースをリストにします
const images = [
  "/images/01_top/animal-arupaka_230524.jpg",
  "/images/01_top/animal-buta_230524.jpg",
  "/images/01_top/animal-hamster_230524.jpg",
  "/images/01_top/animal-inu_230524.jpg",
  "/images/01_top/animal-kuma_230524.jpg",
  "/images/01_top/animal-neko_230524.jpg",
  "/images/01_top/animal-usagi_230524.jpg",
];
const texts = [
  "夏の魅惑的な海で、煌めく波間にあるぱかが優雅に踊り舞います。",
  "自由奔放、山道のぶた。",
  "風味豊かなはむすたをいただく。",
  "忠実なイッヌが尾を振る。",
  "山中の静けさの中で、くまがのんびりと歩いている姿が広がる。",
  "ふわふわﾈｺﾁｬﾝが飼い主にすり寄る。",
  "やわらかなうさぎがぴょんぴょん。",
];

const TestCarousel = () => {
  //ページ中の要素を取得
  const prevButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevButton = prevButtonRef.current;
    if (prevButton) {
      console.log("NULLじゃないです！");
    } else {
      console.log("NULLです！");
    }
  }, []);

  //スライドの変更時に処理
  const handleSlideChange = (swiper: any) => {
    const prevButton = prevButtonRef.current;
    swiper.params.rewind = false;
    if (swiper.realIndex >= 1 && prevButton != null) {
      swiper.params.rewind = true;
      prevButton.style.opacity = "1.0";
    } else if (swiper.realIndex == 0 && prevButton != null) {
      swiper.params.rewind = false;
      prevButton.style.opacity = "0.5";
    } else {
      swiper.params.rewind = false;
    }

    swiper.update();
    console.log(swiper.realIndex);
    console.log("巻き戻し許可：" + swiper.params.rewind);
  };

  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.slideButton}>
        <div
          ref={prevButtonRef}
          id="button_prev"
          className={styles.slidePrev}
        ></div>
        <div id="button_next" className={styles.slideNext}></div>
      </div>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={3}
        spaceBetween={30}
        speed={600}
        navigation={{
          // パラメータを設定
          prevEl: "#button_prev",
          nextEl: "#button_next",
        }}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        {images.map((src: string, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              <div className={styles.slideCard}>
                <Image
                  src={src}
                  alt="test_image"
                  width={500}
                  height={500}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    userSelect: "none",
                  }}
                />
                <div className={styles.slideText}>
                  <p>{texts[index]}</p>
                  <p style={{ marginTop: "auto", color: "#9F9F9F" }}>
                    2023/00/00
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestCarousel;
