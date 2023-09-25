import { Github, Mail } from 'lucide-react';
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
                <Github className="w-5 inline-block  print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in" />
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
                <Mail className="w-5 inline-block print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in" />
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
