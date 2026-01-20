
import React, { useState } from 'react';
import { Sparkles, Loader2, X } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { CaseStudy } from '../types';

interface AiInsightProps {
  currentCase: CaseStudy;
}

const AiInsight: React.FC<AiInsightProps> = ({ currentCase }) => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateInsight = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let prompt = "";
      
      if (currentCase === 'wardah') {
        prompt = `Analyze Wardah (Nov 2025): Mentions 30k, EMV $12.6M, Sales +28%. Top: TikTok "SUNBLOCK BEDAK". Challenge: Sold Out. Provide 3-sentence analysis and 1 recommendation.`;
      } else if (currentCase === 'ugm') {
        prompt = `Analyze UGM (Nov 2025): Mentions 205k (controversy-driven), Reach 1.3B, Sentiment 69% Pos. Top: Rektor 9-point clarification (2.3M views). Challenge: Transparency demands vs Hoax. Provide 3-sentence analysis and 1 recommendation.`;
      } else if (currentCase === 'rspad') {
        prompt = `Analyze RSPAD (Jan 2026): 119 mentions (+17%), 2.2M reach (+219%). Sentiment 67% Pos. Top: Code Stroke success & humanist content. Challenge: Lack of official X/Twitter presence allowing minor complaints to reach 2.2M audience. Provide 3-sentence analysis and 1 recommendation.`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { temperature: 0.7 }
      });
      
      setInsight(response.text || "Unable to generate analysis.");
    } catch (err) {
      console.error(err);
      setError("Analysis service unavailable.");
    } finally {
      setLoading(false);
    }
  };

  const color = currentCase === 'wardah' ? 'teal' : currentCase === 'ugm' ? 'indigo' : 'emerald';

  return (
    <div className="relative">
      <button
        onClick={generateInsight}
        disabled={loading}
        className={`flex items-center px-4 py-2 text-white text-sm font-bold rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 bg-gradient-to-r ${
          color === 'teal' ? 'from-teal-500 to-emerald-600' : 
          color === 'indigo' ? 'from-indigo-500 to-blue-600' : 
          'from-emerald-500 to-teal-600'
        }`}
      >
        {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : <Sparkles className="mr-2" size={16} />}
        {loading ? 'Analyzing...' : 'AI Analysis'}
      </button>

      {insight && (
        <div className="absolute top-12 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-[60] animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className={`text-sm font-bold flex items-center ${
              color === 'teal' ? 'text-teal-800' : 
              color === 'indigo' ? 'text-indigo-800' : 
              'text-emerald-800'
            }`}>
              <Sparkles size={14} className="mr-2" /> Smart Insight
            </h4>
            <button onClick={() => setInsight(null)} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap font-medium">
            {insight}
          </p>
          <div className={`text-[10px] font-bold uppercase tracking-widest text-center ${
            color === 'teal' ? 'text-teal-500' : 
            color === 'indigo' ? 'text-indigo-500' : 
            'text-emerald-500'
          }`}>
            Powered by Gemini
          </div>
        </div>
      )}
    </div>
  );
};

export default AiInsight;
