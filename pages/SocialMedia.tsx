import React from 'react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/Icons';

const socialLinks = [
  { href: "https://instagram.com/_grp5media/", icon: <InstagramIcon />, name: "Instagram" },
  { href: "https://youtube.com/@GRP5Media/", icon: <YoutubeIcon />, name: "YouTube" },
  { href: "https://facebook.com/grp5media/", icon: <FacebookIcon />, name: "Facebook" }
];

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; name: string; delay: number }> = ({ href, icon, name, delay }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center space-x-4 group p-4 border border-transparent hover:border-gray-800 hover:bg-gray-900/50 rounded-lg transition-all duration-300 active:scale-95 animate-fade-in-up"
        style={{ animationDelay: `${delay}ms`}}
    >
        <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
           {icon}
        </div>
        <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{name}</span>
    </a>
);


const SocialMedia: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)]">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">CONNECT WITH US</h1>
      <p className="text-lg text-gray-400 max-w-2xl mb-16">
        Follow our journey, get updates on our latest posts and streams, and join the conversation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialLinks.map((link, index) => (
           <SocialLink key={link.name} {...link} delay={100 + index * 100} />
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;