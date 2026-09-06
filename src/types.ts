export interface SeismicEvent {
  id: string;
  location: string;
  region: string;
  date: string;
  time: string;
  magnitude: number;
  depthKm: number;
  lat: number;
  lng: number;
  intensityMercalli: string;
  intensityNum: number;
  source: string;
  eventNumber: string;
}

export interface SeismicStation {
  id: string;
  code: string;
  name: string;
  state: string;
  type: 'raspberry_shake' | 'ssn';
  lat: number;
  lng: number;
  status: 'online' | 'warning' | 'offline';
  sensorType: string;
  latencyMs: number;
  lastPing: string;
}

export interface MercalliLevel {
  level: string;
  num: number;
  title: string;
  description: string;
  color: string;
  textColor: string;
  effects: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'tecnologia' | 'red';
}
