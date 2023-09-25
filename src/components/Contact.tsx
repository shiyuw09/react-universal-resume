import MyH2 from './MyH2';

function Contact() {
  return (
    <section className="mt-8 first:mt-0">
      <div className="break-inside-avoid">
        <MyH2 text="Contact" />

        <section className="mb-4.5 break-inside-avoid">
          <ul className="list-inside pr-7">
            {/* <li className="mt-1.5 leading-normal text-gray-700 text-md flex items-center gap-2">
              <span className="flex-grow">12345678</span>
              <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>
              </span>
            </li> */}
            <li className="mt-1.5 leading-normal text-gray-700 text-md">
              <a
                href="https://github.com/shiyuw09"
                className="group flex gap-2"
                target="_blank"
              >
                <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-github"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </span>
                <span className="group-hover:underline">
                  github.com/shiyuw09
                </span>
                <span className="inline-block text-gray-550 font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                  ↗
                </span>
              </a>
            </li>
            <li className="mt-1.5 leading-normal text-gray-700 text-md">
              <a
                href="mailto:shiyu.wang.dev@gmail.com"
                className="group flex items-center gap-2"
              >
                <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </span>
                <span className="group-hover:underline">
                  shiyu.wang.dev@gmail.com
                </span>
                <span className="inline-block text-gray-550 font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                  ↗
                </span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Contact;
