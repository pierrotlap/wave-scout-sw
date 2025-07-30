export interface SurfSpot {
  id: string;
  name: string;
  location: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  waveHeight: string;
  windSpeed: string;
  windDirection: string;
  surfCondition: 'Poor' | 'Fair' | 'Good' | 'Excellent';
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