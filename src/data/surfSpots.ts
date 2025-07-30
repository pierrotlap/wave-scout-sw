import { SurfSpot } from '@/types/surfSpot';

export const surfSpots: SurfSpot[] = [
  {
    id: '1',
    name: 'Hossegor - La Gravière',
    location: 'Hossegor, Landes',
    description: 'World-famous beach break hosting the Quiksilver Pro. Heavy, powerful waves with perfect barrels. One of the most prestigious surf spots in Europe.',
    coordinates: { lat: 43.6577, lng: -1.4198 },
    conditions: {
      waveHeight: '2-3m',
      windSpeed: '12 km/h',
      windDirection: 'E',
      surfCondition: 'Excellent',
      swellDirection: 'WNW',
      period: '14s',
      waterTemp: '16°C',
      tide: {
        currentTide: 'Mid',
        nextTide: 'High',
        nextTideTime: '14:30',
        tideDirection: 'Incoming',
        tideHeight: '3.2m'
      },
      bestTidePhase: ['Mid incoming', 'High tide', 'Mid outgoing'],
      currentRating: 9
    },
    webcamUrl: 'https://www.hossegor.com/webcam-la-graviere',
    imageUrl: '/placeholder.svg',
    popularity: 5,
    bestSeasons: ['September', 'October', 'November'],
    waveType: 'Beach break',
    difficulty: 'Expert'
  },
  {
    id: '2',
    name: 'Hossegor - La Nord',
    location: 'Hossegor, Landes',
    description: 'Powerful beach break just north of La Gravière. Known for consistent waves and world-class barrels. Less crowded than its famous neighbor.',
    coordinates: { lat: 43.6622, lng: -1.4165 },
    conditions: {
      waveHeight: '1.5-2.5m',
      windSpeed: '10 km/h',
      windDirection: 'NE',
      surfCondition: 'Good',
      swellDirection: 'W',
      period: '12s',
      waterTemp: '16°C',
      tide: {
        currentTide: 'Mid',
        nextTide: 'High',
        nextTideTime: '14:30',
        tideDirection: 'Incoming',
        tideHeight: '3.2m'
      },
      bestTidePhase: ['Mid incoming', 'High tide'],
      currentRating: 8
    },
    webcamUrl: 'https://www.hossegor.com/webcam-la-nord',
    imageUrl: '/placeholder.svg',
    popularity: 4,
    bestSeasons: ['September', 'October', 'November', 'March'],
    waveType: 'Beach break',
    difficulty: 'Advanced'
  },
  {
    id: '3',
    name: 'Capbreton - La Piste',
    location: 'Capbreton, Landes',
    description: 'High-performance waves breaking near the Capbreton canyon. Known for its powerful surf and the famous VVF spot. Popular with pros and locals.',
    coordinates: { lat: 43.6425, lng: -1.4298 },
    conditions: {
      waveHeight: '1-2m',
      windSpeed: '8 km/h',
      windDirection: 'E',
      surfCondition: 'Good',
      swellDirection: 'WNW',
      period: '10s',
      waterTemp: '16°C',
      tide: {
        currentTide: 'Mid',
        nextTide: 'High',
        nextTideTime: '14:30',
        tideDirection: 'Incoming',
        tideHeight: '3.2m'
      },
      bestTidePhase: ['Low incoming', 'Mid tide', 'High tide'],
      currentRating: 7
    },
    webcamUrl: 'https://www.capbreton.com/webcam',
    imageUrl: '/placeholder.svg',
    popularity: 4,
    bestSeasons: ['September', 'October', 'April'],
    waveType: 'Beach break',
    difficulty: 'Intermediate'
  },
  {
    id: '4',
    name: 'Seignosse - Les Bourdaines',
    location: 'Seignosse, Landes',
    description: 'Consistent beach break with multiple peaks. Great for all levels with good facilities. Less crowded alternative to Hossegor spots.',
    coordinates: { lat: 43.6833, lng: -1.3833 },
    conditions: {
      waveHeight: '0.8-1.5m',
      windSpeed: '6 km/h',
      windDirection: 'SE',
      surfCondition: 'Fair',
      swellDirection: 'W',
      period: '8s',
      waterTemp: '16°C',
      tide: {
        currentTide: 'Mid',
        nextTide: 'High',
        nextTideTime: '14:30',
        tideDirection: 'Incoming',
        tideHeight: '3.2m'
      },
      bestTidePhase: ['Any tide', 'Mid incoming preferred'],
      currentRating: 6
    },
    imageUrl: '/placeholder.svg',
    popularity: 3,
    bestSeasons: ['September', 'October', 'March', 'April'],
    waveType: 'Beach break',
    difficulty: 'Intermediate'
  },
  {
    id: '5',
    name: 'Labenne',
    location: 'Labenne, Landes',
    description: 'Long stretch of beach with multiple surf spots. Good for beginners and intermediates. Consistent waves with nice facilities nearby.',
    coordinates: { lat: 43.5944, lng: -1.4667 },
    conditions: {
      waveHeight: '0.5-1.2m',
      windSpeed: '14 km/h',
      windDirection: 'NE',
      surfCondition: 'Fair',
      swellDirection: 'WNW',
      period: '7s',
      waterTemp: '16°C',
      tide: {
        currentTide: 'Low',
        nextTide: 'High',
        nextTideTime: '14:30',
        tideDirection: 'Incoming',
        tideHeight: '3.2m'
      },
      bestTidePhase: ['Mid incoming', 'High tide'],
      currentRating: 5
    },
    imageUrl: '/placeholder.svg',
    popularity: 3,
    bestSeasons: ['April', 'May', 'September', 'October'],
    waveType: 'Beach break',
    difficulty: 'Beginner'
  },
  {
    id: '6',
    name: 'Anglet - Chambre d\'Amour',
    location: 'Anglet, Pyrénées-Atlantiques',
    description: 'Protected cove with more gentle waves. Perfect for beginners and longboarders. Beautiful setting with caves and cliffs.',
    coordinates: { lat: 43.4944, lng: -1.5167 },
    conditions: {
      waveHeight: '0.8-1.5m',
      windSpeed: '4 km/h',
      windDirection: 'W',
      surfCondition: 'Good',
      swellDirection: 'NW',
      period: '9s',
      waterTemp: '17°C',
      tide: {
        currentTide: 'Low',
        nextTide: 'High',
        nextTideTime: '14:45',
        tideDirection: 'Incoming',
        tideHeight: '2.8m'
      },
      bestTidePhase: ['Low to mid incoming', 'Protected from big swells'],
      currentRating: 7
    },
    webcamUrl: 'https://www.anglet.com/webcam-chambre-amour',
    imageUrl: '/placeholder.svg',
    popularity: 4,
    bestSeasons: ['May', 'June', 'September'],
    waveType: 'Beach break',
    difficulty: 'Beginner'
  },
  {
    id: '7',
    name: 'Biarritz - Grande Plage',
    location: 'Biarritz, Pyrénées-Atlantiques',
    description: 'Historic surf spot in the heart of Biarritz. Birthplace of European surfing. Great for beginners with beautiful Art Deco backdrop.',
    coordinates: { lat: 43.4832, lng: -1.5586 },
    conditions: {
      waveHeight: '0.5-1m',
      windSpeed: '7 km/h',
      windDirection: 'NW',
      surfCondition: 'Good',
      swellDirection: 'NW',
      period: '6s',
      waterTemp: '17°C',
      tide: {
        currentTide: 'Low',
        nextTide: 'High',
        nextTideTime: '15:00',
        tideDirection: 'Incoming',
        tideHeight: '2.5m'
      },
      bestTidePhase: ['Mid to high tide', 'Protected bay'],
      currentRating: 6
    },
    webcamUrl: 'https://www.biarritz.com/webcam-grande-plage',
    imageUrl: '/placeholder.svg',
    popularity: 5,
    bestSeasons: ['June', 'July', 'August', 'September'],
    waveType: 'Beach break',
    difficulty: 'Beginner'
  },
  {
    id: '8',
    name: 'Guéthary',
    location: 'Guéthary, Pyrénées-Atlantiques',
    description: 'Reef break producing powerful right-hand waves. Advanced surfers only. Beautiful Basque fishing village setting.',
    coordinates: { lat: 43.4244, lng: -1.6056 },
    conditions: {
      waveHeight: '2-3.5m',
      windSpeed: '16 km/h',
      windDirection: 'E',
      surfCondition: 'Excellent',
      swellDirection: 'NW',
      period: '15s',
      waterTemp: '17°C',
      tide: {
        currentTide: 'Low',
        nextTide: 'High',
        nextTideTime: '15:15',
        tideDirection: 'Incoming',
        tideHeight: '2.3m'
      },
      bestTidePhase: ['Low to mid tide', 'Incoming preferred'],
      currentRating: 9
    },
    imageUrl: '/placeholder.svg',
    popularity: 4,
    bestSeasons: ['September', 'October', 'November'],
    waveType: 'Reef break',
    difficulty: 'Expert'
  },
  {
    id: '9',
    name: 'Lafitenia',
    location: 'Saint-Jean-de-Luz, Pyrénées-Atlantiques',
    description: 'Consistent reef break with long rides. One of the most reliable spots in the area. Good for intermediate to advanced surfers.',
    coordinates: { lat: 43.3833, lng: -1.6333 },
    conditions: {
      waveHeight: '1.5-2.5m',
      windSpeed: '12 km/h',
      windDirection: 'NE',
      surfCondition: 'Good',
      swellDirection: 'NW',
      period: '13s',
      waterTemp: '17°C',
      tide: {
        currentTide: 'Low',
        nextTide: 'High',
        nextTideTime: '15:30',
        tideDirection: 'Incoming',
        tideHeight: '2.1m'
      },
      bestTidePhase: ['Low incoming', 'Mid tide optimal'],
      currentRating: 8
    },
    imageUrl: '/placeholder.svg',
    popularity: 4,
    bestSeasons: ['September', 'October', 'March', 'April'],
    waveType: 'Reef break',
    difficulty: 'Advanced'
  },
  {
    id: '10',
    name: 'Hendaye',
    location: 'Hendaye, Pyrénées-Atlantiques',
    description: 'Long beach break near the Spanish border. Good for all levels with consistent waves. Less crowded than northern spots.',
    coordinates: { lat: 43.3667, lng: -1.7833 },
    conditions: {
      waveHeight: '1-2m',
      windSpeed: '10 km/h',
      windDirection: 'W',
      surfCondition: 'Fair',
      swellDirection: 'NW',
      period: '11s',
      waterTemp: '17°C',
      tide: {
        currentTide: 'Low',
        nextTide: 'High',
        nextTideTime: '15:45',
        tideDirection: 'Incoming',
        tideHeight: '1.9m'
      },
      bestTidePhase: ['Mid incoming', 'High tide'],
      currentRating: 6
    },
    imageUrl: '/placeholder.svg',
    popularity: 3,
    bestSeasons: ['April', 'May', 'September', 'October'],
    waveType: 'Beach break',
    difficulty: 'Intermediate'
  }
];