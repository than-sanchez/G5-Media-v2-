import React from 'react';

// A simpler data structure for the new, summarized content.
interface OutlineItemData {
  title: string;
  description: string;
}

const outlineData: OutlineItemData[] = [
  {
    title: 'Objectives',
    description: 'Inform students about the stream, increase viewers, and build interest before the event.',
  },
  {
    title: 'Target Audience',
    description: 'Classmates and Schoolmates',
  },
  {
    title: 'Promotional Strategies',
    description: 'Digital: Share posters, teaser videos, updates, and send direct messages. Personal: Use word of mouth and talk about the stream during school activities.',
  },
  {
    title: 'Distribution Channels',
    description: 'Messenger Group Chats, Facebook, Instagram and School-related social media groups.',
  },
  {
    title: 'Monitoring & Evaluation',
    description: 'Track reactions and views, gather quick feedback, and adjust materials if engagement is low.',
  },
  {
    title: 'Most Effective Material',
    description: 'Share promotional posters because they attract more attention and are easier to share.',
  },
];

const PromotionalOutline: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)]">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">PROMOTIONAL OUTLINE</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-12">
        
        {/* Left Column: Image */}
        <div className="lg:col-span-1 max-w-sm mx-auto lg:mx-0 flex items-center h-full">
          <img 
            src="https://cdn.discordapp.com/attachments/1317100265983311922/1440286503916798045/promotional-plan.png?ex=691d9ad5&is=691c4955&hm=6095da9b6de2f59c6aa1f737ee37da474569835b71fe7229ff9c55b29bb1734d" 
            alt="Promotional Plan Visual by G5 Media" 
            className="w-full h-auto rounded-lg border border-gray-800 object-cover"
          />
        </div>

        {/* Right Column: Outline Details */}
        <div className="lg:col-span-2 space-y-8">
          {outlineData.map((item, index) => (
            <div 
              key={item.title}
              className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-2 border-b border-gray-800 pb-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h2 className="sm:col-span-1 text-lg font-semibold text-white uppercase tracking-wider">
                {item.title}
              </h2>
              <p className="sm:col-span-2 text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalOutline;