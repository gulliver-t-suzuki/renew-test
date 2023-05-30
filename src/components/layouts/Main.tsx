import { useEffect } from "react";
import styles from "../../styles/Main.module.css";

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const h1Element = document.querySelector("h1");
      const y = window.pageYOffset;
      if (h1Element) {
        const h1Height = h1Element.getBoundingClientRect().height;

        if (y >= 255 + h1Height) {
          h1Element.classList.remove(styles.isFixed);
          h1Element.classList.add(styles.isAbsolute);
        } else if (y < 255 + h1Height) {
          h1Element.classList.remove(styles.isAbsolute);
          h1Element.classList.add(styles.isFixed);
        }
      } else {
      }
    };

    const h1Element = document.querySelector("h1");
    const y = window.pageYOffset;
    if (h1Element) {
      if (y >= 412) {
        h1Element.classList.remove(styles.isFixed);
        h1Element.classList.add(styles.isAbsolute);
      } else if (y < 412) {
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
          style={{ backgroundColor: "#fff5" }}
          className={(styles.isFixed, styles.h1)}
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
