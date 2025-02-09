import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive';
import { secretKeys } from '../constants/secrets';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  }

  const isMobile = useMediaQuery({
    maxWidth: 768
})

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        secretKeys.serviceId,
        secretKeys.templateId,
        {
          from_name: form.name,
          to_name: 'Hitansh',
          from_email: form.email,
          to_email: 'paliwalhitansh@gmail.com',
          message: form.message,
        },
        secretKeys.publicKey,
      );

      setLoading(false);
      alert('Your email has been sent!')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong!')
    }
    
  }

  return (
    <section id="contact" className='c-space my-20'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
          {!isMobile && 
              <img src="/assets/terminal.png" alt="terminal background"  className='absolute inset-0 min-h-screen'/>
          }
          <div className='contact-container'>
            <h3 className='head-text'>Let&apos;s talk</h3>
            <p className='text-lg text-white-600 mt-3'>
              I&apos;d love to hear about your projects and how I can help. Please fill out the form, and I&apos;ll get back to you as soon as possible.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
              <label className='space-y-3'>
                <span className='field-label'>Full Name</span>
                <input 
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className='field-input'
                />
              </label>
              <label className='space-y-3'>
                <span className='field-label'>Email</span>
                <input 
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className='field-input'
                />
              </label>
              <label className='space-y-3'>
                <span className='field-label'>Your message</span>
                <textarea 
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi, I needed help with ..."
                  className='field-input'
                />
              </label>
              <button className='field-btn' type='submit' disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
              </button>
            </form>
          </div>
      </div>
      
    </section>
  )
}

export default Contact
