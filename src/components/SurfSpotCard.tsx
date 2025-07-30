import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Wind, Waves, Video, TrendingUp } from 'lucide-react';
import { SurfSpot } from '@/types/surfSpot';

interface SurfSpotCardProps {
  spot: SurfSpot;
  onViewDetails: (spot: SurfSpot) => void;
}

export const SurfSpotCard = ({ spot, onViewDetails }: SurfSpotCardProps) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent': return 'bg-green-500';
      case 'Good': return 'bg-blue-500';
      case 'Fair': return 'bg-yellow-500';
      case 'Poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="group hover:shadow-wave transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {spot.name}
            </CardTitle>
            <div className="flex items-center gap-1 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{spot.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(spot.popularity)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {spot.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className={getConditionColor(spot.surfCondition)}>
            {spot.surfCondition}
          </Badge>
          <Badge variant="outline" className={getDifficultyColor(spot.difficulty)}>
            {spot.difficulty}
          </Badge>
          <Badge variant="outline">
            {spot.waveType}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 py-3 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Waves className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Wave Height</p>
              <p className="font-semibold text-sm">{spot.waveHeight}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Wind</p>
              <p className="font-semibold text-sm">{spot.windSpeed} {spot.windDirection}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          {spot.webcamUrl && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <a href={spot.webcamUrl} target="_blank" rel="noopener noreferrer">
                <Video className="h-4 w-4 mr-1" />
                Webcam
              </a>
            </Button>
          )}
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-gradient-ocean hover:opacity-90" 
            onClick={() => onViewDetails(spot)}
          >
            <TrendingUp className="h-4 w-4 mr-1" />
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};