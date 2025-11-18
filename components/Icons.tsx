import React from 'react';

// Partner Icons
export const RollsRoyceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M9 9h6v2H9z m0 4h6v2H9z" />
    <path d="M11 7h2v10h-2z" />
  </svg>
);
export const NikeIcon = () => (
  <svg width="60" height="30" viewBox="0 0 75 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 22.5c22.5-12.5 45-12.5 62.5 0 2.5 2.5 2.5 5 0 7.5 -2.5 2.5-5 2.5-7.5 0 -12.5-7.5-27.5-7.5-40 0 -2.5 2.5-5 2.5-7.5 0s-2.5-5 0-7.5z" />
  </svg>
);
export const LVMHIcon = () => (
  <svg width="60" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h3v18H3V3zm5 0h3l4 9 4-9h3v18h-3V8l-4 9-4-9v13H8V3z" />
  </svg>
);
export const ChanelIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="12" r="5" />
    <circle cx="16" cy="12" r="5" />
  </svg>
);
export const EmiratesIcon = () => (
  <svg width="60" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3v2l8 6v5H9v2h6v-2h-2v-5l8-6V3z" />
  </svg>
);
export const PiagetIcon = () => (
  <svg width="60" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5h14v2H5V5zm0 4h14v2H5V9zm0 4h14v2H5v-2zm0 4h14v2H5v-2z" />
  </svg>
);


// Social Icons
interface SocialIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const baseIconProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"} as const;

export const TwitterIcon: React.FC<SocialIconProps> = ({ width = 24, height = 24, className }) => (
  <svg {...baseIconProps} width={width} height={height} className={className}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
export const InstagramIcon: React.FC<SocialIconProps> = ({ width = 24, height = 24, className }) => (
    <svg {...baseIconProps} width={width} height={height} className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);
export const LinkedInIcon: React.FC<SocialIconProps> = ({ width = 24, height = 24, className }) => (
    <svg {...baseIconProps} width={width} height={height} className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);
export const DribbbleIcon: React.FC<SocialIconProps> = ({ width = 24, height = 24, className }) => (
    <svg {...baseIconProps} width={width} height={height} className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.73 4.36-8.5 9.73-15.08 13.02"></path>
        <path d="M2.75 8.56C9.23 7.08 15.63 8.3 21.25 13.02"></path>
    </svg>
);
export const GithubIcon: React.FC<SocialIconProps> = ({ width = 24, height = 24, className }) => (
    <svg {...baseIconProps} width={width} height={height} className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);
export const YoutubeIcon: React.FC<SocialIconProps> = ({ width = 24, height = 24, className }) => (
    <svg {...baseIconProps} width={width} height={height} className={className}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);
export const FacebookIcon: React.FC<SocialIconProps> = ({ width = 24, height = 24, className }) => (
    <svg {...baseIconProps} width={width} height={height} className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);
