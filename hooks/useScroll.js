import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setScroll(window.scrollY);
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);

  return scroll;
};

export default useScroll;
