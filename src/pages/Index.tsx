import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { SurfSpotCard } from '@/components/SurfSpotCard';
import { FilterBar } from '@/components/FilterBar';
import { SpotDetailsModal } from '@/components/SpotDetailsModal';
import { surfSpots } from '@/data/surfSpots';
import { SurfSpot } from '@/types/surfSpot';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedSpot, setSelectedSpot] = useState<SurfSpot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter surf spots based on search and filters
  const filteredSpots = surfSpots.filter(spot => {
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDifficulty = selectedDifficulty === 'all' || spot.difficulty === selectedDifficulty;
    const matchesCondition = selectedCondition === 'all' || spot.conditions.surfCondition === selectedCondition;
    
    return matchesSearch && matchesDifficulty && matchesCondition;
  });

  const activeFiltersCount = [
    selectedDifficulty !== 'all' ? 1 : 0,
    selectedCondition !== 'all' ? 1 : 0
  ].reduce((sum, count) => sum + count, 0);

  const handleViewDetails = (spot: SurfSpot) => {
    setSelectedSpot(spot);
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    setSelectedDifficulty('all');
    setSelectedCondition('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onSearch={setSearchQuery} />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <FilterBar
            selectedDifficulty={selectedDifficulty}
            selectedCondition={selectedCondition}
            onDifficultyChange={setSelectedDifficulty}
            onConditionChange={setSelectedCondition}
            onClearFilters={handleClearFilters}
            activeFiltersCount={activeFiltersCount}
          />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Surf Spots'}
          </h2>
          <p className="text-muted-foreground">
            Found {filteredSpots.length} surf spot{filteredSpots.length !== 1 ? 's' : ''}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {filteredSpots.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏄‍♂️</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No surf spots found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            {activeFiltersCount > 0 && (
              <button 
                onClick={handleClearFilters}
                className="text-primary hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSpots.map((spot) => (
              <SurfSpotCard 
                key={spot.id} 
                spot={spot} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </div>

      <SpotDetailsModal
        spot={selectedSpot}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSpot(null);
        }}
      />
    </div>
  );
};

export default Index;
