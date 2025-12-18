
import React from 'react';
import { 
  Sparkles, 
  Globe,
  Share2,
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import { CaseStudyData } from '../types.ts';

interface ContentDetailTabProps {
  data: CaseStudyData;
}

const ContentDetailTab: React.FC<ContentDetailTabProps> = ({ data }) => {
  const isWardah = data.id === 'wardah';
  const detail = data.contentDetail;

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">UGC & Viral Performance Detail</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
            <Sparkles className={`mr-2 ${isWardah ? 'text-teal-600' : 'text-indigo-600'}`} size={20} />
            Top Positive Drivers
          </h4>
          <div className="space-y-4">
            {detail.positiveDrivers.map((text, idx) => (
              <div key={idx} className={`flex items-center space-x-3 p-3 rounded-xl border ${isWardah ? 'bg-teal-50/30 border-teal-50' : 'bg-indigo-50/30 border-indigo-50'}`}>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white ${isWardah ? 'bg-teal-600' : 'bg-indigo-600'}`}>
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-white p-6 rounded-2xl border-2 shadow-sm ${isWardah ? 'border-pink-100' : 'border-red-100'}`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-gray-800 flex items-center">
              <span className={`${isWardah ? 'text-pink-500' : 'text-red-500'} mr-2`}>🪩</span> {detail.highlight1.type}
            </h4>
            <div className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${isWardah ? 'bg-pink-500 text-white' : 'bg-red-500 text-white'}`}>Viral Hit</div>
          </div>
          <p className={`text-xs font-bold mb-4 ${isWardah ? 'text-pink-600' : 'text-red-600'}`}>{detail.highlight1.creator}</p>
          <div className={`p-4 rounded-xl mb-4 border ${isWardah ? 'bg-pink-50 border-pink-100' : 'bg-red-50 border-red-100'}`}>
            <div className="grid grid-cols-2 gap-4">
              {detail.highlight1.metrics.map((m, i) => (
                <div key={i}>
                  <p className={`text-[10px] uppercase font-bold ${isWardah ? 'text-pink-400' : 'text-red-400'}`}>{m.label}</p>
                  <p className={`text-lg font-black ${isWardah ? 'text-pink-700' : 'text-red-700'}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
          <ul className="space-y-2">
            {detail.highlight1.notes.map((n, i) => (
              <li key={i} className="text-xs text-gray-600 leading-tight">
                <span className="font-bold text-gray-800">{n.split(':')[0]}:</span> {n.split(':')[1]}
              </li>
            ))}
          </ul>
        </div>

        <div className={`bg-white p-6 rounded-2xl border-2 shadow-sm ${isWardah ? 'border-indigo-100' : 'border-teal-100'}`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-gray-800 flex items-center">
              <span className={`${isWardah ? 'text-indigo-500' : 'text-teal-500'} mr-2`}>{isWardah ? '🎾' : '📜'}</span> {detail.highlight2.type}
            </h4>
            <div className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${isWardah ? 'bg-indigo-500 text-white' : 'bg-teal-500 text-white'}`}>Clarification</div>
          </div>
          <p className={`text-xs font-bold mb-4 ${isWardah ? 'text-indigo-600' : 'text-teal-600'}`}>{detail.highlight2.creator}</p>
          <div className={`p-4 rounded-xl mb-4 border ${isWardah ? 'bg-indigo-50 border-indigo-100' : 'bg-teal-50 border-teal-100'}`}>
            <div className="grid grid-cols-2 gap-4">
              {detail.highlight2.metrics.map((m, i) => (
                <div key={i}>
                  <p className={`text-[10px] uppercase font-bold ${isWardah ? 'text-indigo-400' : 'text-teal-400'}`}>{m.label}</p>
                  <p className={`text-lg font-black ${isWardah ? 'text-indigo-700' : 'text-teal-700'}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
          <ul className="space-y-2">
            {detail.highlight2.notes.map((n, i) => (
              <li key={i} className="text-xs text-gray-600 leading-tight">
                <span className="font-bold text-gray-800">{n.split(':')[0]}:</span> {n.split(':')[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailTab;
