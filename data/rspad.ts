
import { CaseStudyData } from '../types';

export const RSPAD_DATA: CaseStudyData = {
  id: 'rspad',
  name: 'RSPAD Gatot Soebroto',
  period: '03 – 17 Januari 2026',
  banner: {
    title: 'Social Media & Digital Intelligence',
    description: 'RSPAD as the ultimate safety net. Sentiment driven by professionalism and institutional trust amid critical national emergency cases.',
    tagValue: '119',
    tagLabel: 'Total Mentions'
  },
  kpis: [
    { label: 'Total Mentions', value: '119', sub: '+17% growth', status: 'Baseline', color: 'teal' },
    { label: 'Social Reach', value: '2.2M', sub: '+219% viral impact', status: 'High Reach', color: 'green' },
    { label: 'Non-Social Reach', value: '341K', sub: 'Media & Web Authority', status: 'Stable', color: 'blue' },
    { label: 'AVE (Value)', value: '$195K', sub: 'Advertising Equivalence', status: 'High Value', color: 'indigo' }
  ],
  summaryStats: {
    positiveSentiment: '67%',
    perceptionRise: '+17%',
    topFeedback: 'Trust Anchor'
  },
  campaignData: [
    { name: 'Jan 03-10', sales: 41, er: 12 },
    { name: 'Jan 11-17', sales: 78, er: 28 },
  ],
  awards: [
    { title: 'Code Stroke RSPAD', subtitle: 'Highest Positive Sentiment', icon: 'check' },
    { title: 'Stem Cell Research', subtitle: 'Strategic Medical Authority', icon: 'check' }
  ],
  viralSnapshots: [
    { emoji: '🚑', title: 'IGD Emergency', stats: 'Social Reach: 2.2M | Viral External' },
    { emoji: '💂', title: 'Pangkostrad Visit', stats: 'Top Keyword Context' }
  ],
  timelineData: [
    { date: 'Jan 03', mentions: 7, baseline: 5, wave1: 2 },
    { date: 'Jan 05', mentions: 10, baseline: 4, wave1: 6 },
    { date: 'Jan 07', mentions: 17, baseline: 5, wave1: 12 },
    { date: 'Jan 09', mentions: 7, baseline: 4, wave1: 3 },
    { date: 'Jan 11', mentions: 2, baseline: 2 },
    { date: 'Jan 13', mentions: 15, baseline: 3, wave2: 12 },
    { date: 'Jan 15', mentions: 15, baseline: 2, wave2: 5, wave3: 8 },
    { date: 'Jan 17', mentions: 1, baseline: 1 },
  ],
  sovData: [
    { name: 'X (Twitter)', value: 40, color: '#1f2937' },
    { name: 'TikTok', value: 25, color: '#38bdf8' },
    { name: 'YouTube', value: 25, color: '#ef4444' },
    { name: 'Others', value: 10, color: '#94a3b8' },
  ],
  breakdownTable: [
    { platform: 'TikTok @rspadgs', product: 'Edukasi Ringkas', er: '4.2%', insight: 'Rising Star, high organic engagement' },
    { platform: 'Instagram @rspadgs', product: 'Trust Anchor', er: '3.2%', insight: 'Massa terbesar, fokus kredibilitas' },
    { platform: 'YouTube Official', product: 'Education Hub', er: '2.0%', insight: 'Profil layanan mendalam' },
    { platform: 'X Mentions', product: 'External News', er: 'N/A', insight: 'Objek pembicaraan nasional' }
  ],
  hashtags: [
    { tag: '#RSPAD', count: 85 },
    { tag: '#GatotSoebroto', count: 42 },
    { tag: '#CodeStroke', count: 30 },
    { tag: '#StemCell', count: 18 },
  ],
  contentDetail: {
    positiveDrivers: [
      "Profesionalisme Layanan IGD",
      "Kecepatan Code Stroke",
      "Otoritas Medis Modern",
      "Kolaborasi Riset Internasional"
    ],
    highlight1: {
      type: 'Viral Narrative',
      title: 'Code Stroke RSPAD',
      creator: 'TikTok / YouTube UGC',
      metrics: [
        { label: 'Reach', value: '2.2M' },
        { label: 'Growth', value: '219%' }
      ],
      notes: [
        'Context: Pasien dievakuasi dalam hitungan menit.',
        'Impact: Memperkuat citra ultimate safety net.'
      ]
    },
    highlight2: {
      type: 'Strategic Event',
      title: 'Kunjungan Pangkostrad',
      creator: 'Official & Media',
      metrics: [
        { label: 'Mentions', value: 'High' },
        { label: 'Impact', value: 'Institutional' }
      ],
      notes: [
        'Context: Memperkuat profil rumah sakit militer.',
        'Strategy: Gunakan storytelling humanis.'
      ]
    },
    platformDeepDive: {
      title: 'Owned Media Gap',
      items: [
        { label: 'Narasi Eksternal', text: 'Mencapai 2.2M jangkauan.' },
        { label: 'Interaksi Internal', text: 'Masih di bawah 200 interaksi.' }
      ],
      metricLabel: 'Narrative Control',
      metricPercent: '15%'
    },
    articles: [
      { title: "Code Stroke RSPAD Viral", source: "TikTok", views: "1M+", impact: "Viral Sentiment" },
      { title: "Kolaborasi Stem Cell Mayapada", source: "CNBC", views: "341K", impact: "Authority" },
      { title: "Toleransi Natal Bersama", source: "Internal", views: "Low", impact: "Institutional" },
      { title: "Edukasi Super Flu", source: "Official", views: "Stable", impact: "Health Education" }
    ]
  }
};
