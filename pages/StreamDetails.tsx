import React from 'react';

const streamOutlineData = [
  { time: '4:00-4:05', topic: 'Critical Thinking', activity: 'Show/discuss video', allotment: '5', screen: 'Video', audio: 'Video Audio/mic' },
  { time: '0:00-0:03', topic: 'Introduction', activity: 'Greet viewers, introduce stream topic', allotment: '3', screen: 'Title slide', audio: 'mic' },
  { time: '0:03-0:07', topic: 'What are movement breaks?', activity: 'Explain definition + examples', allotment: '4', screen: 'Slides / images', audio: 'mic' },
  { time: '0:07-0:12', topic: 'Creative hobbies of SHS Students', activity: 'Show examples (art, baking, workouts)', allotment: '5', screen: 'Photos', audio: 'mic' },
  { time: '0:12-0:20', topic: 'Benefits of Online learning', activity: 'Discuss focus, stress relief, motivation', allotment: '8', screen: 'Infographic slide', audio: 'mic' },
  { time: '0:20-0:27', topic: 'Demo / Interactive Activity', activity: 'Quick poll or simple movement break demo', allotment: '7', screen: 'Camera / slide', audio: 'mic' },
  { time: '0:27-0:30', topic: 'Discussion', activity: 'Give practical tips for applying movement breaks', allotment: '3', screen: 'slide', audio: 'mic' },
  { time: '0:30-0:33', topic: 'Conclusion', activity: 'Wrap up key points', allotment: '3', screen: 'Final slide', audio: 'mic' },
  { time: '0:33-0:35', topic: 'Chat interactions', activity: 'Read comments, answer questions from the chatbox', allotment: '2', screen: 'Stream screen', audio: 'mic' },
];

const StreamDetails: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)]">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">STREAM DETAILS</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-16 gap-y-12">
        
        {/* Left Column: Stream Design */}
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-4 mb-6">Stream Design</h2>
            
            <img src="https://cdn.discordapp.com/attachments/1317100265983311922/1440276583481999384/Stream_.png?ex=691d9198&is=691c4018&hm=a16144a3d5287265a9c04ed58a64c897b754d9778d7fceca79ff1527af42ffc0" alt="Stream Design by G5 Media" className="w-full rounded-lg mb-8 border border-gray-800" />

            <div className="space-y-8 text-gray-300">
                <div>
                    <h3 className="font-bold text-lg text-white mb-2">"Move & Create: Using Creative Breaks to Recharge Your Mind"</h3>
                    <p className="text-sm leading-relaxed">This theme encourages students to take brief, purposeful pauses that improve focus, lower stress levels, and stimulate productivity when studying online. It also focuses on encouraging a balance between creativity and learning. </p>
                </div>
            </div>
        </div>

        {/* Right Column: Stream Outline */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-4 mb-6">Stream Outline</h2>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border border-gray-800">Time</th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border border-gray-800">Topic</th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border border-gray-800">Activity</th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border border-gray-800 text-center">Mins</th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border border-gray-800">Screen</th>
                  <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border border-gray-800">Audio</th>
                </tr>
              </thead>
              <tbody>
                {streamOutlineData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-900/50 transition-colors duration-200">
                    <td className="p-4 text-sm border border-gray-800 whitespace-nowrap">{row.time}</td>
                    <td className="p-4 text-sm border border-gray-800">{row.topic}</td>
                    <td className="p-4 text-sm border border-gray-800">{row.activity}</td>
                    <td className="p-4 text-sm border border-gray-800 text-center">{row.allotment}</td>
                    <td className="p-4 text-sm border border-gray-800">{row.screen}</td>
                    <td className="p-4 text-sm border border-gray-800">{row.audio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Card View */}
          <div className="block lg:hidden space-y-4">
            {streamOutlineData.map((row, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-white flex-1 pr-4">{row.topic}</h3>
                  <span className="text-sm font-mono bg-gray-800 text-gray-300 px-2 py-1 rounded-md whitespace-nowrap">{row.time}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{row.activity}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-800 pt-3 mt-3">
                    <div><strong>Mins:</strong> <span className="text-gray-200 font-medium">{row.allotment}</span></div>
                    <div><strong>Screen:</strong> <span className="text-gray-200 font-medium">{row.screen}</span></div>
                    <div className="col-span-2"><strong>Audio:</strong> <span className="text-gray-200 font-medium">{row.audio}</span></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default StreamDetails;