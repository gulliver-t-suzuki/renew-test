import { useEffect } from "react";
import styles from "../../styles/Main.module.css";

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const h1Element = document.querySelector("h1");
      const div = document.getElementById("bottomContents");
      const y = window.pageYOffset;
      const windowHeight = document.documentElement.clientHeight;

      //NULLチェック
      if (h1Element && div) {
        const h1Height = h1Element.getBoundingClientRect().height;
        const h1Position = windowHeight - (h1Height + windowHeight * 0.12); //h1の位置:どれだけ離すか次第,CSSと連動　*0.1はbottom: 10%
        const divPosition = div.getBoundingClientRect().top + y; //divの位置
        const changePosition = divPosition - h1Position; //固定かどうかが変わる位置
        console.log("h1の位置: ", h1Position);
        console.log("divの位置: ", divPosition);
        console.log("切り替えするスクロール量: ", changePosition);

        //現在の場所を確認して固定するかしないか判断
        if (y >= changePosition) {
          h1Element.classList.remove(styles.isFixed);
          h1Element.classList.add(styles.isAbsolute);
        } else if (y < changePosition) {
          h1Element.classList.remove(styles.isAbsolute);
          h1Element.classList.add(styles.isFixed);
        }
        console.log("div：" + div.getBoundingClientRect().top);
        console.log("h1：" + h1Element.getBoundingClientRect().top);
        console.log("スクロール量：" + y);
      } else {
      }
    };

    const h1Element = document.querySelector("h1");
    const div = document.getElementById("bottomContents");
    const y = window.pageYOffset;
    const windowHeight = document.documentElement.clientHeight;

    //NULLチェック
    if (h1Element && div) {
      const h1Height = h1Element.getBoundingClientRect().height;
      const h1Position = windowHeight - (h1Height + 80); //h1の位置:どれだけ離すか次第,CSSと連動　*0.1はbottom: 10%
      const divPosition = div.getBoundingClientRect().top + y; //divの位置
      const changePosition = divPosition - h1Position; //固定かどうかが変わる位置
      div.style.height = h1Height + "px";
      console.log(div.style.height);
      //現在の場所を確認して固定するかしないか判断
      if (y >= changePosition) {
        h1Element.classList.remove(styles.isFixed);
        h1Element.classList.add(styles.isAbsolute);
      } else if (y < changePosition) {
        h1Element.classList.remove(styles.isAbsolute);
        h1Element.classList.add(styles.isFixed);
      }
    } else {
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="bottomContents"
        className={styles.bottomContents}
        style={{
          maxWidth: "1200px",
          position: "relative",
          margin: "60% auto 0 auto",
        }}
      >
        <h1
          style={{ backgroundColor: "#fff5" }}
          className={(styles.isFixed, styles.h1)}
        >
          行間は
          <br />
          120px指定
        </h1>
      </div>
    </div>
  );
};

export default Main;
