import { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you shortly.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className='bg-white'>
      <div className='container mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold text-center text-gray-800 mb-12'>Contact Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Get in Touch</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-lg font-medium text-gray-700'>Name</label>
                <input type='text' name='name' id='name' value={form.name} onChange={handleChange} required className='mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500' />
              </div>
              <div>
                <label htmlFor='email' className='block text-lg font-medium text-gray-700'>Email</label>
                <input type='email' name='email' id='email' value={form.email} onChange={handleChange} required className='mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500' />
              </div>
              <div>
                <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Message</label>
                <textarea name='message' id='message' value={form.message} onChange={handleChange} rows={5} required className='mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'></textarea>
              </div>
              <div>
                <button type='submit' className='w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300'>Send Message</button>
              </div>
            </form>
          </div>
          <div className='bg-gray-50 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contact Information</h2>
            <div className='space-y-4 text-lg text-gray-600'>
              <p><strong>Founder:</strong> Francis Mwangi</p>
              <p><strong>Phone:</strong> +254740819435</p>
              <p><strong>Email:</strong> info@lanesfoundations.org</p>
              <p><strong>Address:</strong> Nairobi, Kenya (Placeholder)</p>
            </div>
            <div className='mt-8'>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>Follow Us</h3>
              <div className='flex space-x-4'>
                <a href='#' className='text-gray-500 hover:text-blue-600'><svg className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24'><path d='M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03-.78-.84-1.9-1.36-3.13-1.36-2.38 0-4.3 1.92-4.3 4.3 0 .34.04.67.11.98-3.57-.18-6.73-1.89-8.85-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.92 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.13 2.94 4.02 2.97-1.47 1.15-3.33 1.84-5.35 1.84-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.89 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.22z' /></svg></a>
                <a href='#' className='text-gray-500 hover:text-blue-600'><svg className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-5h-2v-2h2V8.5c0-2.17 1.39-3.35 3.42-3.35.98 0 1.8.07 2.04.1v1.94h-1.18c-1.06 0-1.26.5-1.26 1.23V10h2.22l-.28 2h-1.94v5h-2z' /></svg></a>
                <a href='#' className='text-gray-500 hover:text-blue-600'><svg className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24'><path d='M16.5 5c-1.54 0-2.8 1.26-2.8 2.8s1.26 2.8 2.8 2.8 2.8-1.26 2.8-2.8-1.26-2.8-2.8-2.8zm-4.7 0c-1.54 0-2.8 1.26-2.8 2.8s1.26 2.8 2.8 2.8 2.8-1.26 2.8-2.8-1.26-2.8-2.8-2.8zm-4.7 0C5.56 5 4.3 6.26 4.3 7.8s1.26 2.8 2.8 2.8 2.8-1.26 2.8-2.8-1.26-2.8-2.8-2.8zM12 14.2c-2.33 0-4.22 1.89-4.22 4.22s1.89 4.22 4.22 4.22 4.22-1.89 4.22-4.22-1.89-4.22-4.22-4.22zm0 6.44c-1.21 0-2.2-1-2.2-2.22s1-2.22 2.2-2.22 2.2 1 2.2 2.22-1 2.22-2.2 2.22z' /></svg></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;