import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const images = [
  "/images/01_top/animal-arupaka_230524.jpg",
  "/images/01_top/animal-buta_230524.jpg",
  "/images/01_top/animal-hamster_230524.jpg",
  "/images/01_top/animal-inu_230524.jpg",
  "/images/01_top/animal-kuma_230524.jpg",
  "/images/01_top/animal-neko_230524.jpg",
  "/images/01_top/animal-usagi_230524.jpg",
];

const Slider = () => {
  return (
    <div>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          rewind: true,
          rewindSpeed: 1000,
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
        }}
      >
        <SplideSlide>
          <Image
            src="/images/01_top/animal-arupaka_230524.jpg"
            alt="test_image"
            width={1980}
            height={1150}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/images/01_top/animal-buta_230524.jpg"
            alt="test_image"
            width={1980}
            height={1150}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/images/01_top/animal-hamster_230524.jpg"
            alt="test_image"
            width={1980}
            height={1150}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </SplideSlide>
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};
export default Slider;
