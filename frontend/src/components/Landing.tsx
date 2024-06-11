export const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center bg-slate-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome User</h1>
        <p className="text-lg mb-8">
          Your solution for efficient and productive coding challenges.
        </p>
        <a
          href="#"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Features</h2>
          <p className="text-gray-600 mt-4">
            Our platform offers a variety of features to help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-indigo-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 10H5m14 4H5m4 4H5m8-8h2a2 2 0 012 2v2a2 2 0 01-2 2h-2v4m0-4H7m8-4H7m4-4H7m4 4v4m-4-4V8a2 2 0 012-2h2m4 4v4m-4 4H9m-4 4h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Problems</h3>
            <p className="text-gray-600">
              Solve a variety of problems to improve your coding skills.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-indigo-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-6C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zM9.293 9.293a1 1 0 011.414 0L12 10.586l1.293-1.293a1 1 0 011.414 1.414L13.414 12l1.293 1.293a1 1 0 01-1.414 1.414L12 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L10.586 12l-1.293-1.293a1 1 0 010-1.414z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Activity</h3>
            <p className="text-gray-600">
              Indulge in the insightful activity feed to track your progress.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-indigo-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-6C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zM9.293 9.293a1 1 0 011.414 0L12 10.586l1.293-1.293a1 1 0 011.414 1.414L13.414 12l1.293 1.293a1 1 0 01-1.414 1.414L12 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L10.586 12l-1.293-1.293a1 1 0 010-1.414z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Leaderboard</h3>
            <p className="text-gray-600">
              Get your rank amongs other users and compete with them.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          &copy; 2024 Horse Code. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
