import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-900 flex flex-col items-center justify-center p-6">
      <img src="/logo.png" alt="BROOFFICE IT Logo" className="w-24 mb-6" />
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to BROOFFICE IT</h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore the world of Books and IT Tools with us.
      </p>
      <button className="bg-accent text-white px-6 py-2 rounded-lg shadow hover:bg-secondary transition">
        Get Started
      </button>
    </div>
  );
}

export default App;
