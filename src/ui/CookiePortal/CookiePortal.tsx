'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './CookiePortal.module.css';
import { Button, Text, UILink } from '@/ui';

export const CookiePortal = () => {
  const [isVisible, setIsVisible] = useState(() => {
    const hasConsented = sessionStorage.getItem('cookie-consent');
    return !hasConsented;
  });

  const hasConsented = sessionStorage.getItem('cookie-consent');

  if (!hasConsented) {
    setIsVisible(true);
  }

  const handleAccept = () => {
    sessionStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const portalRoot = document.getElementById('cookie-portal');

  if (!portalRoot) return null;

  return createPortal(
    <div className={styles.overlay}>
      <p className={styles.title}>Мы используем куки-файлы</p>
      <Text color="black" size="small" className={styles.mb4}>
        Это чтобы сайт работал лучше.
      </Text>
      <Text color="black" size="small" className={styles.mb14}>
        Оставаясь на сайте, вы соглашаетесь на использование{' '}
        <UILink size="small" href="cookie-policy" color="black" underline>
          файлов куки
        </UILink>
        .
      </Text>
      <Button
        bg="black"
        color="white"
        size="small"
        className={styles.button}
        onClick={handleAccept}
      >
        Хорошо
      </Button>
    </div>,
    portalRoot,
  );
};
