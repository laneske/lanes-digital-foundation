import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: 'Executive Coaching',
      description: 'Our executive coaching program is designed to guide young professionals and aspiring leaders. We provide personalized mentorship to help them develop critical leadership skills, navigate career challenges, and create a clear path to success.',
      imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/executive-coaching-9epvibw-1763317167178.webp',
    },
    {
      title: 'Mental Health Packages',
      description: 'We prioritize the mental and emotional well-being of our participants. Our mental health packages offer access to qualified therapists, counseling sessions, and wellness workshops to ensure that young leaders have the support they need to thrive in all aspects of life.',
      imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/mental-health-tl5uja9-1763317175105.webp',
    },
    {
      title: 'Free Lessons & Workshops',
      description: 'Education is at the heart of what we do. We offer a wide range of free lessons and workshops on topics such as financial literacy, digital skills, public speaking, and entrepreneurship. These sessions are designed to be practical, engaging, and accessible to all.',
      imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/free-lessons-5abxei8-1763317181989.webp',
    },
    {
      title: 'Earning Opportunities',
      description: 'We connect our participants with tangible earning opportunities. Through partnerships with local and international companies, we provide access to internships, freelance projects, and full-time positions, helping to create pathways to financial independence.',
      imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ef3c6c8-945c-47eb-a790-eb154f51cf1e/earning-opportunities-0dxuq9c-1763317189155.webp',
    },
  ];

  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold text-center text-gray-800 mb-12'>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {services.map((service, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <img src={service.imageUrl} alt={service.title} className='w-full h-64 object-cover' />
              <div className='p-8'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>{service.title}</h2>
                <p className='text-gray-600 leading-relaxed mb-6'>{service.description}</p>
                <Link to='/contact' className='text-blue-600 font-bold hover:underline'>Learn More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;