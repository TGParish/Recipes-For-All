import { useState, useEffect } from 'react';

export default function useDarkmode() {
  const [mode, setMode] = useState('');

  const toggleMode = (modeValue) => {
    setMode(modeValue);
  };
}
