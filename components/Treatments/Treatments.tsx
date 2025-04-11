import React from "react";
import Treatment from "./TreatmentPreview";
import styles from "./Treatments.module.css";

function Treatments({ treatments }) {
  console.log(treatments);
  return (
    <div className={styles.container}>
      <h3>Nasze zabiegi</h3>

      {treatments
        .sort((a, b) => a.Heading.localeCompare(b.Heading))
        .map((item) => (
          <Treatment
            key={item.Heading}
            name={item.Heading}
            description={item.Description}
            price={item.Price}
            duration={item.Duration}
          />
        ))}
    </div>
  );
}

export default Treatments;
