import React from 'react'

function Contact() {
  return (
      <section id="contact" className={styles.container}>
         <h1 className='sectionTitle'> Contact</h1>
         <form action="">
            <div className='formGroup'>
               <label htmlFor="name">
                  Name
               </label>
               <input 
                  type="text"
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
               />
            </div>
            <div className='formGroup'>
               <label htmlFor="email">
                  Email
               </label>
               <input 
                  type="text"
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
               />
            </div>
            <div className='formGroup'>
               <label htmlFor="message">
                  Message
               </label>
               <input 
                  name='message'
                  id='message'
                  placeholder='Message'
                  required
               />
            </div>
            <input className="hover btn" type="submit" value="Submit" />
         </form>
      </section>
  )
}

export default Contact