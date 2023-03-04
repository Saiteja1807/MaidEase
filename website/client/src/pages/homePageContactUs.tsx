import Head from 'next/head';
import styles from '../styles/homePageContactUs.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>

      <h1 className={styles.title}>If you wanna work with us - message us!</h1>

      <div className={styles.contact}>
        <h2>Contact Info:</h2>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, Anytown USA</p>
        <a href="https://goo.gl/maps/12345" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
      </div>

    </div>
  );
}