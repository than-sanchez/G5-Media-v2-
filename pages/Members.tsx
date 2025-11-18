import React from 'react';
import { Member } from '../types';

const members: Member[] = [
  { name: 'Jonathan Paul Sanchez', role: 'Researcher' },
  { name: 'Zahara Johanne Robas', role: 'Scribe' },
  { name: 'Mary Rose Ramoso', role: 'Facilitator' },
  { name: 'Erich Amia Luquias', role: 'Spokesperson' },
  { name: 'Natsumi Poe Dionisio', role: 'Spokesperson' },
  { name: 'Amanda Fae Roa', role: 'Spokesperson' },
];

const MemberCard: React.FC<{ member: Member, delay: number }> = ({ member, delay }) => {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <div 
      className="relative border border-gray-800 bg-gray-900/50 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-700 hover:bg-gray-900 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -right-4 -bottom-4 text-[100px] font-black text-white/5 select-none z-0">
        {initials}
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-sm text-gray-300">{member.role}</p>
      </div>
    </div>
  );
};

const Members: React.FC = () => {
  return (
    <div>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">OUR MEMBERS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <MemberCard key={member.name} member={member} delay={index * 100} />
        ))}
      </div>
    </div>
  );
};

export default Members;