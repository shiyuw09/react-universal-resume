import { Github, Linkedin, Mail, Phone, ScrollText } from 'lucide-react';
import MyH2 from './MyH2';
import { IContact } from '..';

interface ContactProps {
  contact: IContact;
}

function Contact({ contact }: ContactProps) {
  return (
    <section className="mt-8 first:mt-0">
      <div className="break-inside-avoid">
        <MyH2 text="Contact" />

        <section className="mb-4.5 break-inside-avoid">
          <ul className="list-inside pr-7">
            <li className="mt-1.5 flex items-center gap-2 text-md leading-normal text-gray-700">
              <Phone className="inline-block w-5 font-normal transition duration-100 ease-in group-hover:text-gray-700 print:text-black" />
              <span className="flex-grow">{contact.phone}</span>
            </li>
            <li className="mt-1.5 text-md leading-normal text-gray-700">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-2">
                <Mail className="inline-block w-5 font-normal transition duration-100 ease-in group-hover:text-gray-700 print:text-black" />
                <span className="group-hover:underline">{contact.email}</span>
                <span className="inline-block font-normal text-gray-550 transition duration-100 ease-in group-hover:text-gray-700">
                  ↗
                </span>
              </a>
            </li>
            <li className="mt-1.5 text-md leading-normal text-gray-700">
              <a
                href={contact.linkedin}
                className="group flex items-center gap-2">
                <Linkedin className="inline-block w-5 font-normal transition duration-100 ease-in  group-hover:text-gray-700 print:text-black" />
                <span className="group-hover:underline">
                  {contact.linkedin}
                </span>
                <span className="inline-block font-normal text-gray-550 transition duration-100 ease-in group-hover:text-gray-700">
                  ↗
                </span>
              </a>
            </li>
            <li className="mt-1.5 text-md leading-normal text-gray-700">
              <a
                href={contact.github}
                className="group flex gap-2"
                target="_blank">
                <Github className="inline-block w-5 font-normal transition duration-100 ease-in group-hover:text-gray-700 print:text-black" />
                <span className="group-hover:underline">{contact.github}</span>
                <span className="inline-block font-normal text-gray-550 transition duration-100 ease-in group-hover:text-gray-700">
                  ↗
                </span>
              </a>
            </li>
            <li className="mt-1.5 text-md leading-normal text-gray-700">
              <a
                href={contact.blog}
                className="group flex gap-2"
                target="_blank">
                <ScrollText className="inline-block w-5  font-normal transition duration-100 ease-in group-hover:text-gray-700 print:text-black" />
                <span className="group-hover:underline">{contact.blog}</span>
                <span className="inline-block font-normal text-gray-550 transition duration-100 ease-in group-hover:text-gray-700">
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
