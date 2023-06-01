import Image from "next/image";
import styles from "../../styles/SideOverImage.module.css";

export default function LeftImage(props: any) {
  return (
    <article className={`${styles[props.style]}`}>
      <div className={styles.side_wrapper}>
        <div className={styles.left_image}>
          <img
            src={props.url}
            alt="test_image"
            style={{
              position: "absolute",
              right: "0",
              width: "auto",
              height: "100%",
            }}
          />
        </div>
        <div className={styles.right_text}>{props.text}</div>
      </div>
    </article>
  );
}
