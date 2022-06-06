import React, { useState } from 'react';
import styles from './VisitUs.module.css';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function VisitUs() {
  const [cords, setCords] = useState({
    center: {
      lat: 49.554038,
      lng: 18.9347572,
    },
    zoom: 15,
  });
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3>Odwiedź nas</h3>

        <p className={styles.paragraph}>
          Serdecznie zapraszamy do odwiedzenia nas bezpośrednio w salonie.
        </p>

        <span className={styles.boldText}>Koniaków 1041, Koniaków 43-474</span>
      </div>

      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          defaultCenter={cords.center}
          defaultZoom={cords.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={cords.center.lat}
            lng={cords.center.lng}
            text="Iva Kosmetologia"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default VisitUs;
