

const Banner = () => {
  return (
    <div className="relative bg-gray-100 h-screen">
      <div
       className="absolute inset-0 bg-cover bg-center"
       style={{ backgroundImage: "url('/banner.jpg')" }}
      ></div>
      <div className="relative z-10 bg-gray-900 bg-opacity-50 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl text-left">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to <span className="text-[#Ac4ae0]">FitTrack</span>
            </h1>
            <p className="text-xl mb-8 text-[#adabad]">
              Your ultimate companion for tracking workouts, managing diet, and
              monitoring health metrics. Achieve your fitness goals with ease.
            </p>
            <a
              href="/signup"
              className="inline-block px-6 py-3 bg-[#ac4ae0] text-white font-semibold rounded-lg shadow-md hover:bg-[#1e2537] transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;