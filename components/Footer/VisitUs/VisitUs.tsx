import React, { useState, useEffect } from "react";
import styles from "./VisitUs.module.css";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css"; // Importujemy style Leaflet

// Dynamically import the MapContainer with no SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface Coordinates {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

function VisitUs() {
  const [cords, setCords] = useState<Coordinates>({
    center: {
      lat: 49.554038,
      lng: 18.9347572,
    },
    zoom: 20,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this code runs only in the client-side environment
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  const L = require("leaflet");
  const customIcon = new L.Icon({
    iconUrl: "https://static.thenounproject.com/png/335079-200.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  const openLink = () => {
    window.open("https://maps.app.goo.gl/R5ZWD6VBv3eDzRsSA", "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3>Odwiedź nas</h3>
        <p className={styles.paragraph}>
          Serdecznie zapraszamy do odwiedzenia nas bezpośrednio w salonie.
        </p>
        <span className={styles.boldText} onClick={openLink}>
          Koniaków 1041, Koniaków 43-474
        </span>
      </div>

      <div className={styles.map} onClick={openLink}>
        <MapContainer
          center={[cords.center.lat, cords.center.lng]}
          zoom={cords.zoom}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "400px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[cords.center.lat, cords.center.lng]}
            icon={customIcon}
          >
            <Popup>Iva Kosmetologia</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default VisitUs;
