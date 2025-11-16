const ProgramsPage = () => {
  const programs = [
    {
      title: 'Leadership Accelerator Program',
      description: 'An intensive 12-week program for emerging leaders. Participants receive one-on-one coaching, attend leadership workshops, and work on a capstone project that addresses a real-world challenge in their community.',
      duration: '12 Weeks',
      eligibility: 'Ages 22-30, demonstrated leadership potential.',
    },
    {
      title: 'Digital Skills Bootcamp',
      description: 'A comprehensive bootcamp covering the most in-demand digital skills, including web development, digital marketing, and data analysis. This program is designed to prepare participants for the future of work.',
      duration: '8 Weeks',
      eligibility: 'Open to all youth aged 18-35.',
    },
    {
      title: 'Wellness & Resilience Workshop Series',
      description: 'A series of workshops focused on mental health, stress management, and building resilience. These sessions provide a safe space for open conversation and practical tools for well-being.',
      duration: 'Ongoing',
      eligibility: 'Open to everyone.',
    },
    {
      title: 'Entrepreneurship Incubator',
      description: 'Our incubator supports aspiring entrepreneurs from idea to launch. We provide mentorship, business development training, and access to a network of investors and partners.',
      duration: '6 Months',
      eligibility: 'Must have a viable business idea and a strong commitment.',
    },
  ];

  return (
    <div className='bg-white'>
      <div className='container mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold text-center text-gray-800 mb-12'>Our Programs & Pathways</h1>
        <div className='space-y-12'>
          {programs.map((program, index) => (
            <div key={index} className='bg-gray-50 p-8 rounded-lg shadow-md flex flex-col md:flex-row'>
              <div className='md:w-2/3'>
                <h2 className='text-3xl font-bold text-gray-800 mb-3'>{program.title}</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>{program.description}</p>
                <div className='flex space-x-6 text-gray-700'>
                  <span><strong>Duration:</strong> {program.duration}</span>
                  <span><strong>Eligibility:</strong> {program.eligibility}</span>
                </div>
              </div>
               <div className='md:w-1/3 mt-6 md:mt-0 flex items-center justify-center'>
                <a href='/contact' className='bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300'>Apply Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;