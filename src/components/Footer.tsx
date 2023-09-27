import viteLogo from '/vite.svg';
import { Github } from 'lucide-react';
import reactLogo from '/react.svg';
import tsLogo from '/ts-logo-128.svg';

function Footer() {
  return (
    <footer className="p-6  print:hidden">
      <div className="flex items-center justify-center text-center">
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
          className="inline-block">
          <img src={tsLogo} className="logo" alt="TypeScript logo" />
        </a>
      </div>

      <div className="mb-8 mt-2 text-center italic text-gray-700">
        Inspired by{' '}
        <div className="inline-block underline">
          <Github className="-mr-1 -mt-1 inline-block h-5 w-5" />{' '}
          <a
            href="https://github.com/WebPraktikos/universal-resume"
            target="_blank">
            WebPraktikos/universal-resume
          </a>
        </div>
      </div>
      <p className="text-center text-xs italic text-gray-650">
        Last updated: 25 Sep, 2023
      </p>
    </footer>
  );
}

export default Footer;
