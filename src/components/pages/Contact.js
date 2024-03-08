import { FaEnvelope, FaFacebook, FaLinkedin, FaXing, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact text-sky-500">
      <h1 className='text-4xl font-bold'>Contact Us</h1>
      <p className='text-lg mr-10 my-4 text-gray-900'>
        If you have any questions or would like to get in touch with us, please feel free to contact us at:
      </p>
      <div className='flex'>
        <a href="mailto:contact.societyawe@gmail.com" className="text-2xl font-bold text-sky-500 hover:text-sky-700 mr-10">
          <FaEnvelope />
        </a>
        <a href='https://twitter.com/societyawe' className="text-2xl font-bold text-sky-500 hover:text-sky-700 mr-10" target='_blank' rel="noreferrer">
          <FaXing />
        </a>
        <a href='https://facebook.com/profile.php?id=61555435473113' className="text-2xl font-bold text-sky-500 hover:text-sky-700 mr-10" target='_blank' rel="noreferrer">
          <FaFacebook />
        </a>
        <a href='https://linkedin.com/in/saweofficial2024' className="text-2xl font-bold text-sky-500 hover:text-sky-700 mr-10" target='_blank' rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href='https://instagram.com/sawe.official?igsh=MWl4d2pjM3o2OTU5ZA%3D%3D&utm_source=qr' target='_blank' rel='noreferrer' className="text-2xl font-bold text-sky-500 hover:text-sky-700 mr-10">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Contact;
