// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import { AuthProvider } from './AuthProvider';
import Signup from './Signup'; // Import your login component
import MainPage from './MainPage'; // Import the Main Page component


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header"> </header>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/MainPage" element={<MainPage />} /> {/* Add this route */}
            {/* Define other routes here */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}


export default App;
