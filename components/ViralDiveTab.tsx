
import React, { useState, useMemo } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { CaseStudyData } from '../types';
import { Info, RotateCcw } from 'lucide-react';

interface ViralDiveTabProps {
  data: CaseStudyData;
}

const ViralDiveTab: React.FC<ViralDiveTabProps> = ({ data }) => {
  const [selectedWaveIndex, setSelectedWaveIndex] = useState<number | null>(null);

  const isWardah = data.id === 'wardah';
  const isUGM = data.id === 'ugm';
  const isRSPAD = data.id === 'rspad';

  // Primary brand color
  const primaryColor = isUGM ? '#6366f1' : (isWardah ? '#0d9488' : '#10b981');

  // Logic to split the data into Wave 1 and Wave 2 (Indices 0-3 and 4-7)
  const chartData = useMemo(() => {
    if (selectedWaveIndex === 0) return data.timelineData.slice(0, 4);
    if (selectedWaveIndex === 1) return data.timelineData.slice(4, 8);
    return data.timelineData;
  }, [selectedWaveIndex, data.timelineData]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-100 shadow-xl rounded-xl">
          <p className="text-xs font-bold text-gray-400 mb-1">{label}</p>
          <p className="text-lg font-black text-gray-900">{payload[0].value} <span className="text-[10px] text-gray-400 uppercase">Mentions</span></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Top Row: Primary Momentum Analysis */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* Diagram 1: Virality Momentum (Trend) - Now Full Width */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {selectedWaveIndex !== null ? `Wave ${selectedWaveIndex + 1} Momentum` : '1. Virality Momentum'}
              </h3>
              <p className="text-xs text-gray-400 font-medium">
                {selectedWaveIndex !== null ? 'Isolated event tracking' : 'Daily mention volume trend'}
              </p>
            </div>
            {selectedWaveIndex !== null && (
              <button 
                onClick={() => setSelectedWaveIndex(null)}
                className="flex items-center space-x-1 text-[10px] font-black uppercase text-gray-400 hover:text-gray-900 transition-colors"
              >
                <RotateCcw size={12} />
                <span>Show Full Trend</span>
              </button>
            )}
          </div>
          
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={primaryColor} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={primaryColor} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 500}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 500}} 
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="mentions" 
                  stroke={primaryColor} 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorWave)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Interactive Legend & Platform SOV Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">Select Wave to Filter Graph</h4>
            <Info size={14} className="text-gray-300" />
          </div>
          <div className="flex flex-wrap gap-4">
            {data.waves.map((wave, i) => {
              const isActive = selectedWaveIndex === i;
              return (
                <button 
                  key={i} 
                  onClick={() => setSelectedWaveIndex(isActive ? null : i)}
                  className={`flex items-center px-4 py-3 rounded-2xl text-xs font-bold shadow-sm border transition-all hover:shadow-md hover:-translate-y-1 text-left ${
                    isActive 
                      ? (wave.color === 'red' ? 'bg-red-600 text-white border-red-700' :
                         wave.color === 'blue' ? 'bg-blue-600 text-white border-blue-700' :
                         wave.color === 'indigo' ? 'bg-indigo-600 text-white border-indigo-700' :
                         wave.color === 'teal' ? 'bg-teal-600 text-white border-teal-700' :
                         'bg-emerald-600 text-white border-emerald-700')
                      : (wave.color === 'red' ? 'bg-red-50 text-red-700 border-red-100' :
                         wave.color === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                         wave.color === 'indigo' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' :
                         wave.color === 'teal' ? 'bg-teal-50 text-teal-700 border-teal-100' :
                         'bg-emerald-50 text-emerald-700 border-emerald-100')
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full mr-3 ${isActive ? 'bg-white' : (
                     wave.color === 'red' ? 'bg-red-500' :
                     wave.color === 'blue' ? 'bg-blue-500' :
                     wave.color === 'indigo' ? 'bg-indigo-500' :
                     wave.color === 'teal' ? 'bg-teal-500' :
                     'bg-emerald-500'
                  )}`}></div>
                  {wave.label}
                </button>
              );
            })}
            
            {selectedWaveIndex !== null && (
               <button 
                onClick={() => setSelectedWaveIndex(null)}
                className="flex items-center px-4 py-3 rounded-2xl text-xs font-bold bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 transition-all"
               >
                 Show All
               </button>
            )}
          </div>
          <p className="mt-6 text-[11px] text-gray-400 font-medium italic">
            * Click a wave above to isolate its momentum on the trend chart.
          </p>
        </div>

        {/* Share of Voice */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Platform Share of Voice</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  // Fix: Casting data.sovData to any[] to resolve Recharts type incompatibility where index signature is required for chart data inputs
                  data={data.sovData as any[]}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={85}
                  paddingAngle={8}
                  dataKey="value"
                  animationBegin={200}
                >
                  {data.sovData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {data.sovData.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-[11px] font-bold text-gray-500 truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breakdown Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className={`px-6 py-4 border-b border-gray-50 flex items-center justify-between ${isWardah ? 'bg-teal-50/20' : isUGM ? 'bg-indigo-50/20' : 'bg-emerald-50/20'}`}>
          <h3 className="text-lg font-bold text-gray-900">Engagement Breakdown by Platform</h3>
          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white border border-gray-100 shadow-sm`}>
            {isRSPAD ? 'Digital Pulse' : 'Top Performing Format'}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead>
              <tr className="bg-gray-50/30">
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-wider">Top Format</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-wider">Avg. ER</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-wider">Standout Insight</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.breakdownTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{row.platform}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">{row.product}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-black transition-transform group-hover:scale-110 ${isWardah ? 'text-teal-600' : isUGM ? 'text-indigo-600' : 'text-emerald-600'}`}>{row.er}</td>
                  <td className="px-6 py-4 text-sm text-gray-400 font-medium italic truncate max-w-xs">"{row.insight}"</td>
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
