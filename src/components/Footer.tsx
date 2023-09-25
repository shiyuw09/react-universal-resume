import viteLogo from '/vite.svg';
import { Github } from 'lucide-react';
import reactLogo from '/react.svg';
import tsLogo from '/ts-logo-128.svg';

function Footer() {
  return (
    <footer className="print:hidden">
      <div className="flex justify-center items-center text-center">
        <span className="text-gray-700"> Made with </span>
        {/* <Heart className="inline-block w-4 text-red-500" />{' '} */}
        <a href="https://vitejs.dev" target="_blank" className="inline-block">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="inline-block">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="inline-block"
        >
          <img src={tsLogo} className="logo" alt="TypeScript logo" />
        </a>
      </div>

      <p className="text-center text-gray-700 mt-2 mb-8 italic">
        Inspired by{' '}
        <div className="underline inline-block">
          <Github className="inline-block w-5 h-5 -mt-1 -mr-1" />{' '}
          <a
            href="https://github.com/WebPraktikos/universal-resume"
            target="_blank"
          >
            WebPraktikos/universal-resume
          </a>
        </div>
      </p>
      <p className="text-center text-gray-650 text-xs italic">
        Last updated: 25 Sep, 2023
      </p>
    </footer>
  );
}

export default Footer;
