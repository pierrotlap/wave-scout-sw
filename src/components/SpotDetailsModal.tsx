import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Waves, 
  Wind, 
  Star, 
  Calendar, 
  Thermometer,
  Navigation,
  Clock,
  Video,
  ExternalLink
} from 'lucide-react';
import { SurfSpot } from '@/types/surfSpot';

interface SpotDetailsModalProps {
  spot: SurfSpot | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SpotDetailsModal = ({ spot, isOpen, onClose }: SpotDetailsModalProps) => {
  if (!spot) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {spot.name}
          </DialogTitle>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{spot.location}</span>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Rating and Badges */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[...Array(spot.popularity)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                ({spot.popularity}/5)
              </span>
            </div>
            <div className="flex gap-2">
              <Badge className={getConditionColor(spot.conditions.surfCondition)}>
                {spot.conditions.surfCondition}
              </Badge>
              <Badge variant="outline" className={getDifficultyColor(spot.difficulty)}>
                {spot.difficulty}
              </Badge>
            </div>
          </div>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About This Spot</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {spot.description}
              </p>
            </CardContent>
          </Card>

          {/* Current Conditions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Waves className="h-5 w-5 text-primary" />
                Current Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Waves className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Wave Height</p>
                  <p className="font-bold">{spot.conditions.waveHeight}</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Wind className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Wind</p>
                  <p className="font-bold">{spot.conditions.windSpeed}</p>
                  <p className="text-xs">{spot.conditions.windDirection}</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Thermometer className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Water Temp</p>
                  <p className="font-bold">{spot.conditions.waterTemp}</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Navigation className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Swell</p>
                  <p className="font-bold">{spot.conditions.swellDirection}</p>
                  <p className="text-xs">{spot.conditions.period}</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Current Tide</p>
                  <p className="font-bold">{spot.conditions.tide.currentTide}</p>
                  <p className="text-xs">{spot.conditions.tide.tideDirection}</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Next {spot.conditions.tide.nextTide}</p>
                  <p className="font-bold">{spot.conditions.tide.nextTideTime}</p>
                  <p className="text-xs">{spot.conditions.tide.tideHeight}</p>
                </div>
              </div>
              
              {/* Current Rating */}
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Current Rating</span>
                  <span className="text-lg font-bold text-primary">{spot.conditions.currentRating}/10</span>
                </div>
                <div className="w-full bg-background rounded-full h-3">
                  <div 
                    className="bg-gradient-ocean h-3 rounded-full transition-all duration-500" 
                    style={{ width: `${spot.conditions.currentRating * 10}%` }}
                  ></div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground">
                    <strong>Best Times:</strong> {spot.conditions.bestTidePhase.join(', ')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spot Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wave Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{spot.waveType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <Badge variant="outline" className={getDifficultyColor(spot.difficulty)}>
                    {spot.difficulty}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Best Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {spot.bestSeasons.map((season) => (
                    <Badge key={season} variant="secondary">
                      {season}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {spot.webcamUrl && (
              <Button variant="outline" className="flex-1" asChild>
                <a href={spot.webcamUrl} target="_blank" rel="noopener noreferrer">
                  <Video className="h-4 w-4 mr-2" />
                  View Webcam
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            )}
            <Button 
              className="flex-1 bg-gradient-ocean hover:opacity-90" 
              asChild
            >
              <a 
                href={`https://maps.google.com?q=${spot.coordinates.lat},${spot.coordinates.lng}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};