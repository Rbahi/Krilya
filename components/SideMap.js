import React, { useState } from "react";
import Image from "next/image";
import { Map, NavigationControl, Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { Poppins } from "next/font/google";
import { Carousel } from "flowbite-react";

const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function SideMap({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [popupInfo, setPopupInfo] = useState(null);

  const handleMarkerClick = (result) => {
    setPopupInfo(result);
  };

  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: 1200, height: "auto" }}
      mapStyle="mapbox://styles/nox499/clfu5o2ya005e01rp7yer86k8"
    >
      <NavigationControl />
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            anchor="bottom"
            onClick={() => handleMarkerClick(result)}
          >
            <div
              className={`cursor-pointer  transition hover:invert ${
                popupInfo &&
                popupInfo.long === result.long &&
                popupInfo.lat === result.lat &&
                "opacity-0"
              }`}
            >
              <img src="./popUp.webp" className="h-10 drop-shadow-md"></img>
              <p
                className={`absolute w-full text-center top-[7px] text-[16px] whitespace-nowrap ${poppins600.className}`}
              >
                {result.price}
              </p>
            </div>
          </Marker>
          {popupInfo &&
            popupInfo.long === result.long &&
            popupInfo.lat === result.lat && (
              <Popup
                longitude={result.long}
                latitude={result.lat}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setPopupInfo()}
              >
                <div className="popup-content">
                  <p className={`text-lg font-bold ${poppins600.className}`}>
                    {result.title}
                  </p>
                  <Carousel
                    indicators={false}
                    className=" relative h-[128px] w-full justify-center"
                  >
                    {result.imgs.map((image, index) => (
                      <div key={index}>
                        <Image
                          src={image}
                          height={1000}
                          width={1500}
                          className=" object-cover h-32"
                        />
                      </div>
                    ))}
                  </Carousel>
                  <p className="text-md">{result.description}</p>
                  <p className={`text-lg font-bold ${poppins600.className}`}>
                    {result.price}
                  </p>
                </div>
              </Popup>
            )}
        </div>
      ))}
    </Map>
  );
}

export default SideMap;
