'use client';

import React from 'react';
import styles from './SignBox.module.css';
import { signIn } from 'next-auth/react';

export default function SignBox() {
  return (
    <div className={styles.signBox}>
      <h2 className={styles.title}>Sign in to your account</h2>

      <div className={styles.buttons}>
        <button 
          className={`${styles.button} ${styles.google}`}
          onClick={() => signIn('google')}
        >
        
          <img src="/icons/google.svg" alt="Google icon" className={styles.icon} />
          Sign in with Google
        </button>

        <button 
          className={`${styles.button} ${styles.github}`}
          onClick={() => signIn('github')}
        >
          <img src="/icons/github.svg" alt="GitHub icon" className={styles.icon} />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
