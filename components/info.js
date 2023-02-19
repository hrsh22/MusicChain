import styles from "./info.module.css";
import Image from "next/image";

export function Info({ info }) {
  if (info) {
    return (
      <div className={styles.Info}>
        <>
          <Image
            className={styles.InfoImg}
            src={info["picture"]}
            alt="pp"
            width="75"
            height="75"
          />
        </>
        <>
          <h3 className={styles.Heading}>Name</h3>
          <p className={styles.HeadingValue}>{info["name"]}</p>
        </>
        <>
          <h3 className={styles.Heading}>Email</h3>
          <p className={styles.HeadingValue}>{info["email"]}</p>
        </>
      </div>
    );
  }
}