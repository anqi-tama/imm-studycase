
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  LayoutDashboard, 
  Download
} from 'lucide-react';
import { TabId, CaseStudy, CaseStudyData } from './types';
import SummaryTab from './components/SummaryTab';
import ViralDiveTab from './components/ViralDiveTab';
import ContentDetailTab from './components/ContentDetailTab';
import AiInsight from './components/AiInsight';
import { WARDAH_DATA } from './data/wardah';
import { UGM_DATA } from './data/ugm';

const IMMLogo = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform hover:scale-110">
    <path d="M50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95C71.321 95 89.2483 80.1411 93.9069 60H65C62.2386 60 60 57.7614 60 55V26.0931C79.8589 30.7517 95 48.679 95 70C95 72.7614 97.2386 75 100 75C102.761 75 105 72.7614 105 70C105 39.6243 80.3757 15 50 15V5C50 2.23858 47.7614 0 45 0C42.2386 0 40 2.23858 40 5V15.1259C43.1932 15.0425 46.5413 15 50 15V5ZM85 5C85 2.23858 87.2386 0 90 0C92.7614 0 95 2.23858 95 5V20C95 22.7614 92.7614 25 90 25H75C72.2386 25 70 22.7614 70 20C70 17.2386 72.2386 15 75 15H85V5Z" fill="#0f172a" style={{ transform: 'scale(0.8) translate(10px, 10px)' }} />
    <circle cx="50" cy="50" r="45" fill="#0f172a" />
    <path d="M50 10C72.0914 10 90 27.9086 90 50H50V10Z" fill="white" style={{ transform: 'translate(5px, -5px)' }} />
    <path d="M50 50L90 50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50C10 27.9086 27.9086 10 50 10V50Z" fill="#0f172a" />
  </svg>
);

// Simplified accurate IMM Logo based on the user's image
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
  }
  ;

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
      {/* Top Header */}
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

            <div className="flex items-center space-x-4">
              <AiInsight currentCase={currentCase} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
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
             <div className="font-black text-2xl text-[#0f172a]">IMM</div>
             <div className="text-[8px] font-bold text-gray-400">INTELLIGENCE MEDIA MONITORING</div>
          </div>
        </header>

        <div className="space-y-12">
          {/* Section 1: Summary */}
          <section id="summary" className="scroll-mt-20">
            <div className={`mb-6 border-b-2 pb-2 flex items-center justify-between ${currentCase === 'wardah' ? 'border-teal-600' : 'border-indigo-600'}`}>
               <h3 className={`text-2xl font-bold ${currentCase === 'wardah' ? 'text-teal-800' : 'text-indigo-800'}`}>
                 1. Executive Summary & Impact
               </h3>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Analysis 01</span>
            </div>
            <SummaryTab data={currentData} />
          </section>
          
          {/* Section 2: Viral Dive */}
          <section id="viral-dive" className="scroll-mt-20 pt-8 border-t border-gray-100">
            <div className={`mb-6 border-b-2 pb-2 flex items-center justify-between ${currentCase === 'wardah' ? 'border-teal-600' : 'border-indigo-600'}`}>
               <h3 className={`text-2xl font-bold ${currentCase === 'wardah' ? 'text-teal-800' : 'text-indigo-800'}`}>
                 2. Viral Analytics Deep Dive
               </h3>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Analysis 02</span>
            </div>
            <ViralDiveTab data={currentData} />
          </section>
          
          {/* Section 3: Content Detail */}
          <section id="content-detail" className="scroll-mt-20 pt-8 border-t border-gray-100">
            <div className={`mb-6 border-b-2 pb-2 flex items-center justify-between ${currentCase === 'wardah' ? 'border-teal-600' : 'border-indigo-600'}`}>
               <h3 className={`text-2xl font-bold ${currentCase === 'wardah' ? 'text-teal-800' : 'text-indigo-800'}`}>
                 3. Content & UGC Insights
               </h3>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Analysis 03</span>
            </div>
            <ContentDetailTab data={currentData} />
          </section>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
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
