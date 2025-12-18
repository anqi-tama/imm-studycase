
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  LayoutDashboard, 
  Download
} from 'lucide-react';
import { TabId, CaseStudy, CaseStudyData } from './types.ts';
import SummaryTab from './components/SummaryTab.tsx';
import ViralDiveTab from './components/ViralDiveTab.tsx';
import ContentDetailTab from './components/ContentDetailTab.tsx';
import { WARDAH_DATA } from './data/wardah.ts';
import { UGM_DATA } from './data/ugm.ts';

const SimpleIMMLogo = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <div className="absolute inset-0 bg-[#0f172a] rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%, 50% 0, 0 0)' }}></div>
    <div className="absolute w-5 h-5 bg-[#0f172a] rounded-full top-0 right-0" style={{ transform: 'translate(2px, -2px)' }}></div>
  </div>
);

const App: React.FC = () => {
  const [currentCase, setCurrentCase] = useState<CaseStudy>('wardah');
  const [activeTab, setActiveTab] = useState<TabId>('summary');

  const currentData: CaseStudyData = currentCase === 'wardah' ? WARDAH_DATA : UGM_DATA;

  const handleDownloadPdf = () => {
    window.print();
  };

  const scrollToSection = (id: TabId) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections: TabId[] = ['summary', 'viral-dive', 'content-detail'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <SimpleIMMLogo />
                <div className="flex flex-col">
                  <span className="font-black text-gray-900 leading-none text-xl">IMM</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Intelligence Media Monitoring</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setCurrentCase('wardah')}
                  className={`flex items-center text-sm font-bold h-16 px-1 border-b-2 transition-all ${currentCase === 'wardah' ? 'text-teal-700 border-teal-600' : 'text-gray-500 border-transparent hover:text-teal-600'}`}
                >
                  Study Case Wardah
                </button>
                <button 
                  onClick={() => setCurrentCase('ugm')}
                  className={`flex items-center text-sm font-bold h-16 px-1 border-b-2 transition-all ${currentCase === 'ugm' ? 'text-indigo-700 border-indigo-600' : 'text-gray-500 border-transparent hover:text-indigo-600'}`}
                >
                  Study Case UGM
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 print:max-w-none print:w-full">
        <header className="mb-8 border-b border-gray-200 pb-6 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {currentData.name} Performance Overview
            </h2>
            <div className="flex items-center mt-2 text-gray-500 font-medium">
              <span className={`px-3 py-1 rounded-full text-xs font-bold mr-3 ${currentCase === 'wardah' ? 'bg-teal-50 text-teal-700' : 'bg-indigo-50 text-indigo-700'}`}>
                IMM REPORT
              </span>
              <span className="text-sm">{currentData.period}</span>
            </div>
          </div>
          <div className="hidden print:block text-right">
             <div className="font-black text-3xl text-[#0f172a]">IMM</div>
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Intelligence Media Monitoring</div>
          </div>
        </header>

        <div className="space-y-16">
          <section id="summary" className="scroll-mt-20 break-inside-avoid">
            <div className={`mb-6 border-b-2 pb-2 flex items-center justify-between ${currentCase === 'wardah' ? 'border-teal-600' : 'border-indigo-600'}`}>
               <h3 className={`text-2xl font-bold ${currentCase === 'wardah' ? 'text-teal-800' : 'text-indigo-800'}`}>
                 1. Executive Summary & Impact
               </h3>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Section 01</span>
            </div>
            <SummaryTab data={currentData} />
          </section>
          
          <section id="viral-dive" className="scroll-mt-20 pt-8 break-inside-avoid">
            <div className={`mb-6 border-b-2 pb-2 flex items-center justify-between ${currentCase === 'wardah' ? 'border-teal-600' : 'border-indigo-600'}`}>
               <h3 className={`text-2xl font-bold ${currentCase === 'wardah' ? 'text-teal-800' : 'text-indigo-800'}`}>
                 2. Viral Analytics Deep Dive
               </h3>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Section 02</span>
            </div>
            <ViralDiveTab data={currentData} />
          </section>
          
          <section id="content-detail" className="scroll-mt-20 pt-8 break-inside-avoid">
            <div className={`mb-6 border-b-2 pb-2 flex items-center justify-between ${currentCase === 'wardah' ? 'border-teal-600' : 'border-indigo-600'}`}>
               <h3 className={`text-2xl font-bold ${currentCase === 'wardah' ? 'text-teal-800' : 'text-indigo-800'}`}>
                 3. Content & UGC Insights
               </h3>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Section 03</span>
            </div>
            <ContentDetailTab data={currentData} />
          </section>
        </div>
      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 no-print w-full max-w-2xl px-4">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-2 flex items-center justify-between">
          <div className="flex space-x-1 flex-1">
            {[
              { id: 'summary', label: 'Summary', icon: LayoutDashboard },
              { id: 'viral-dive', label: 'Viral', icon: TrendingUp },
              { id: 'content-detail', label: 'Details', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id as TabId)}
                className={`flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
                  activeTab === tab.id 
                  ? (currentCase === 'wardah' ? 'bg-teal-600 shadow-teal-100' : 'bg-indigo-600 shadow-indigo-100') + ' text-white shadow-lg' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <tab.icon size={20} className="mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
              </button>
            ))}
          </div>
          
          <div className="w-[1px] h-10 bg-gray-200 mx-3"></div>

          <button 
            onClick={handleDownloadPdf}
            className="flex flex-col items-center justify-center py-2 px-6 bg-gray-900 text-white rounded-xl hover:bg-black transition-all shadow-lg group"
          >
            <Download size={20} className="mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-wider">PDF Report</span>
          </button>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 border-t border-gray-200 pt-8 pb-32 text-center text-gray-400 text-sm no-print">
        &copy; 2025 IMM Intelligence Media Monitoring. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
