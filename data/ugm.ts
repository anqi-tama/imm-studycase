
import { CaseStudyData } from '../types';

export const UGM_DATA: CaseStudyData = {
  id: 'ugm',
  name: 'UGM',
  period: '1–30 Nov 2025 (Ijazah Controversy Analysis)',
  banner: {
    title: 'Merakyat, Mandiri, dan Berkelanjutan',
    description: 'Launched May 20, 2025, UGM shifted toward direct society service and sustainable development, influencing research and positioning for the next decade.',
    tagValue: '3-Finger',
    tagLabel: 'Formation Symbol'
  },
  kpis: [
    { label: 'Total Mentions', value: '205,000', sub: 'Disproportionate negative spikes', status: 'High Volume', color: 'indigo' },
    { label: 'TikTok Views (Nov)', value: '410M+', sub: 'Viral skeptical drama', status: 'Viral', color: 'blue' },
    { label: 'Est. Media Value', value: 'US$33M', sub: 'Controversy driven impact', status: 'High Value', color: 'indigo' },
    { label: 'Instagram Reach', value: '450M+', sub: 'Clarification wave reach', status: 'Peaked', color: 'teal' }
  ],
  summaryStats: {
    positiveSentiment: '69%',
    perceptionRise: '+2',
    topFeedback: 'Ijazah Controversy'
  },
  campaignData: [
    { name: 'Baseline (Avg)', sales: 50000, er: 12 },
    { name: 'Nov controversy', sales: 205000, er: 22 },
  ],
  awards: [
    { title: 'QS World Ranking', subtitle: '#1 in Indonesia (Sustainability)', icon: 'award' },
    { title: 'THE Impact', subtitle: 'Top 10 for SDG 1 (No Poverty)', icon: 'check' }
  ],
  viralSnapshots: [
    { emoji: '📜', title: 'Rektor Clarification', stats: 'IG: 2.3M+ Views | 24% ER' },
    { emoji: '🔍', title: '"Logo Lonjong" Thread', stats: 'X: 70K+ Views | Forensic Drama' }
  ],
  timelineData: [
    { date: 'Nov 1', mentions: 1500 },
    { date: 'Nov 10', mentions: 2500 },
    { date: 'Nov 17', mentions: 8500 }, // KIP Sidang wave
    { date: 'Nov 23', mentions: 12000 }, // Logo Scan wave
    { date: 'Nov 28', mentions: 18000 }, // Rektor Clarification wave
    { date: 'Nov 30', mentions: 15000 },
  ],
  sovData: [
    { name: 'X (Twitter)', value: 62, color: '#1f2937' },
    { name: 'TikTok', value: 20, color: '#38bdf8' },
    { name: 'Instagram', value: 12, color: '#f472b6' },
    { name: 'YouTube', value: 6, color: '#ef4444' },
  ],
  breakdownTable: [
    { platform: 'X (Twitter)', product: 'Long threads + Recaps', er: '18.0%', insight: 'Logo scan thread hit 69K views' },
    { platform: 'TikTok', product: 'Reaction stitches', er: '24.5%', insight: 'Inilahcom clip reached 2M+ views' },
    { platform: 'Instagram', product: 'Reels + Clarification', er: '14.0%', insight: 'Ova Emilia Reel peaked at 2.3M' },
    { platform: 'YouTube', product: 'Clarification videos', er: '10.0%', insight: '9-point video topped 50K views' }
  ],
  hashtags: [
    { tag: '#IjazahJokowi', count: 3850 },
    { tag: '#IjazahPalsuUGM', count: 1920 },
    { tag: '#UGMAsli', count: 1450 },
    { tag: '#UGMStudent', count: 1120 },
    { tag: '#IjazahAsliUGM', count: 890 },
    { tag: '#BukaDataUGM', count: 850 },
    { tag: '#LogoLonjong', count: 760 },
  ],
  contentDetail: {
    positiveDrivers: [
      "“KKN beneran” memes (relatable)",
      "“Kamu bisa lolos UGM” motivation",
      "“Gama Forever” alumni pride",
      "Rektor 9-point clarification"
    ],
    highlight1: {
      type: 'TikTok Viral Hit',
      title: 'Hoax Rektor Suap',
      creator: '@Dokter.tifa',
      metrics: [
        { label: 'Views', value: '3M+' },
        { label: 'Comments', value: '18K+' }
      ],
      notes: [
        'Why it viral: Sensational hoax narration.',
        'Debunk: Refuted by Antara Nov 18.'
      ]
    },
    highlight2: {
      type: 'IG Top Content',
      title: '9 Poin Klarifikasi',
      creator: '@ugm.yogyakarta',
      metrics: [
        { label: 'Views', value: '2.3M+' },
        { label: 'Engagement', value: '24%' }
      ],
      notes: [
        'Impact: Instantly ignited #IjazahAsliUGM.',
        'Reach: 7.2M+ amplified by faculty accounts.'
      ]
    },
    platformDeepDive: {
      title: 'Google Search Surge',
      items: [
        { label: 'Sidang Ijazah', text: 'Queries spiked 300%+ mid-Nov.' },
        { label: 'Reprimand Article', text: 'Kompas.com article on "Surat Tanpa Kop".' }
      ],
      metricLabel: 'Query Volume',
      metricPercent: '72%'
    },
    articles: [
      { title: "Sidang Ijazah, UGM Ditegur", source: "Kompas.com", views: "150K+", impact: "28+ Backlinks" },
      { title: "Roy Suryo Ungkap Watermark", source: "Detik.com", views: "142K", impact: "High traffic driver" },
      { title: "Rektor Klarifikasi 9 Poin", source: "Tempo.co", views: "128K", impact: "Sentiment recovery" },
      { title: "Viral AI Lisa Glitch", source: "Tribunnews.com", views: "115K", impact: "Google Search peak" }
    ]
  }
};
