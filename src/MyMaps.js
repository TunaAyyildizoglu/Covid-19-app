import React, { useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./data/countries.json";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

const MyMap = () => {
  const navigate = useNavigate();

  const changeCountryColor = (event) => {
    console.log(event.target.feature.properties)
    navigate(`/detail?country=${event.target.feature.properties.ISO_A3}&region=${event.target.feature.properties.ADMIN}`);
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;

    layer.options.fillOpacity = Math.random();

    layer.on({
      click: changeCountryColor,
    });
    
     
    layer.bindTooltip(countryName);
  };

  return (
    <div className="mt-4">
      <MapContainer style={{ height: "80vh" }} zoom={1.5} center={[20, 100]}>
        <GeoJSON
          data={mapData.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default MyMap;
