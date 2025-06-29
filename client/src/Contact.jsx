import { FaWhatsapp, FaTelegramPlane, FaLinkedin, FaPhoneAlt, FaFacebook } from 'react-icons/fa';

const ContactUs = () => {
  const iconSize = 80;
  const iconClass = "text-pink-600 hover:text-pink-800 transition duration-300";

  const contacts = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={iconSize} className={iconClass} />,
      link: 'https://wa.me/+2348107954921',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={iconSize} className={iconClass} />,
      link: 'https://linkedin.com/in/heaven-ly-ab95a0365',
    },
    {
      name: 'Phone',
      icon: <FaPhoneAlt size={iconSize} className={iconClass} />,
      link: 'tel:+2348107954921',
    },
      {
      name: 'Facbook',
      icon: <FaFacebook size={iconSize} className={iconClass} />,
      link: 'https://www.facebook.com/share/19bKmLmhV4/?mibextid=wwXIfr',
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl font-bold text-pink-700 mb-12">Contact Us</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
        {contacts.map(({ name, icon, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            {icon}
            <span className="mt-3 text-sm text-gray-700">{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
