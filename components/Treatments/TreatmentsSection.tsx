import Image from "next/image";
import React from "react";
import { TREATMENTS_DATA } from "../../constants/treatments";
import styles from "./TreatmentsSection.module.css";
import { useRouter } from "next/router";

function TreatmentsSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/cennik");
  };

  return (
    <div className={styles.container}>
      <h3>Zabiegi</h3>
      <div className={styles.treatmentsContainer}>
        {TREATMENTS_DATA.map((item, index) => {
          return (
            <div key={index} className={styles.treatment}>
              <div className={styles.treatmentImg}>
                <Image layout="responsive" src={item.img} alt={item.name} />
              </div>
              <h5>{item.name}</h5>
              <div className={styles.line} />
              <div>
                <p className={styles.price}>{item.price}</p>
                <p className={styles.duration}>{item.duration}</p>
              </div>

              <p className={styles.description}>{item.description}</p>
            </div>
          );
        })}
      </div>

      <button onClick={handleClick} className={styles.button}>
        zobacz więcej zabiegów »
      </button>
    </div>
  );
}

export default TreatmentsSection;
