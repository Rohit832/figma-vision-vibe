import React, { useState } from 'react';

const BottomSection: React.FC = () => {
  const [isBookingDemo, setIsBookingDemo] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const handleBookDemo = () => {
    setIsBookingDemo(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBookingDemo(false);
      alert('Demo booking request submitted! We will contact you soon.');
    }, 1500);
  };

  const handleHowItWorks = () => {
    setShowHowItWorks(!showHowItWorks);
  };

  return (
    <section className="absolute w-[681px] h-[178px] flex flex-col items-start gap-[52px] left-[599px] top-[767px] bottom-[section] max-md:relative max-md:w-full max-md:mt-[30px] max-md:left-0 max-md:top-0">
      <div className="flex items-start gap-3.5 self-stretch relative max-sm:flex-col max-sm:gap-5">
        <div className="w-[436px] h-[47px] text-black text-2xl font-normal relative max-sm:text-xl max-sm:w-full">
          <p className="font-normal text-2xl text-black max-sm:text-xl">
            Backed by India's most trusted finance educators. Built for teams
            who care
          </p>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2e03527abb832e2123c42a0ae25f2950f2e06b29?width=462"
          alt="Trusted educators avatars"
          className="flex items-center relative max-sm:self-center"
        />
      </div>
      
      <div className="flex w-[527px] items-center gap-[35px] relative max-md:flex-col max-md:w-full max-md:gap-5">
        <button
          onClick={handleBookDemo}
          disabled={isBookingDemo}
          className="flex w-[223px] justify-center items-center gap-[7.549px] shrink-0 border shadow-[3px_4px_0_0_#000] relative bg-[#14BA8C] px-3 py-2.5 rounded-[5px] border-solid border-black max-md:w-full hover:bg-[#12a67a] transition-colors disabled:opacity-70"
          aria-label="Book a demo session"
        >
          <span className="text-white text-2xl font-normal relative max-sm:text-xl">
            {isBookingDemo ? 'Booking...' : 'Book a Demo'}
          </span>
        </button>
        
        <button
          onClick={handleHowItWorks}
          className="flex w-[262px] h-[49px] flex-col items-start gap-2.5 shrink-0 border shadow-[3px_4px_0_0_#000] relative bg-white px-[18px] py-2 rounded-[5px] border-solid border-black max-md:w-full hover:bg-gray-50 transition-colors"
          aria-label="Learn how it works"
          aria-expanded={showHowItWorks}
        >
          <div className="flex items-center gap-[15px] relative w-[226px] h-[34px]">
            <span className="text-black font-semibold text-2xl tracking-[0.04em] max-sm:text-xl">
              HOW IT WORK
            </span>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                className={`transform transition-transform ${showHowItWorks ? 'rotate-45' : ''}`}
              >
                <path 
                  d="M4 12L12 4" 
                  stroke="white" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M8 4H12V8" 
                  stroke="white" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
      
      {showHowItWorks && (
        <div className="absolute top-full mt-4 w-full bg-white border border-black rounded-[5px] shadow-[3px_4px_0_0_#000] p-4 z-10">
          <div className="text-black text-lg">
            <h3 className="font-semibold mb-2">How Finsage Works:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Schedule a demo with our financial wellness experts</li>
              <li>Customize the program for your team's needs</li>
              <li>Launch interactive financial education sessions</li>
              <li>Track progress and measure wellness improvements</li>
            </ol>
          </div>
        </div>
      )}
    </section>
  );
};

export default BottomSection;
