import { useEffect, useState } from 'react';

import Header from '../header/header';

import './app.scss';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(function initTheme() {
    document.body.setAttribute('data-theme', theme);
  }, [theme])

  return (
    <>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
      />
    </>
  );
};

export default App;