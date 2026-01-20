
import { CaseStudyData } from '../types';

export const WARDAH_DATA: CaseStudyData = {
  id: 'wardah',
  name: 'Wardah',
  period: 'Nov 2025 vs. Ramadan Campaign (Q2 2025)',
  banner: {
    title: 'Pivot: "Movement + Glow"',
    description: 'November marked a pivot post-Ramadan, emphasizing active lifestyles, celebrity collabs, and skincare innovation amid economic pressures.',
    tagValue: 'Rp100K',
    tagLabel: 'Core Price Target'
  },
  kpis: [
    { label: 'Social Mentions (Nov)', value: '30,450', sub: 'Target: 28k–32k', status: 'On Track', color: 'teal' },
    { label: 'Web Search Mentions', value: '1,900+', sub: 'Potential SEO/SEM', status: 'Growing', color: 'blue' },
    { label: 'Earned Media Value', value: 'US$12.6M', sub: 'Target: US$11.8M+', status: 'High Value', color: 'indigo' },
    { label: 'Sales Velocity (MoM)', value: '+28%', sub: 'Driven by Sunscreen', status: 'Exceeded', color: 'green' }
  ],
  summaryStats: {
    positiveSentiment: '94%',
    perceptionRise: '+10',
    topFeedback: 'Sold Out Everywhere'
  },
  campaignData: [
    { name: 'Ramadan Baseline', sales: 8.3, er: 18 },
    { name: 'Nov Viral Pivot', sales: 10.1, er: 26.5 },
  ],
  awards: [
    { title: 'MMA Smarties 2025', subtitle: 'Brand of the Year', icon: 'award' },
    { title: 'Salaam Gateway', subtitle: 'Most Muslim-Friendly Brand', icon: 'check' }
  ],
  viralSnapshots: [
    { emoji: '🔥', title: '"SUNBLOCK BEDAK"', stats: 'TikTok: 3.2M+ Likes | 29% ER' },
    { emoji: '🎾', title: 'Padel Mastery Showdown', stats: 'IG Reels: 1.2M+ Views | 25% ER' }
  ],
  timelineData: [
    { date: 'Nov 1', mentions: 1000, baseline: 1000 },
    { date: 'Nov 5', mentions: 1500, baseline: 1100, wave1: 400 },
    { date: 'Nov 10', mentions: 4200, baseline: 1000, wave1: 3200 },
    { date: 'Nov 15', mentions: 5800, baseline: 1200, wave1: 1600, wave2: 3000 },
    { date: 'Nov 20', mentions: 3100, baseline: 1100, wave2: 2000 },
    { date: 'Nov 25', mentions: 3900, baseline: 1200, wave2: 2700 },
    { date: 'Nov 30', mentions: 5000, baseline: 1500, wave2: 3500 },
  ],
  sovData: [
    { name: 'Instagram', value: 47, color: '#f472b6' },
    { name: 'TikTok', value: 32, color: '#38bdf8' },
    { name: 'X (Twitter)', value: 15, color: '#1f2937' },
    { name: 'YouTube', value: 6, color: '#ef4444' },
  ],
  breakdownTable: [
    { platform: 'IG Reel (Padel Open)', product: 'Sunscreen & Lip Tint', er: '24.8%', insight: 'Reel active in Explore for 3 weeks' },
    { platform: 'TikTok ("Sunblock Bedak")', product: 'Sunscreen & Face Powder', er: '29.0%', insight: 'Highest UGC conversion rate' },
    { platform: 'X Post (Dita Karang)', product: 'Renew You Toner', er: '17.0%', insight: 'Top purchase intent questions' },
    { platform: 'X Post (Lip Tint)', product: 'Glasting Lip Tint', er: '12.5%', insight: 'Strongest micro-influencer drive' }
  ],
  hashtags: [
    { tag: '#wardah', count: 1439 },
    { tag: '#wardahbeauty', count: 271 },
    { tag: '#GlastingLipTint', count: 150 },
    { tag: '#ColorfitCushion', count: 120 },
    { tag: '#BeautyMovesYou', count: 100 },
    { tag: '#wardahsunscreen', count: 108 },
  ],
  contentDetail: {
    positiveDrivers: [
      "No white cast / Bedak-like finish",
      "Glow tahan lama meski olahraga",
      "Lokal tapi kualitas internasional",
      "Harga masuk akal (Value)"
    ],
    highlight1: {
      type: 'TikTok Viral UGC',
      title: 'Sunblock Bedak',
      creator: '@meimeimecin',
      metrics: [
        { label: 'Likes', value: '3.2M+' },
        { label: 'Comments', value: '35K+' }
      ],
      notes: [
        'Key Driver: Relatable oily-skin pain point.',
        'Action: Replicate demo in campaigns.'
      ]
    },
    highlight2: {
      type: 'IG Padel Open',
      title: 'Padel Mastery',
      creator: 'Wardah Official',
      metrics: [
        { label: 'Views', value: '1.2M+' },
        { label: 'Shares', value: '5K+' }
      ],
      notes: [
        'Impact: 1.2K+ Comments ("Proud of local brand!")',
        'Strategy: Increase "Active Beauty" collabs.'
      ]
    },
    platformDeepDive: {
      title: 'X (Twitter) Engagement',
      items: [
        { label: 'Dita Karang Collab', text: 'High purchase intent questions generated.' },
        { label: 'Glasting Lip Tint', text: 'Focused on affordability/halal mentions.' }
      ],
      metricLabel: 'Key Focus',
      metricPercent: '35%'
    },
    articles: [
      { title: "Brand of the Year 2025", source: "Puanpertiwi.com", views: "50K+", impact: "15+ Backlinks" },
      { title: "Wardah Padel Open", source: "Fimela.com", views: "40K", impact: "3K Shares" },
      { title: "Wardah x JMFW 2026", source: "Liputan6.com", views: "35K", impact: "2.5K Shares" },
      { title: "Paling Ramah Muslim", source: "Kompas.com", views: "30K", impact: "4K Shares" }
    ]
  }
};