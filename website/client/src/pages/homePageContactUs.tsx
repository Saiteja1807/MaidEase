import Head from 'next/head';
import styles from '../styles/homePageContactUs.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>

      <h1 className={styles.title}>Contact Us</h1>

      <div className={styles.contact}>
        <h2>Contact Info:</h2>
        <p>Email: inquiry@maidease.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: One Pace Plaza, New York, NY 10038</p>
        <a href="https://goo.gl/maps/12345" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
      </div>

    </div>
  );
}