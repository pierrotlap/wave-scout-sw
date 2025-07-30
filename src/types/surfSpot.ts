export interface TideInfo {
  currentTide: 'High' | 'Mid' | 'Low';
  nextTide: 'High' | 'Low';
  nextTideTime: string;
  tideDirection: 'Incoming' | 'Outgoing';
  tideHeight: string;
}

export interface SurfConditions {
  waveHeight: string;
  windSpeed: string;
  windDirection: string;
  surfCondition: 'Poor' | 'Fair' | 'Good' | 'Excellent';
  swellDirection: string;
  period: string;
  waterTemp: string;
  tide: TideInfo;
  bestTidePhase: string[];
  currentRating: number; // 1-10 current conditions rating
}

export interface SurfSpot {
  id: string;
  name: string;
  location: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  conditions: SurfConditions;
  webcamUrl?: string;
  imageUrl: string;
  popularity: number; // 1-5 rating
  bestSeasons: string[];
  waveType: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface WeatherConditions {
  temperature: string;
  waterTemp: string;
  tideStatus: string;
  swellDirection: string;
  period: string;
}