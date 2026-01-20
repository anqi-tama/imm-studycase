
export type TabId = 'summary' | 'viral-dive' | 'content-detail';
export type CaseStudy = 'wardah' | 'ugm' | 'rspad';

export interface KPI {
  label: string;
  value: string;
  sub: string;
  status: string;
  color: string;
}

export interface ViralWave {
  date: string;
  mentions: number;
  wave1?: number; // Nilai spesifik gelombang 1
  wave2?: number; // Nilai spesifik gelombang 2
  wave3?: number; // Nilai spesifik gelombang 3
  baseline?: number; // Nilai dasar tanpa viralitas
}

export interface PlatformSOV {
  name: string;
  value: number;
  color: string;
}

export interface ContentRow {
  platform: string;
  product: string;
  er: string;
  insight: string;
}

export interface Article {
  title: string;
  source: string;
  views: string;
  impact: string;
}

export interface CaseStudyData {
  id: CaseStudy;
  name: string;
  period: string;
  kpis: KPI[];
  banner: {
    title: string;
    description: string;
    tagValue: string;
    tagLabel: string;
  };
  summaryStats: {
    positiveSentiment: string;
    perceptionRise: string;
    topFeedback: string;
  };
  campaignData: any[];
  awards: {
    title: string;
    subtitle: string;
    icon: 'award' | 'check';
  }[];
  viralSnapshots: {
    emoji: string;
    title: string;
    stats: string;
  }[];
  timelineData: ViralWave[];
  sovData: PlatformSOV[];
  breakdownTable: ContentRow[];
  hashtags: { tag: string; count: number }[];
  contentDetail: {
    positiveDrivers: string[];
    highlight1: {
      type: string;
      title: string;
      creator: string;
      metrics: { label: string; value: string }[];
      notes: string[];
    };
    highlight2: {
      type: string;
      title: string;
      creator: string;
      metrics: { label: string; value: string }[];
      notes: string[];
    };
    platformDeepDive: {
      title: string;
      items: { label: string; text: string }[];
      metricLabel: string;
      metricPercent: string;
    };
    articles: Article[];
  };
}
