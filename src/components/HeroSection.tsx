import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Waves } from 'lucide-react';
import heroSurf from '@/assets/hero-surf.jpg';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    onSearch(query || '');
  };

  return (
    <div className="relative min-h-[70vh] bg-gradient-ocean flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSurf})` }}
      >
        <div className="absolute inset-0 bg-gradient-ocean/75"></div>
      </div>
      
      {/* Animated wave overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-wave animate-wave"></div>
        <div className="absolute bottom-4 left-0 w-full h-24 bg-gradient-wave animate-wave" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 animate-float">
          <Waves className="h-16 w-16 mx-auto text-primary-foreground mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Southwest France
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-6">
            Surf Spots Guide
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Discover the most epic surf spots from Hossegor to the Spanish border. 
            Live conditions, webcams, and local insights for the ultimate surf experience.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              name="search"
              placeholder="Search surf spots..."
              className="pl-10 bg-card/95 backdrop-blur border-primary/20 focus:border-primary/40"
            />
          </div>
          <Button type="submit" variant="secondary" className="px-6">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};