import Image from "next/image";
import styles from "../../styles/SideOverImage.module.css";

export default function LeftImage(props: any) {
  return (
    <article className={`${styles[props.style]}`}>
      <div className={styles.side_wrapper}>
        <div className={styles.left_image}>
          <Image
            src={props.url}
            alt="test_image"
            width={500}
            height={500}
            style={{
              width: "120%",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.right_text}>{props.text}</div>
      </div>
    </article>
  );
}
