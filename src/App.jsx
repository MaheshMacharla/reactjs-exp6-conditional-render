import { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <h1>Conditional Rendering Example</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Component
      </button>

      {/* Conditional rendering */}
      {isVisible && <MyComponent />}
    </div>
  );
}

// Component to show/hide
function MyComponent() {
  return (
    <div className="my-component">
      Hello! I am visible now.
    </div>
  );
}

export default App;
