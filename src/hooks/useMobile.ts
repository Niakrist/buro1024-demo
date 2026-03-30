import { useState } from 'react';

export const useMobile = () => {
  const [isMobile, setIMobile] = useState(false);
  return { isMobile };
};
