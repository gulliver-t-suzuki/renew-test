import Image from "next/image";
import styles from "../../styles/SideOverImage.module.css";

export default function RightImage(props: any) {
  return (
    <article className={`${styles[props.style]}`}>
      <div className={styles.side_wrapper}>
        <div className={styles.left_text}>{props.text}</div>
        <div className={styles.right_image}>
          <img
            src={props.url}
            alt="test_image"
            style={{
              position: "absolute",
              left: "0",
            }}
          />
        </div>
      </div>
    </article>
  );
}
