
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { CaseStudyData } from '../types';

interface ViralDiveTabProps {
  data: CaseStudyData;
}

const ViralDiveTab: React.FC<ViralDiveTabProps> = ({ data }) => {
  const isWardah = data.id === 'wardah';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{isWardah ? 'November' : 'Nov 2025'} Virality Waves</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.timelineData}>
                <defs>
                  <linearGradient id="colorMentions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={isWardah ? "#0d9488" : "#4f46e5"} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={isWardah ? "#0d9488" : "#4f46e5"} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Area type="monotone" dataKey="mentions" stroke={isWardah ? "#0d9488" : "#4f46e5"} strokeWidth={3} fillOpacity={1} fill="url(#colorMentions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs">
            <div className={`flex items-center px-3 py-1 rounded-full font-bold ${isWardah ? 'bg-red-50 text-red-700' : 'bg-red-100 text-red-900'}`}>
              Wave 1: {isWardah ? 'Padel Open' : 'Sidang KIP / Hoax (Nov 17)'}
            </div>
            <div className={`flex items-center px-3 py-1 rounded-full font-bold ${isWardah ? 'bg-blue-50 text-blue-700' : 'bg-blue-100 text-blue-900'}`}>
              Wave 2: {isWardah ? 'Sunscreen Spike' : 'Rektor Clarification (Nov 28)'}
            </div>
          </div>
        </div>

        {/* Share of Voice */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Platform Share of Voice</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.sovData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.sovData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {data.sovData.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs font-semibold text-gray-600">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breakdown Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className={`px-6 py-4 border-b border-gray-50 flex items-center justify-between ${isWardah ? 'bg-teal-50/20' : 'bg-indigo-50/20'}`}>
          <h3 className="text-lg font-bold text-gray-900">Engagement Breakdown by Platform</h3>
          <span className={`text-xs font-bold uppercase ${isWardah ? 'text-teal-700' : 'text-indigo-700'}`}>Top Performing Format</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50/30">
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Top Format</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Avg. ER</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Standout Insight</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.breakdownTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{row.platform}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.product}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-black ${isWardah ? 'text-teal-600' : 'text-indigo-600'}`}>{row.er}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 italic">{row.insight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Engagement Focus (Mentions)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={isWardah ? [
                    { name: 'Brand Loyalty', value: 55, fill: '#0d9488' },
                    { name: 'Product Conversion', value: 45, fill: '#fbbf24' }
                  ] : [
                    { name: 'Positive/Alumni Defense', value: 69, fill: '#10b981' },
                    { name: 'Controversy/Negative', value: 31, fill: '#ef4444' }
                  ]}
                  innerRadius={0}
                  outerRadius={100}
                  dataKey="value"
                  label
                />
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Top Hashtag Performance</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.hashtags} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="tag" type="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 600}} width={140} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="count" fill={isWardah ? "#0d9488" : "#6366f1"} radius={[0, 4, 4, 0]} barSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViralDiveTab;
