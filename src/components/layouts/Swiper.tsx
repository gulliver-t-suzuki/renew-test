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
  "あるぱか",
  "ぶた",
  "はむすた",
  "イッヌ",
  "くま",
  "ﾈｺﾁｬﾝ！",
  "うさぎ",
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
      prevButton.classList.remove("swiper-button-disabled");
    } else if (swiper.realIndex == 0 && prevButton != null) {
      swiper.params.rewind = false;
      prevButton.classList.add("swiper-button-disabled");
    } else {
      swiper.params.rewind = false;
    }

    swiper.update();
    console.log(swiper.realIndex);

    console.log("巻き戻し許可：" + swiper.params.rewind);
  };

  return (
    <div className={styles.slider_wrapper}>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={3}
        spaceBetween={24}
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
              <div>
                <Image
                  src={src}
                  alt="test_image"
                  width={500}
                  height={500}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <p>{texts[index]}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        ref={prevButtonRef}
        id="button_prev"
        className="swiper-button-prev"
      ></div>
      <div id="button_next" className="swiper-button-next"></div>
    </div>
  );
};

export default TestCarousel;
