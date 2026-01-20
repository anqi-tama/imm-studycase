
import React from 'react';
import { 
  Sparkles, 
  Globe,
  Share2,
  ExternalLink,
  ThumbsUp,
  MessageCircle,
  TrendingUp
} from 'lucide-react';
import { CaseStudyData } from '../types';

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
        {/* Positive Sentiment Drivers */}
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

        {/* Viral Content 1 */}
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

        {/* Viral Content 2 */}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* X/Platform Deep Dive */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
            <Share2 className={`mr-2 ${isWardah ? 'text-gray-900' : 'text-blue-600'}`} size={20} />
            {detail.platformDeepDive.title}
          </h4>
          <div className="space-y-4">
            {detail.platformDeepDive.items.map((item, i) => (
              <div key={i} className={`p-3 border-l-4 rounded-r-xl ${isWardah ? 'border-gray-900 bg-gray-50' : 'border-blue-600 bg-blue-50'}`}>
                <p className={`text-xs font-bold mb-1 ${isWardah ? 'text-gray-900' : 'text-blue-900'}`}>{item.label}</p>
                <p className="text-[10px] text-gray-500 italic leading-tight">"{item.text}"</p>
              </div>
            ))}
            <div className="pt-2">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">{detail.platformDeepDive.metricLabel}</p>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className={`${isWardah ? 'bg-gray-900' : 'bg-blue-600'} h-full`} style={{ width: detail.platformDeepDive.metricPercent }}></div>
                </div>
                <span className="ml-3 text-xs font-black">{detail.platformDeepDive.metricPercent} Share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Web Articles */}
        <div className={`lg:col-span-2 bg-white p-6 rounded-2xl border shadow-sm relative overflow-hidden ${isWardah ? 'border-teal-100' : 'border-indigo-100'}`}>
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Globe size={120} className={isWardah ? 'text-teal-900' : 'text-indigo-900'} />
          </div>
          <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center relative z-10">
            <Globe className={`mr-2 ${isWardah ? 'text-teal-600' : 'text-indigo-600'}`} size={20} />
            Top Earned Media & Web Articles
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {detail.articles.map((art, idx) => (
              <div key={idx} className={`group p-4 rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md ${isWardah ? 'hover:border-teal-200' : 'hover:border-indigo-200'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${isWardah ? 'text-teal-600 bg-teal-50' : 'text-indigo-600 bg-indigo-50'}`}>
                    {art.source}
                  </span>
                  <ExternalLink size={12} className="text-gray-300 group-hover:text-gray-500" />
                </div>
                <p className="text-sm font-bold text-gray-900 mb-1 leading-tight">{art.title}</p>
                <div className="flex items-center justify-between mt-3 text-[10px] text-gray-400">
                  <div className="flex items-center"><TrendingUp size={10} className="mr-1" /> {art.views} Views</div>
                  <div className="font-bold text-gray-600">{art.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailTab;
