import { useState } from "react";
import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const center = [6.5916, 3.2911];

  return (
    <div className="w-[250px] md:w-[450px] h-[350px] md:h-[450px]  md:rounded-[60px] relative mx-auto">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Our office location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
