import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <>
      <section className='section contact center' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      </section>
      <div className='email contact center'>
        <b>wangrogerc@gmail.com</b>
      </div>
    </>
  )
}

export default Contact
