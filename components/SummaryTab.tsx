
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Award, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import { CaseStudyData } from '../types.ts';

interface SummaryTabProps {
  data: CaseStudyData;
}

const SummaryTab: React.FC<SummaryTabProps> = ({ data }) => {
  const isWardah = data.id === 'wardah';

  return (
    <div className="space-y-6">
      {/* Strategic Pivot Banner */}
      <div className={`relative overflow-hidden rounded-2xl p-8 shadow-xl text-white bg-gradient-to-br ${isWardah ? 'from-teal-600 via-teal-700 to-teal-800' : 'from-indigo-600 via-indigo-700 to-indigo-800'}`}>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-4">
              <TrendingUp size={14} className="mr-2" /> Strategic Update
            </div>
            <h3 className="text-3xl font-bold mb-3">{data.banner.title}</h3>
            <p className={`text-xl font-light italic leading-relaxed ${isWardah ? 'text-teal-50' : 'text-indigo-50'}`}>
              "{data.banner.description}"
            </p>
          </div>
          <div className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center shadow-2xl min-w-[200px]">
            <span className="block text-4xl font-black mb-1">{data.banner.tagValue}</span>
            <span className={`text-sm font-semibold uppercase tracking-widest ${isWardah ? 'text-teal-200' : 'text-indigo-200'}`}>
              {data.banner.tagLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-gray-500 mb-1">{kpi.label}</p>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">{kpi.value}</h4>
            <div className="flex items-center text-xs">
              <span className="text-gray-400 font-medium">{kpi.sub}</span>
              <span className={`ml-auto flex items-center font-bold px-2 py-0.5 rounded-full ${
                kpi.color === 'teal' ? 'bg-teal-50 text-teal-700' :
                kpi.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                kpi.color === 'indigo' ? 'bg-indigo-50 text-indigo-700' :
                'bg-green-50 text-green-700'
              }`}>
                {kpi.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Analysis Comparison</h3>
            <Info size={16} className="text-gray-400 cursor-help" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className={`${isWardah ? 'bg-teal-50/50 border-teal-100' : 'bg-indigo-50/50 border-indigo-100'} p-4 rounded-lg text-center border`}>
              <span className={`block text-2xl font-bold ${isWardah ? 'text-teal-700' : 'text-indigo-700'}`}>{data.summaryStats.positiveSentiment}</span>
              <span className={`text-xs font-semibold uppercase ${isWardah ? 'text-teal-600' : 'text-indigo-600'}`}>Pos. Sentiment</span>
            </div>
            <div className={`${isWardah ? 'bg-indigo-50/50 border-indigo-100' : 'bg-blue-50/50 border-blue-100'} p-4 rounded-lg text-center border`}>
              <span className={`block text-2xl font-bold ${isWardah ? 'text-indigo-700' : 'text-blue-700'}`}>{data.summaryStats.perceptionRise}</span>
              <span className={`text-xs font-semibold uppercase ${isWardah ? 'text-indigo-600' : 'text-blue-600'}`}>Growth pts</span>
            </div>
            <div className="bg-red-50/50 p-4 rounded-lg text-center border border-red-100">
              <span className="block text-sm font-bold text-red-700 line-clamp-1">"{data.summaryStats.topFeedback}"</span>
              <span className="text-xs text-red-600 font-semibold uppercase">Top Challenge</span>
            </div>
          </div>

          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.campaignData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar yAxisId="left" dataKey="sales" name={isWardah ? "Sales (IDR Billion)" : "Mentions (Volume)"} fill={isWardah ? "#0d9488" : "#4f46e5"} radius={[4, 4, 0, 0]} barSize={50} />
                <Bar yAxisId="right" dataKey="er" name="Engagement Rate (%)" fill="#4ade80" radius={[4, 4, 0, 0]} barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`p-6 rounded-xl border shadow-sm ${isWardah ? 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200' : 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200'}`}>
            <h3 className={`text-lg font-bold mb-4 flex items-center ${isWardah ? 'text-indigo-900' : 'text-teal-900'}`}>
              <Award className={`mr-2 ${isWardah ? 'text-indigo-600' : 'text-teal-600'}`} size={20} />
              {isWardah ? 'Awards & Recognition' : 'Core Identity'}
            </h3>
            <ul className="space-y-4">
              {data.awards.map((award, i) => (
                <li key={i} className="flex items-start bg-white/60 p-3 rounded-lg border border-gray-100">
                  <div className={`p-1.5 rounded-lg mr-3 ${award.icon === 'award' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                    {award.icon === 'award' ? <Award size={18} /> : <CheckCircle2 size={18} />}
                  </div>
                  <div>
                    <p className="font-bold text-gray-950 text-sm">{award.title}</p>
                    <p className="text-xs text-gray-700">{award.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className={`mr-2 ${isWardah ? 'text-teal-600' : 'text-indigo-600'}`} size={20} />
              Viral Snapshot
            </h3>
            <div className="space-y-3">
              {data.viralSnapshots.map((snap, i) => (
                <div key={i} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-2xl mr-3">{snap.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-800">{snap.title}</p>
                    <p className="text-xs text-gray-500">{snap.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryTab;
