import { useState } from 'react';

export const useMobile = () => {
  const [isMobile, setIMobile] = useState(true);
  return { isMobile };
};
