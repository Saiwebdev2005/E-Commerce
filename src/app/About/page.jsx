import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-c1 text-c2">
      <h1 className='text-6xl m-12'>
        About me
      </h1>
      <span className='p-12 rounded-full bg-c3'>Image</span>

      <h2 className="mt-6 text-4xl font-bold text-center">
        Sai Kumar
      </h2>

      <p className="mt-3 text-lg text-center">
        Your description here
      </p>

      <div className="flex mt-6 justify-center">
        <a href="https://www.linkedin.com/in/your-linkedin/" className="mx-3 text-blue-600 hover:text-blue-800">
          <FaLinkedin size={30} />
        </a>

        <a href="https://github.com/your-github" className="mx-3 text-gray-700 hover:text-gray-900">
          <FaGithub size={30} />
        </a>

        <a href="mailto:your-email@example.com" className="mx-3 text-gray-500 hover:text-gray-700">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}
