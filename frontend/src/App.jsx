import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the backend API to generate image
    try {
      const response = await fetch('http://localhost:8080/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setImage(data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="App">
      <h1>Text to Image Generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text template here"
        />
        <button type="submit">Generate Image</button>
      </form>
      {image && <img src={image} alt="Generated" />}
    </div>
  );
}

export default App;
