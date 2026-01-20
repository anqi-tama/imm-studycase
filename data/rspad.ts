
import { CaseStudyData } from '../types';

export const RSPAD_DATA: CaseStudyData = {
  id: 'rspad',
  name: 'RSPAD Gatot Soebroto',
  period: '3 – 17 January 2026 (Digital Intelligence)',
  banner: {
    title: 'Pusat Otoritas Medis Modern',
    description: 'RSPAD holds an unshakable reputation as the national referral hospital, shifting perceptions from a military facility to a global center of medical excellence.',
    tagValue: '2.2M',
    tagLabel: 'Total Social Reach'
  },
  kpis: [
    { label: 'Volume Mentions', value: '119', sub: '+17% vs Prev Period', status: 'Rising', color: 'teal' },
    { label: 'Social Reach', value: '2.2M', sub: '+219% Viral Spike', status: 'Peaked', color: 'blue' },
    { label: 'Non-Media Reach', value: '341K', sub: '+12% News Pickup', status: 'Steady', color: 'indigo' },
    { label: 'Total Interaction', value: '32,464', sub: 'Significant Growth', status: 'Viral', color: 'green' }
  ],
  summaryStats: {
    positiveSentiment: '67%',
    perceptionRise: '+219%',
    topFeedback: 'Code Stroke Excellence'
  },
  campaignData: [
    { name: 'Baseline', sales: 102, er: 12 },
    { name: 'Jan 26 Spike', sales: 119, er: 28 },
  ],
  awards: [
    { title: 'Rujukan Nasional', subtitle: 'Pusat Otoritas Medis Terpercaya', icon: 'award' },
    { title: 'Transformation JKN', subtitle: 'Layanan Pasien Terintegrasi', icon: 'check' }
  ],
  viralSnapshots: [
    { emoji: '🚑', title: 'Code Stroke Success', stats: 'TikTok/YT: Fast Response Recognition' },
    { emoji: '💂', title: 'Pangkostrad Visit', stats: 'X: High Authority Mention' }
  ],
  timelineData: [
    { date: '03 Jan', mentions: 7 },
    { date: '05 Jan', mentions: 10 },
    { date: '07 Jan', mentions: 17 },
    { date: '09 Jan', mentions: 7 },
    { date: '11 Jan', mentions: 2 },
    { date: '13 Jan', mentions: 15 },
    { date: '15 Jan', mentions: 15 },
    { date: '17 Jan', mentions: 1 },
  ],
  waves: [
    { label: 'Wave 1: Code Stroke Success (Jan 07)', color: 'teal' },
    { label: 'Wave 2: Pangkostrad Visit & National Reach (Jan 13)', color: 'blue' }
  ],
  sovData: [
    { name: 'X (Twitter)', value: 40, color: '#1d9bf0' },
    { name: 'TikTok', value: 25, color: '#000000' },
    { name: 'YouTube', value: 25, color: '#ff0000' },
    { name: 'Others', value: 10, color: '#64748b' },
  ],
  breakdownTable: [
    { platform: 'TikTok', product: 'Humanist Content', er: '4.2%', insight: 'Highest organic growth, Rising Star' },
    { platform: 'Instagram', product: 'Visual Presence', er: '3.2%', insight: 'Trust anchor, largest base' },
    { platform: 'X (Twitter)', product: 'News/Narrative', er: 'Low', insight: 'Uncontrolled narrative, 2.2M Reach' },
    { platform: 'YouTube', product: 'Education', er: '2.0%', insight: 'Education Hub for services' }
  ],
  hashtags: [
    { tag: '#rspad', count: 14 },
    { tag: '#codestroke', count: 8 },
    { tag: '#rspadgatotsoebroto', count: 4 },
    { tag: '#periodeemasstroke', count: 3 },
    { tag: '#stemcell', count: 2 },
  ],
  contentDetail: {
    positiveDrivers: [
      "Profesionalisme Medis Tinggi",
      "Keberhasilan Layanan Code Stroke",
      "Kunjungan Tokoh Nasional",
      "Edukasi Stem Cell & Medis"
    ],
    highlight1: {
      type: 'TikTok Viral UGC',
      title: 'Ucapan Natal & Tahun Baru',
      creator: '@rspadgs',
      metrics: [
        { label: 'Likes', value: '448' },
        { label: 'Engagement', value: 'High' }
      ],
      notes: [
        'Sentiment: Very positive response to hospitality.',
        'Insight: Audience prefers humanist over formal.'
      ]
    },
    highlight2: {
      type: 'Educational Series',
      title: 'Layanan Code Stroke',
      creator: 'RSPAD Internal',
      metrics: [
        { label: 'Social Reach', value: 'Viral' },
        { label: 'UGC Content', value: '61 Posts' }
      ],
      notes: [
        'Impact: Proves educational value is viral.',
        'Status: Highest save rate among healthcare.'
      ]
    },
    platformDeepDive: {
      title: 'X (Twitter) Vulnerability',
      items: [
        { label: 'Logistic Complaints', text: 'Minor sentiment drag from parking/taxi.' },
        { label: 'Narrative Control', text: 'High reach but lacks official presence.' }
      ],
      metricLabel: 'Uncontrolled Reach',
      metricPercent: '2.2M'
    },
    articles: [
      { title: "Kunjungan Pangkostrad di RSPAD", source: "TNI AD", views: "15K+", impact: "Authority Driver" },
      { title: "Layanan Sel Punca Mayapada x RSPAD", source: "CNBC", views: "25K", impact: "Research Credibility" },
      { title: "Penanganan Insiden Kecelakaan", source: "Kompas TV", views: "45K", impact: "Contextual Negative" },
      { title: "Transformasi JKN di Rumah Sakit", source: "Antara", views: "10K", impact: "Policy Support" }
    ]
  }
};
