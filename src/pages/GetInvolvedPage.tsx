import { Link } from 'react-router-dom';

const GetInvolvedPage = () => {
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold text-center text-gray-800 mb-12'>Get Involved</h1>

        {/* Volunteer Section */}
        <section className='mb-20 bg-white p-12 rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold text-gray-800 mb-6'>Volunteer With Us</h2>
          <p className='text-lg text-gray-600 leading-relaxed mb-8'>
            Become a part of our mission by volunteering your time and skills. We are looking for passionate individuals to help with mentorship, event coordination, and administrative support. Your contribution can make a real difference.
          </p>
          <Link to='/contact' className='bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300'>Become a Volunteer</Link>
        </section>

        {/* Donate Section */}
        <section className='mb-20 bg-white p-12 rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold text-gray-800 mb-6'>Make a Donation</h2>
          <p className='text-lg text-gray-600 leading-relaxed mb-8'>
            Your financial support helps us expand our programs and reach more young people across Africa. Every donation, no matter the size, contributes to building a brighter future. All donations are tax-deductible.
          </p>
          <Link to='/contact' className='bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition duration-300'>Donate Now</Link>
        </section>

        {/* Partnership Section */}
        <section className='bg-white p-12 rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold text-gray-800 mb-6'>Partner With Us</h2>
          <p className='text-lg text-gray-600 leading-relaxed mb-8'>
            We collaborate with corporations, NGOs, and community organizations to amplify our impact. If your organization shares our vision, we would love to explore partnership opportunities.
          </p>
          <Link to='/contact' className='bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300'>Become a Partner</Link>
        </section>
      </div>
    </div>
  );
};

export default GetInvolvedPage;