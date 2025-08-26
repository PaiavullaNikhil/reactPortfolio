import React, { useEffect, useState } from 'react';
import Loading from './components/Loading1';
import Home from './pages/Home';
import Lenis from 'lenis'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading time (e.g., API call or fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    }
  }, [])


  return (
    <div>
      {isLoading ? <Loading /> : <Home />}
    </div>
  );
};

export default App;
