import React from 'react'

function HomePage() {

    
  return (
    <>
          <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
  <nav className="mx-auto flex max-w-7xl items-center py-2">
    <div className="mr-4 w-12 shrink-0 sm:w-16">
      <svg
        style={{ width: "100%" }}
        viewBox="0 0 63 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
          stroke="#E9FCFF"
          strokeWidth="1.38962"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
          stroke="url(#paint0_linear_53_10115)"
          strokeWidth="6.99574"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
        <path
          d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
          fill="#E9FCFF"
        ></path>
        <path d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z" fill="#E9FCFF"></path>
        <path
          d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
          fill="#E9FCFF"
        ></path>
        <path
          d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
          fill="#E9FCFF"
        ></path>
        <path
          d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
          fill="#232323"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_53_10115"
            x1="2.23416"
            y1="20.3361"
            x2="26.863"
            y2="44.9649"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#007EF8"></stop>
            <stop offset="1" stopColor="#FF4A9A"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
      <input
        className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2"
        placeholder="Search"
      />
      <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
      </span>
    </div>
  </nav>
</header>


                {/* first fixing end */}


  <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
    <aside
      className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
      <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
      <li>
        <button
          className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
          <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
            <svg style={{width: "100%"}} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 15.9997H14M9.0177 1.76375L2.23539 7.03888C1.78202 7.3915 1.55534 7.56781 1.39203 7.78861C1.24737 7.9842 1.1396 8.20454 1.07403 8.43881C1 8.70327 1 8.99045 1 9.56481V16.7997C1 17.9198 1 18.4799 1.21799 18.9077C1.40973 19.284 1.71569 19.59 2.09202 19.7818C2.51984 19.9997 3.07989 19.9997 4.2 19.9997H15.8C16.9201 19.9997 17.4802 19.9997 17.908 19.7818C18.2843 19.59 18.5903 19.284 18.782 18.9077C19 18.4799 19 17.9198 19 16.7997V9.56481C19 8.99045 19 8.70327 18.926 8.43881C18.8604 8.20454 18.7526 7.9842 18.608 7.78861C18.4447 7.56781 18.218 7.3915 17.7646 7.03888L10.9823 1.76376C10.631 1.4905 10.4553 1.35388 10.2613 1.30136C10.0902 1.25502 9.9098 1.25502 9.73865 1.30136C9.54468 1.35388 9.36902 1.4905 9.0177 1.76375Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
              </path>
            </svg>
          </span>
          <span className="block sm:hidden sm:group-hover:inline lg:inline">Home</span>
        </button>
      </li>
      <li className="hidden sm:block">
        <button
          className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
          <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
            <svg style={{width: "100%"}} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 21V10M1 12V19C1 20.1046 1.89543 21 3 21H16.4262C17.907 21 19.1662 19.9197 19.3914 18.4562L20.4683 11.4562C20.7479 9.6389 19.3418 8 17.5032 8H14C13.4477 8 13 7.55228 13 7V3.46584C13 2.10399 11.896 1 10.5342 1C10.2093 1 9.91498 1.1913 9.78306 1.48812L6.26394 9.40614C6.10344 9.76727 5.74532 10 5.35013 10H3C1.89543 10 1 10.8954 1 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
              </path>
            </svg>
          </span>
          <span className="block sm:hidden sm:group-hover:inline lg:inline">Liked Videos</span>
        </button>
      </li>

      {/* <!-- Repeat similar corrections for each <li> item and SVG path --> */}

      <li className="">
  <button
    className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
      <svg
        style={{ width: "100%" }}
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.7 11.5L18.7005 9.5L16.7 11.5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C13.3019 1 16.1885 2.77814 17.7545 5.42909M10 5V10L13 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    </span>
    <span className="block sm:hidden sm:group-hover:inline lg:inline">History</span>
  </button>
</li>

<li className="hidden sm:block">
  <button
    className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
      <svg
        style={{ width: "100%" }}
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 4.93137C21 4.32555 21 4.02265 20.8802 3.88238C20.7763 3.76068 20.6203 3.69609 20.4608 3.70865C20.2769 3.72312 20.0627 3.93731 19.6343 4.36569L16 8L19.6343 11.6343C20.0627 12.0627 20.2769 12.2769 20.4608 12.2914C20.6203 12.3039 20.7763 12.2393 20.8802 12.1176C21 11.9774 21 11.6744 21 11.0686V4.93137Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H11.2C12.8802 1 13.7202 1 14.362 1.32698C14.9265 1.6146 15.3854 2.07354 15.673 2.63803C16 3.27976 16 4.11984 16 5.8V10.2C16 11.8802 16 12.7202 15.673 13.362C15.3854 13.9265 14.9265 14.3854 14.362 14.673C13.7202 15 12.8802 15 11.2 15H5.8C4.11984 15 3.27976 15 2.63803 14.673C2.07354 14.3854 1.6146 13.9265 1.32698 13.362C1 12.7202 1 11.8802 1 10.2V5.8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    </span>
    <span className="block sm:hidden sm:group-hover:inline lg:inline">My Content</span>
  </button>
</li>

<li className="">
  <button
    className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
      <svg
        style={{ width: "100%" }}
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 5L10.8845 2.76892C10.5634 2.1268 10.4029 1.80573 10.1634 1.57116C9.95158 1.36373 9.69632 1.20597 9.41607 1.10931C9.09916 1 8.74021 1 8.02229 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V5M1 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V14.2C21 15.8802 21 16.7202 20.673 17.362C20.3854 17.9265 19.9265 18.3854 19.362 18.673C18.7202 19 17.8802 19 16.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    </span>
    <span className="block sm:hidden sm:group-hover:inline lg:inline">Collections</span>
  </button>
</li>


                          {/* // ======================= */}


                          <li className="">
  <button
    className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
      <svg
        style={{ width: '100%' }}
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M15 16L17 18L21 14M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="block sm:hidden sm:group-hover:inline lg:inline">Subscribers</span>
  </button>
</li>
<li className="hidden sm:block mt-auto">
  <button
    className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
      <svg
        style={{ width: '100%' }}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.09 8C8.3251 7.33167 8.78915 6.76811 9.39995 6.40913C10.0108 6.05016 10.7289 5.91894 11.4272 6.03871C12.1255 6.15849 12.7588 6.52152 13.2151 7.06353C13.6713 7.60553 13.9211 8.29152 13.92 9C13.92 11 10.92 12 10.92 12M11 16H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="block sm:hidden sm:group-hover:inline lg:inline">Support</span>
  </button>
</li>
<li className="hidden sm:block">
  <button
    className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
      <svg
        style={{ width: '100%' }}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.7273 13.7273C17.6063 14.0015 17.5702 14.3056 17.6236 14.6005C17.6771 14.8954 17.8177 15.1676 18.0273 15.3818L18.0818 15.4364C18.2509 15.6052 18.385 15.8057 18.4765 16.0265C18.568 16.2472 18.6151 16.4838 18.6151 16.7227C18.6151 16.9617 18.568 17.1983 18.4765 17.419C18.385 17.6397 18.2509 17.8402 18.0818 18.0091C17.913 18.1781 17.7124 18.3122 17.4917 18.4037C17.271 18.4952 17.0344 18.5423 16.7955 18.5423C16.5565 18.5423 16.3199 18.4952 16.0992 18.4037C15.8785 18.3122 15.678 18.1781 15.5091 18.0091L15.4545 17.9545C15.2403 17.745 14.9682 17.6044 14.6733 17.5509C14.3784 17.4974 14.0742 17.5335 13.8 17.6545C13.5311 17.7698 13.3018 17.9611 13.1403 18.205C12.9788 18.4489 12.8921 18.7347 12.8909 19.0273V19.1818C12.8909 19.664 12.6994 20.1265 12.3584 20.4675C12.0174 20.8084 11.5549 21 11.0727 21C10.5905 21 10.1281 20.8084 9.78708 20.4675C9.4461 20.1265 9.25455 19.664 9.25455 19.1818V19.1C9.24751 18.7991 9.15011 18.5073 8.97501 18.2625C8.79991 18.0176 8.55521 17.8312 8.27273 17.7273C7.99853 17.6063 7.69437 17.5702 7.39947 17.6236C7.10456 17.6771 6.83244 17.8177 6.61818 18.0273L6.56364 18.0818C6.39478 18.2509 6.19425 18.385 5.97353 18.4765C5.7528 18.568 5.51621 18.6151 5.27727 18.6151C5.03834 18.6151 4.80174 18.568 4.58102 18.4765C4.36029 18.385 4.15977 18.2509 3.99091 18.0818C3.82195 17.913 3.68785 17.7124 3.59635 17.4917C3.50485 17.271 3.45773 17.0344 3.45773 16.7955C3.45773 16.5565 3.50485 16.3199 3.59635 16.0992C3.68785 15.8785 3.82195 15.678 3.99091 15.5091L4.04546 15.4545C4.25498 15.2403 4.39556 14.9682 4.44905 14.6733C4.50255 14.3784 4.46642 14.0742 4.34546 13.8C4.23022 13.5311 4.03892 13.3018 3.79497 13.1403C3.55103 12.9788 3.26525 12.8921 2.97273 12.8909H2.81818C2.33602 12.8909 1.87353 12.6994 1.53255 12.3584C1.19158 12.0174 1 11.5549 1 11.0727C1 10.5905 1.19158 10.1281 1.53255 9.78708C1.87353 9.4461 2.33602 9.25455 2.81818 9.25455H2.9C3.20087 9.24751 3.49266 9.15011 3.73751 8.97501C3.98235 8.79991 4.16879 8.55521 4.27273 8.27273C4.39368 7.99853 4.42984 7.69437 4.3764 7.39947C4.32295 7.10456 4.18236 6.83244 3.97273 6.61818L3.91818 6.56364C3.74922 6.39478 3.61512 6.19425 3.52362 5.97353C3.43212 5.7528 3.385 5.51621 3.385 5.27727C3.385 5.03834 3.43212 4.80174 3.52362 4.58102C3.61512 4.36029 3.74922 4.15977 3.91818 3.99091C4.08714 3.82195 4.28767 3.68785 4.50839 3.59635C4.72912 3.50485 4.96571 3.45773 5.20455 3.45773C5.44348 3.45773 5.68007 3.50485 5.90079 3.59635C6.12151 3.68785 6.32204 3.82195 6.49091 3.99091L6.54546 4.04546C6.75969 4.25498 7.03178 4.39556 7.32667 4.44905C7.62156 4.50255 7.92578 4.46642 8.2 4.34546C8.46889 4.23022 8.69816 4.03892 8.85966 3.79497C9.02117 3.55103 9.1079 3.26525 9.10909 2.97273V2.81818C9.10909 2.33602 9.30064 1.87353 9.64162 1.53255C9.9826 1.19158 10.4451 1 10.9273 1C11.4095 1 11.872 1.19158 12.213 1.53255C12.554 1.87353 12.7455 2.33602 12.7455 2.81818V2.9C12.7525 3.20087 12.8499 3.49266 13.025 3.73751C13.2001 3.98235 13.4448 4.16879 13.7273 4.27273C14.0015 4.39368 14.3056 4.42984 14.6005 4.3764C14.8954 4.32295 15.1676 4.18236 15.3818 3.97273L15.4364 3.91818C15.6052 3.74922 15.8057 3.61512 16.0265 3.52362C16.2472 3.43212 16.4838 3.385 16.7227 3.385C16.9617 3.385 17.1983 3.43212 17.419 3.52362C17.6397 3.61512 17.8402 3.74922 18.0091 3.91818C18.1781 4.08714 18.3122 4.28767 18.4037 4.50839C18.4952 4.72912 18.5423 4.96571 18.5423 5.20455C18.5423 5.44348 18.4952 5.68007 18.4037 5.90079C18.3122 6.12151 18.1781 6.32204 18.0091 6.49091L17.9545 6.54546C17.745 6.75969 17.6044 7.03178 17.5509 7.32667C17.4974 7.62156 17.5335 7.92578 17.6545 8.2C17.7698 8.46889 17.9611 8.69816 18.205 8.85966C18.4489 9.02117 18.7347 9.1079 19.0273 9.10909H19.1818C19.664 9.10909 20.1265 9.30064 20.4675 9.64162C20.8084 9.9826 21 10.4451 21 10.9273C21 11.4095 20.8084 11.872 20.4675 12.213C20.1265 12.554 19.664 12.7455 19.1818 12.7455H19.1C18.7991 12.7525 18.5073 12.8499 18.2625 13.025C18.0176 13.2001 17.8312 13.4448 17.7273 13.7273Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="block sm:hidden sm:group-hover:inline lg:inline">Settings</span>
  </button>
</li>
            {/* =============== */}
      </ul>
    </aside>
    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
  <div className="flex h-full items-center justify-center">
    <div className="w-full max-w-sm text-center">
      <p className="mb-3 w-full">
        <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            ></path>
          </svg>
        </span>
      </p>
      <h5 className="mb-2 font-semibold">No videos available</h5>
      <p>There are no videos here available. Please try to search something else.</p>
    </div>
  </div>
</section>

  </div>

                  {/* // secord fixing end */}
</div>
    </>
  )
}

export default HomePage