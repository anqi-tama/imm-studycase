
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
  const isRspad = data.id === 'rspad';
  const isUgm = data.id === 'ugm';
  const detail = data.contentDetail;

  const getAccentColor = () => {
    if (isWardah) return 'teal';
    if (isUgm) return 'indigo';
    return 'emerald';
  };

  const accent = getAccentColor();

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">{isRspad ? 'Sentiment Analysis & Media Spotlight' : 'UGC & Viral Performance Detail'}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className={`text-lg font-bold text-gray-800 mb-6 flex items-center`}>
            <Sparkles className={`mr-2 text-${accent}-600`} size={20} />
            Top Drivers
          </h4>
          <div className="space-y-4">
            {detail.positiveDrivers.map((text, idx) => (
              <div key={idx} className={`flex items-center space-x-3 p-3 rounded-xl border bg-${accent}-50/30 border-${accent}-50`}>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white bg-${accent}-600`}>
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-white p-6 rounded-2xl border-2 shadow-sm ${isRspad ? 'border-emerald-100' : (isWardah ? 'border-pink-100' : 'border-red-100')}`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-gray-800 flex items-center">
              <span className={`mr-2`}>{isRspad ? '🚑' : '🪩'}</span> {detail.highlight1.type}
            </h4>
            <div className={`text-[10px] font-black px-2 py-0.5 rounded uppercase bg-${isRspad ? 'emerald' : (isWardah ? 'pink' : 'red')}-500 text-white`}>{isRspad ? 'Spotlight' : 'Viral Hit'}</div>
          </div>
          <p className={`text-xs font-bold mb-4 text-${isRspad ? 'emerald' : (isWardah ? 'pink' : 'red')}-600`}>{detail.highlight1.creator}</p>
          <div className={`p-4 rounded-xl mb-4 border bg-${isRspad ? 'emerald' : (isWardah ? 'pink' : 'red')}-50 border-${isRspad ? 'emerald' : (isWardah ? 'pink' : 'red')}-100`}>
            <div className="grid grid-cols-2 gap-4">
              {detail.highlight1.metrics.map((m, i) => (
                <div key={i}>
                  <p className={`text-[10px] uppercase font-bold text-${isRspad ? 'emerald' : (isWardah ? 'pink' : 'red')}-400`}>{m.label}</p>
                  <p className={`text-lg font-black text-${isRspad ? 'emerald' : (isWardah ? 'pink' : 'red')}-700`}>{m.value}</p>
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

        <div className={`bg-white p-6 rounded-2xl border-2 shadow-sm ${isRspad ? 'border-blue-100' : (isWardah ? 'border-indigo-100' : 'border-teal-100')}`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-gray-800 flex items-center">
              <span className={`mr-2`}>{isRspad ? '🗞️' : (isWardah ? '🎾' : '📜')}</span> {detail.highlight2.type}
            </h4>
            <div className={`text-[10px] font-black px-2 py-0.5 rounded uppercase bg-${isRspad ? 'blue' : (isWardah ? 'indigo' : 'teal')}-500 text-white`}>{isRspad ? 'Institutional' : 'Clarification'}</div>
          </div>
          <p className={`text-xs font-bold mb-4 text-${isRspad ? 'blue' : (isWardah ? 'indigo' : 'teal')}-600`}>{detail.highlight2.creator}</p>
          <div className={`p-4 rounded-xl mb-4 border bg-${isRspad ? 'blue' : (isWardah ? 'indigo' : 'teal')}-50 border-${isRspad ? 'blue' : (isWardah ? 'indigo' : 'teal')}-100`}>
            <div className="grid grid-cols-2 gap-4">
              {detail.highlight2.metrics.map((m, i) => (
                <div key={i}>
                  <p className={`text-[10px] uppercase font-bold text-${isRspad ? 'blue' : (isWardah ? 'indigo' : 'teal')}-400`}>{m.label}</p>
                  <p className={`text-lg font-black text-${isRspad ? 'blue' : (isWardah ? 'indigo' : 'teal')}-700`}>{m.value}</p>
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

      {isRspad && (
        <div className="bg-[#1a4d3a] text-white p-8 rounded-2xl shadow-xl border-l-[10px] border-[#facc15] mt-10">
            <h2 className="text-xl font-black uppercase tracking-tight mb-8 text-[#facc15]">EXECUTIVE SUMMARY: STRATEGIC OUTLOOK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-sm font-black uppercase tracking-[0.15em] text-[#2dd4bf] mb-3">SENTIMENT PARADOX</h4>
                    <p className="text-sm leading-relaxed font-medium opacity-90">
                        Sentimen negatif bersifat kontekstual. RSPAD muncul sebagai rujukan utama untuk kasus darurat kritis nasional, memperkuat peran sebagai ultimate safety net medis di Indonesia.
                    </p>
                </div>
                <div>
                    <h4 className="text-sm font-black uppercase tracking-[0.15em] text-[#2dd4bf] mb-3">DIGITAL AUTHORITY</h4>
                    <p className="text-sm leading-relaxed font-medium opacity-90">
                        Lonjakan jangkauan +219% didorong oleh pihak eksternal. Rekomendasi utama adalah mengaktifkan narasi internal (Storytelling) untuk mengubah persepsi publik.
                    </p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ContentDetailTab;
