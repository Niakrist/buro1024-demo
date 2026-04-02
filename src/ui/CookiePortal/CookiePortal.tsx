'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './CookiePortal.module.css';
import { Button, Text, UILink } from '@/ui';

export const CookiePortal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Проверяем наличие sessionStorage только на клиенте
  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== 'undefined') {
      const hasConsented = sessionStorage.getItem('cookie-consent');
      setIsVisible(!hasConsented);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('cookie-consent', 'true');
      setIsVisible(false);
    }
  };

  // Не показываем ничего до монтирования на клиенте
  if (!isMounted || !isVisible) return null;

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
