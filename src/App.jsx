
import { useState } from 'react';
import './App.css';

function App() {
  const levels = [
    { name: 'rizz', code: 'FA-123' },
    { name: 'Desert Dash', code: 'DD-456' },
    { name: 'Ocean Odyssey', code: 'OO-789' },
    { name: 'Mountain Climb', code: 'MC-321' },
    { name: 'Sky High', code: 'SH-654' }
  ];

  const [randomLevel, setRandomLevel] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleRandomLevel = () => {
    const level = levels[Math.floor(Math.random() * levels.length)];
    setRandomLevel(level);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(randomLevel.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
    setTimeout(() => {
      setRandomLevel(null);
      setCopied(false);
    }, 15000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <>
          {!randomLevel && (
            <>
              <img src="appelimage.jpg" className="App-logo" alt="logo" />
              <p>Appel custom level codes</p>
            </>
          )}
          <p className="small">Click the button to get a random level:</p>
          <button onClick={handleRandomLevel} style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>
            Random Level
          </button>
          {randomLevel && (
            <div style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
              <strong>Level Name:</strong> {randomLevel.name}<br />
              <button
                style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
                onClick={handleCopy}
              >
                Copy Code
              </button>
              {copied && (
                <div style={{
                  marginTop: '1rem',
                  color: '#4caf50',
                  fontWeight: 'bold',
                  display: 'block'
                }}>
                  Code copied!
                </div>
              )}
            </div>
          )}
        </>
      </header>
    </div>
  );
}

export default App;
