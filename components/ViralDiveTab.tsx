
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { CaseStudyData } from '../types.ts';

interface ViralDiveTabProps {
  data: CaseStudyData;
}

const ViralDiveTab: React.FC<ViralDiveTabProps> = ({ data }) => {
  const isWardah = data.id === 'wardah';
  const isRspad = data.id === 'rspad';
  const isUgm = data.id === 'ugm';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              {isRspad ? 'Virality Analysis (Jan 2026)' : (isWardah ? 'November Virality Timeline' : 'Nov 2025 Virality Waves')}
            </h3>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mentions Volume</span>
          </div>
          
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.timelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorWave1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f87171" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#f87171" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorWave2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorWave3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 11, fontWeight: 500}} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 11}} 
                  tickFormatter={(val) => val.toLocaleString()}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '12px' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  wrapperStyle={{ paddingTop: '20px', fontSize: '12px', fontWeight: '600' }} 
                />
                
                <Area 
                  stackId="1"
                  type="monotone" 
                  dataKey="baseline" 
                  name="Baseline Activity" 
                  stroke="#64748b" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#colorBaseline)" 
                />

                <Area 
                  stackId="1"
                  type="monotone" 
                  dataKey="wave1" 
                  name={isRspad ? "Wave 1: IGD & Emergency" : (isWardah ? "Wave 1: Padel Open" : "Wave 1: KIP Controversy")} 
                  stroke="#ef4444" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#colorWave1)" 
                />

                <Area 
                  stackId="1"
                  type="monotone" 
                  dataKey="wave2" 
                  name={isRspad ? "Wave 2: Pangkostrad Visit" : (isWardah ? "Wave 2: Sunscreen Spike" : "Wave 2: Logo Drama")} 
                  stroke="#2563eb" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#colorWave2)" 
                />

                <Area 
                  stackId="1"
                  type="monotone" 
                  dataKey="wave3" 
                  name={isRspad ? "Wave 3: Stem Cell & Research" : "Wave 3: Rektor Clarification"} 
                  stroke="#0d9488" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#colorWave3)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="p-2 bg-white rounded-md shadow-sm mr-4">
              <span className="text-lg">📈</span>
            </div>
            <p className="text-xs text-gray-500 leading-tight">
              <span className="font-bold text-gray-700 block mb-0.5">Segment Analysis:</span>
              The colored areas represent the specific volume contributed by each viral event over the baseline activity.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Platform Share of Voice</h3>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.sovData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.sovData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {data.sovData.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold text-gray-600 truncate">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className={`px-6 py-4 border-b border-gray-50 flex items-center justify-between ${
          isWardah ? 'bg-teal-50/20' : isUgm ? 'bg-indigo-50/20' : 'bg-emerald-50/20'}`}>
          <h3 className="text-lg font-bold text-gray-900">Engagement Breakdown by Platform</h3>
          <span className={`text-xs font-bold uppercase tracking-widest ${
            isWardah ? 'text-teal-700' : isUgm ? 'text-indigo-700' : 'text-emerald-700'}`}>Top Performing Format</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50/30">
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Platform</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Format/Channel</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Interaction</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Standout Insight</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.breakdownTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{row.platform}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.product}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-black ${
                    isWardah ? 'text-teal-600' : isUgm ? 'text-indigo-600' : 'text-emerald-600'}`}>{row.er}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 italic">{row.insight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViralDiveTab;
