import React from 'react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/Icons';

const Introduction: React.FC = () => {

  const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon width={32} height={32} />, href: 'https://instagram.com/_grp5media/' },
    { name: 'YouTube', icon: <YoutubeIcon width={32} height={32} />, href: 'https://youtube.com/@GRP5Media/' },
    { name: 'Facebook', icon: <FacebookIcon width={32} height={32} />, href: 'https://facebook.com/grp5media/' },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-10rem)] justify-center">
      <div className="relative flex-grow flex flex-col justify-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
          G5 MEDIA
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-600">
          STREAM
        </h2>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
          <p>
            G5 MEDIA EXPLORES HOW CREATIVE HOBBIES AND MOVEMENT BREAKS ENHANCE ONLINE LEARNING FOR SENIOR HIGH SCHOOL STUDENTS.
          </p>
          <p>
            OUR RESEARCH DEMONSTRATES THESE ACTIVITIES IMPROVE FOCUS, PRODUCTIVITY, AND OVERALL WELL-BEING. THROUGH ENGAGING LIVESTREAMS, WE SHARE EVIDENCE-BASED STRATEGIES THAT MAKE VIRTUAL LEARNING MORE EFFECTIVE AND ENJOYABLE.
          </p>
          <p className="font-semibold text-white">
            2025 - G5 Media (For school research purposes.)
          </p>
        </div>
        <div className="flex items-center justify-end gap-12">
           {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-all duration-300 active:scale-95"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;