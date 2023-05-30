import Image from "next/image";

import { useRef, useEffect } from "react";
import styles from "../../styles/Main.module.css";

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const h1Element = document.querySelector("h1"); //h1の要素を取得
      const divElement = document.getElementById("bottomContents"); //"bottomContents"ID要素を取得
      const windowHeight = window.innerHeight; //現在の画面の高さを取得
      if (h1Element && divElement) {
        const h1Bottom = h1Element.getBoundingClientRect().bottom; //h1のbottom
        const divBottom = divElement.getBoundingClientRect().bottom; //指定divのbottom

        if (h1Bottom >= divBottom) {
          h1Element.classList.remove(styles.isFixed);
          h1Element.classList.add(styles.isAbsolute);

          if (
            h1Bottom + 80 > windowHeight &&
            h1Element.classList.contains(styles.isAbsolute)
          ) {
            h1Element.classList.remove(styles.isAbsolute);
            h1Element.classList.add(styles.isFixed);
            console.log("隠れちゃう！");
          }
        } else {
          console.log("見えてる！");
        }
        /*if (h1Bottom > divBottom) {
          // h1の高さが入れ物用divよりも大きくなってしまうとき
          console.log("重なった！");
          h1Element.classList.remove(styles.isFixed);
          h1Element.classList.add(styles.isAbsolute);
        } else if (h1Bottom == divBottom || h1rect > windowHeight) {
          h1Element.classList.remove(styles.isAbsolute);
          h1Element.classList.add(styles.isFixed);
          console.log("隠れちゃう！");
        } else {
        }*/
        console.log("h1 ：" + h1Element.getBoundingClientRect().bottom); //h1要素のbottomを出力
        console.log("div：" + divElement.getBoundingClientRect().bottom); //指定divのbottomを出力
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{ width: "100%", height: "100vh" }}
        className={styles.cat}
      ></div>

      <div
        id="bottomContents"
        style={{
          maxWidth: "1200px",
          position: "relative",
          fontSize: "80px",
          margin: "160px auto 0 auto",
        }}
      >
        <h1
          style={{ fontSize: "80px", backgroundColor: "#fff" }}
          className={styles.isFixed}
        >
          固定するのは
          <br />
          こいつ
        </h1>
        固定するのは
        <br />
        ここ
      </div>
    </div>
  );
};

export default Main;
