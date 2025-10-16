'use client';

import React from 'react';
import styles from './SignInBox.module.css';
import { signIn } from 'next-auth/react';

export default function SignInBox() {
  return (
    <div className={styles.SignInBox}>
      <h2 className={styles.title}>Sign in to your account</h2>

      <div className={styles.buttons}>
        <button 
          className={`${styles.button} ${styles.google}`}
          onClick={() => signIn('google')}
        >
        
          <img src="/icons/google.svg" alt="Google icon" className={styles.icon} />
          Sign in with Google
        </button>

      </div>
    </div>
  );
}
