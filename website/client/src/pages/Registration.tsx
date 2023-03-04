import Link from 'next/link'
import { FormEvent } from 'react'
import styles from  '../styles/Home.module.css'

export default function Registration() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      first: form.first.value as string,
      last: form.last.value as string,
    }

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    <div className={styles.container}>
      

      <form onSubmit={handleSubmit}>
        <label htmlFor="first"><b>First Name</b></label>
        <input type="text" className={styles.inputtext} id="first" name="first" required />
        <label htmlFor="last"><b>Last Name</b></label>
        <input type="text" className= {styles.inputtext}  id="last" name="last" required />
        
        <label><b>Email</b></label>
        <input type="text" className= {styles.inputtext} placeholder="Enter Email" name="email" id="email" required/>

        <label ><b>Password</b></label>
        <input type="password" className= {styles.inputtext} placeholder="Enter Password" name="psw" id="psw" required/>

        <label ><b>Repeat Password</b></label>
        <input type="password" className= {styles.inputtext} placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
        

        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
        <button type="submit" className={styles.registerbtn}>Submit</button>
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </form>
    </div>
  )
}