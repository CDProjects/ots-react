import React from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import LazyMap from './LazyMap'; // Import LazyMap from the new file
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Training.css';

// Fix for default marker icon (same as before)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Training = () => {
  const kokonPosition = [60.37827701378953, 25.647829813495363]; // Latitude and Longitude for Kokon
  const hamariPosition = [60.36593759062921, 25.641811871059215]; // Replace with actual coordinates for Hamari

  return (
    <section id="training-section" className="training-section training-page">
      <div id="training-marker"></div>
      <h1 className="section-title">TRAINING</h1>
      <div className="training-container">
        <div className="training-item">
          <h3>Juniors</h3>
          <p>THURSDAYS 18:30-19:30 @ KOKON GRASS PITCH</p>
          <LazyMap center={kokonPosition} zoom={13} scrollWheelZoom={false} className="map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={kokonPosition}>
              <Popup>Kokon Grass Pitch</Popup>
            </Marker>
          </LazyMap>
          <a href="https://maps.app.goo.gl/jxtehzqJn4foogGX6" target="_blank" rel="noopener noreferrer" className="map-link">View on Google Maps</a>
        </div>
        <div className="training-item">
          <h3>Mens</h3>
          <p>TUESDAYS 18:30-20:00 @ HAMARI</p>
          <LazyMap center={hamariPosition} zoom={13} scrollWheelZoom={false} className="map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={hamariPosition}>
              <Popup>Hamari</Popup>
            </Marker>
          </LazyMap>
          <a href="https://maps.app.goo.gl/ZfG4PeB9jQcGicpx5" target="_blank" rel="noopener noreferrer" className="map-link">View on Google Maps</a>
        </div>
        <div className="training-item">
          <p>THURSDAYS 19:00-21:00 @ KOKON GRASS PITCH</p>
          <LazyMap center={kokonPosition} zoom={13} scrollWheelZoom={false} className="map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={kokonPosition}>
              <Popup>Kokon Grass Pitch</Popup>
            </Marker>
          </LazyMap>
          <a href="https://maps.app.goo.gl/jxtehzqJn4foogGX6" target="_blank" rel="noopener noreferrer" className="map-link">View on Google Maps</a>
        </div>
      </div>
    </section>
  );
};

export default Training;