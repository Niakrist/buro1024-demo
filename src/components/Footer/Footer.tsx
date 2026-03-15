import React from 'react';
import { FooterTop } from './FooterTop/FooterTop';
import { FooterBottom } from './FooterBottom/FooterBottom';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};
