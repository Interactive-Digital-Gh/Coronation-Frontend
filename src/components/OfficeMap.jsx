import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, OverlayViewF } from '@react-google-maps/api';
import { motion, AnimatePresence } from 'framer-motion';
import officeHero from '../assets/office/officehero.webp';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 6.3, // Centered perfectly to fit all 5 cities in Ghana
  lng: -1.2
};

const dummyOffices = [
  { id: 1, city: 'Tema', lat: 5.670, lng: -0.010, title: 'Tema 1 | DVLA', person: 'Emelia Akon', code: 'IWI/ILA/0016/12' },
  { id: 2, city: 'Tema', lat: 5.685, lng: -0.005, title: 'Tema 2 | DVLA', person: 'Philomina Danso', code: 'IWI/ILA/0021/12' },
  { id: 3, city: 'Tema', lat: 5.660, lng: 0.005, title: 'Tema 3 | DVLA', person: 'Dorcas Eture', code: 'IWI/ILA/0080/17' },
  { id: 4, city: 'Bohye', lat: 5.640, lng: -0.190, title: 'Bohye | DVLA', person: 'Millicent | Abigail Naa Adorley Addo', code: 'WIG/ILA0083/17' },
  { id: 5, city: 'Takoradi', lat: 4.901, lng: -1.783, title: 'Takoradi | DVLA', person: 'Samuel Tetteh', code: '5575/IN/CIG/NL/E2EB' },
  { id: 6, city: 'Weija', lat: 5.560, lng: -0.330, title: 'Weija | DVLA', person: 'Daniel Yeboah', code: '14692/IN/CIG/NL/4654' },
  { id: 7, city: 'Kumasi', lat: 6.688, lng: -1.624, title: 'Kumasi | DVLA', person: 'Collins Asamoah', code: '00850/IN/CIG/NL/629A' },
  { id: 8, city: 'Kasoa', lat: 5.534, lng: -0.416, title: 'Kasoa | DVLA', person: 'Gloria Osaa', code: '15082/IN/CIG/NL/535A' },
  { id: 9, city: 'Asante Bakwai', lat: 6.453, lng: -1.583, title: 'Asante Bakwai | DVLA', person: 'Bernard Nkrumah', code: 'NIC/CORONATION/TRA/0017/23' },
  { id: 10, city: 'Takoradi', lat: 4.9011722, lng: -1.7652209, title: 'Takoradi | Liberation Road', person: 'Susan Ackah', code: 'NIC/CORONATION/TRA003' },
  { id: 11, city: 'Sunyani', lat: 7.334, lng: -2.312, title: 'Sunyani | DVLA', person: 'Samuel Arthur', code: 'NIC/CORONATION/TRA/0016/23' }
];

const OfficeMap = ({ theme = 'purple' }) => {
  const markerBg = theme === 'red' ? 'bg-[#E50000]' : 'bg-[#7a2e8c]';
  const markerBorder = theme === 'red' ? 'border-[#E50000]' : 'border-[#7a2e8c]';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAyYDLBrQ8oCFZbY7uXzU-w-XmMj6MhodA"
  });

  const [selectedOffice, setSelectedOffice] = useState(null);

  if (!isLoaded) return <div className="w-full h-[800px] flex items-center justify-center bg-[#fbf9fc] text-[#7a2e8c] font-semibold text-lg">Loading Map...</div>;

  return (
    <div className="relative w-full h-[800px] bg-[#fbf9fc] border-t border-gray-200">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        options={{
          disableDefaultUI: true, // Cleaner look without all the map controls
          zoomControl: true, // Keep zoom controls
        }}
      >
        {/* Markers using OverlayViewF to allow custom HTML/React elements */}
        {dummyOffices.map((office) => (
          <OverlayViewF
            key={office.id}
            position={{ lat: office.lat, lng: office.lng }}
            mapPaneName="overlayMouseTarget"
            getPixelPositionOffset={(width, height) => ({ x: -(width / 2), y: -(height / 2) })}
          >
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setSelectedOffice(office)}
            >
              <div className="relative flex items-center justify-center">
                {/* Glowing effect */}
                <div className={`absolute w-10 h-10 ${markerBg} rounded-full opacity-20 animate-ping group-hover:opacity-40 transition-opacity`}></div>
                {/* Outer ring */}
                <div className={`absolute w-6 h-6 border-[2px] ${markerBorder} rounded-full bg-white z-10`}></div>
                {/* Inner dot */}
                <div className={`w-[10px] h-[10px] ${markerBg} rounded-full z-20`}></div>
              </div>
              <span className="text-black font-bold text-[16px] whitespace-nowrap bg-white/70 px-2 py-0.5 rounded-md drop-shadow-sm z-20">
                {office.city}
              </span>
            </div>
          </OverlayViewF>
        ))}
      </GoogleMap>

      {/* Popup Modal with Framer Motion Animation */}
      <AnimatePresence>
        {selectedOffice && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-4" 
            onClick={() => setSelectedOffice(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-black w-full max-w-[400px] rounded-lg overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
              {/* Close button */}
              <button 
                className="absolute top-3 right-3 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full w-8 h-8 flex items-center justify-center transition z-10"
                onClick={() => setSelectedOffice(null)}
              >
                &times;
              </button>
              
              {/* Building Image */}
              <img 
                src={officeHero} 
                alt={selectedOffice.title} 
                className="w-full h-[250px] object-cover" 
              />
              
              {/* Details */}
              <div className="p-8 pb-10">
                <h2 className="text-white text-[32px] font-light mb-6 tracking-wide">{selectedOffice.title}</h2>
                <p className="text-gray-200 text-lg mb-1">{selectedOffice.person}</p>
                <p className="text-gray-400 text-md">{selectedOffice.code}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfficeMap;
