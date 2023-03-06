import Head from 'next/head';
import styles from '../styles/contactForm.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>

      <form className={styles.form}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required placeholder='enter your full name' />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required placeholder='enter your phone number'/>

        <label >Are you a:</label>
        <label htmlFor="customer">
          <input type="radio" id="customer" name="role" value="customer" required /> Customer
        </label>
        <label htmlFor="provider">
          <input type="radio" id="provider" name="role" value="provider" required />
          Service Provider
        </label>

        <label htmlFor="address">Address:</label>     
        <input id="address" name="address" type="text" required placeholder='Enter your address for example streetNo,city,zip,state'></input>

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" name="paymentMethod" required>
          <option value="">Select Payment Method</option>
          <option value="card">Credit/Debit Card</option>
          <option value="gpay">Google Pay</option>
        </select>

        <label htmlFor="terms">
          <input type="checkbox" id="terms" name="terms" required />
          I accept the terms and conditions.
        </label>

        <button type="submit">Message Us</button>
      </form>

    </div>
  );
}
