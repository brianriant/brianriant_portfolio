import Image from 'next/image';
import { cookies } from 'next/headers';
import { assets } from '../../assets/assets';

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@BrianRiant',
    ariaLabel: "Brian Riant's YouTube",
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/brianriant',
    ariaLabel: "Brian Riant's LinkedIn",
  },
  {
    name: 'GitHub',
    url: 'https://github.com/brianriant',
    ariaLabel: "Brian Riant's GitHub",
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/brianriant',
    ariaLabel: "Brian Riant's Linktree",
  },
];

const FooterServer = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'light';
  const isDarkMode = theme === 'dark';

  return (
    <footer className="mt-20 mb-10 max-w-3xl w-11/12 lg:max-w-6xl mx-auto font-bold items-start text-left">
      {/* Logo and Contact Info */}
      <div className="font-xs lg:font-sm">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 -ml-4 mb-2"
          quality={75}
          sizes="100vw"
        />
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between border-t border-gray-400 mt-12 py-6 leading-relaxed">
        <p className="text-center lg:text-left mb-4 lg:mb-0">
          &copy; {new Date().getFullYear()} Brian Riant. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-6 lg:gap-10 items-center justify-start mt-4 lg:justify-end leading-relaxed">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.url}
                aria-label={link.ariaLabel}
                className="hover:underline text-green-500 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default FooterServer;
