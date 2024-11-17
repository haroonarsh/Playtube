import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomePage() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* <Navbar /> */}
      
      <nav className="fixed w-full bg-slate-900 backdrop-blur-sm z-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <div className="mr-4 w-12 shrink-0 sm:w-16">
        <svg
          style={{ width: "100%" }}
          viewBox="0 0 63 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
            stroke="#E9FCFF"
            strokeWidth="1.38962"
            strokeMiterlimit="10"></path>
          <path
            d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
            stroke="url(#paint0_linear_53_10115)"
            strokeWidth="6.99574"
            strokeMiterlimit="10"
            strokeLinecap="round"></path>
          <path
            d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
            fill="#E9FCFF"></path>
          <path
            d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
            fill="#E9FCFF"></path>
          <path
            d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
            fill="#E9FCFF"></path>
          <path
            d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
            fill="#E9FCFF"></path>
          <path
            d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
            fill="#232323"></path>
          <defs>
            <linearGradient
              id="paint0_linear_53_10115"
              x1="2.23416"
              y1="20.3361"
              x2="26.863"
              y2="44.9649"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#007EF8"></stop>
              <stop
                offset="1"
                stopColor="#FF4A9A"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
          </div>
          <div className="hidden md:block">
            <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              Sign In
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
      <main className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Launch Your Journey Today
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl">
            Join thousands of innovators who have already taken the first step towards their dreams.
          </p>
          <Link to='/register' className="group bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Register Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center">
              <div className="text-white">
                <span className="block text-3xl font-bold">10k+</span>
                <span className="text-gray-300">Active Users</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-white">
                <span className="block text-3xl font-bold">95%</span>
                <span className="text-gray-300">Success Rate</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-white">
                <span className="block text-3xl font-bold">24/7</span>
                <span className="text-gray-300">Support</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
