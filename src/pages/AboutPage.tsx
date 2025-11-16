const AboutPage = () => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold text-center text-gray-800 mb-12'>About Lanes Foundations</h1>

        {/* Mission Section */}
        <section className='mb-20'>
          <h2 className='text-4xl font-bold text-gray-800 mb-6'>Our Mission</h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            Our mission is to empower the next generation of African leaders by providing them with the tools, resources, and support they need to succeed. We believe in a future where every young person has the opportunity to reach their full potential, and we are committed to making that vision a reality through comprehensive programs in executive coaching, mental health, education, and economic empowerment.
          </p>
        </section>

        {/* Founder Section */}
        <section className='mb-20 flex flex-col md:flex-row items-center bg-gray-50 p-12 rounded-lg'>
          <div className='md:w-1/3 mb-8 md:mb-0'>
            <img src='https://via.placeholder.com/300' alt='Francis Mwangi' className='rounded-full mx-auto shadow-lg' />
          </div>
          <div className='md:w-2/3 md:pl-12'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>Meet Our Founder</h2>
            <h3 className='text-2xl font-semibold text-gray-700 mb-2'>Francis Mwangi</h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Francis Mwangi is a visionary leader with a passion for youth empowerment. With over 15 years of experience in mentorship and community development, Francis founded Lanes Foundations to address the critical gaps in support for young people in Africa. His dedication and unwavering belief in the potential of the continent's youth are the driving forces behind our organization.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className='text-4xl font-bold text-center text-gray-800 mb-12'>Our Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>Empowerment</h3>
              <p className='text-gray-600'>We believe in giving young people the tools and confidence to take control of their futures.</p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>Integrity</h3>
              <p className='text-gray-600'>We operate with transparency and a deep sense of responsibility to our community.</p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>Community</h3>
              <p className='text-gray-600'>We foster a supportive network where everyone feels valued and connected.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;