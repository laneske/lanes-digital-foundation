import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative h-[600px]'>
        <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/lanes-hero-jhibz9o-1763317160248.webp' alt='Lanes Foundations' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center'>
          <h1 className='text-5xl font-bold mb-4'>Empowering Africa's Future Leaders</h1>
          <p className='text-xl mb-8'>Providing executive coaching, mental health support, and opportunities for growth.</p>
          <Link to='/services' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300'>Explore Services</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center text-gray-800 mb-12'>Our Core Services</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
              <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/executive-coaching-9epvibw-1763317167178.webp' alt='Executive Coaching' className='h-40 w-full object-cover rounded-md mb-4' />
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>Executive Coaching</h3>
              <p className='text-gray-600'>Professional guidance to help young leaders navigate their career paths.</p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
              <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/mental-health-tl5uja9-1763317175105.webp' alt='Mental Health' className='h-40 w-full object-cover rounded-md mb-4' />
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>Mental Health</h3>
              <p className='text-gray-600'>Supportive packages to ensure the well-being of our future leaders.</p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
              <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/free-lessons-5abxei8-1763317181989.webp' alt='Free Lessons' className='h-40 w-full object-cover rounded-md mb-4' />
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>Free Lessons</h3>
              <p className='text-gray-600'>Access to quality education and skill-building workshops for all.</p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
              <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/earning-opportunities-0dxuq9c-1763317189155.webp' alt='Earning Opportunities' className='h-40 w-full object-cover rounded-md mb-4' />
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>Earning Opportunities</h3>
              <p className='text-gray-600'>Pathways to financial independence through practical skills and jobs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className='py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>Our Impact</h2>
          <p className='text-lg text-gray-600 mb-8'>We are committed to creating lasting change. Here's a glimpse of our journey.</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-4xl font-bold text-blue-600 mb-2'>1,000+</h3>
              <p className='text-gray-600'>Lives Touched</p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-4xl font-bold text-blue-600 mb-2'>50+</h3>
              <p className='text-gray-600'>Partnerships Formed</p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-4xl font-bold text-blue-600 mb-2'>10,000+</h3>
              <p className='text-gray-600'>Hours of Training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className='py-20 bg-blue-600 text-white'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-4'>Ready to Make a Difference?</h2>
          <p className='text-lg mb-8'>Join us in our mission to empower the next generation.</p>
          <Link to='/get-involved' className='bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300'>Get Involved</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;