import React, { useState } from 'react';

const FontSizeAdjuster = ({ defaultSize }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2); // Increase font size by 2 (you can adjust this value)
  };

  const decreaseFontSize = () => {
    if (fontSize > 2) {
      setFontSize(fontSize - 2); // Decrease font size by 2 (you can adjust this value)
    }
  };

  return (
    <div>
      <button onClick={increaseFontSize}>Increase Font Size</button>
      <button onClick={decreaseFontSize}>Decrease Font Size</button>
      <p style={`{ fontSize: ${fontSize}px }`}>Adjustable Text</p>
    </div>
  );
};

export default FontSizeAdjuster;