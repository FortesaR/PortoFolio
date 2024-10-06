import React, { useState, ChangeEvent, FormEvent } from 'react';
import mail from "../assets/icon/mail (2).svg";
import call from "../assets/icon/call.svg";
import location from "../assets/icon/location.svg";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: "a56d3ef0-5870-40b1-b507-39b7bc3d5d1f",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully! I will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=' font-mono flex flex-col items-center justify-center gap-20 bg-violet-100 p-8 lg:p-12'>
      <div className='relative'>
        <h1 className='underline decoration p-0 px-6 text-3xl md:text-[60px] font-semibold text-center mt-[40px] text-customPurple mb-14 uppercase'>
          Get in touch
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row gap-16 lg:gap-36 max-w-[1200px] w-full'>
       
        <div className='flex flex-col gap-8 flex-1'>
        <h1 className='text-4xl lg:text-5xl font-bold  bg-clip-text  text-customPurple'>
        Let's talk
        </h1>

          <p className='max-w-[550px] text-gray-900 text-lg leading-relaxed'>
            I am currently available to take on new projects and collaborations. Feel free to reach out, and let's create something amazing together.
          </p>
          <div className='flex flex-col gap-8 text-gray-900 text-lg'>
            <div className='flex items-center gap-5'>
              <img src={mail} alt="Email icon" className='w-6 h-6' />
              <p>fortesa@gmail.com</p>
            </div>
            <div className='flex items-center gap-5'>
              <img src={call} alt="Phone icon" className='w-6 h-6' />
              <p>+38343810990</p>
            </div>
            <div className='flex items-center gap-5'>
              <img src={location} alt="Location icon" className='w-6 h-6' />
              <p>Prishtina, Kosovo</p>
            </div>
          </div>
        </div>

        
        <form className='flex flex-col items-start gap-8 flex-1' onSubmit={handleSubmit}>
          <label htmlFor="name" className='text-gray-900 text-lg font-medium'>Your Name</label>
          <input 
            type="text" 
            id="name"
            placeholder='Enter your name' 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className='border-none w-full h-[60px] lg:h-[78px] rounded-md bg-[#F4F0FF] text-[#4B4B4B] p-4 font-sans text-base shadow-sm focus:ring-2 focus:ring-[#2E0854] transition'
          />

          <label htmlFor="email" className='text-gray-900 text-lg font-medium'>Your Email</label>
          <input 
            type='email' 
            id="email"
            placeholder='Enter your email' 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className='border-none w-full h-[60px] lg:h-[78px] rounded-md bg-[#F4F0FF] text-[#4B4B4B] p-4 font-sans text-base shadow-sm focus:ring-2 focus:ring-[#2E0854] transition'
          />

          <label htmlFor="message" className='text-gray-900 text-lg font-medium'>Your Message</label>
          <textarea 
            id="message"
            name='message' 
            rows={6} 
            placeholder='Enter your message' 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className='border-none w-full h-[120px] lg:h-[150px] rounded-md bg-[#F4F0FF] text-[#4B4B4B] p-4 font-sans text-base shadow-sm focus:ring-2 focus:ring-[#2E0854] transition'
          />

          <button 
            type="submit" 
            className={`border-none text-white rounded-full bg-gradient-to-r from-[#2E0854] to-[#B415ff] text-lg lg:text-xl p-4 lg:p-5 mb-12 cursor-pointer transition-transform duration-300 hover:scale-110 ${isSubmitting ? 'opacity-50' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
          {submitMessage && (
            <p className={`mt-4 text-lg ${submitMessage.includes('Error') ? 'text-red-500' : 'text-customPurple'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
