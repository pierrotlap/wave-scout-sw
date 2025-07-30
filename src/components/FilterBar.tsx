import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface FilterBarProps {
  selectedDifficulty: string;
  selectedCondition: string;
  onDifficultyChange: (difficulty: string) => void;
  onConditionChange: (condition: string) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

export const FilterBar = ({
  selectedDifficulty,
  selectedCondition,
  onDifficultyChange,
  onConditionChange,
  onClearFilters,
  activeFiltersCount
}: FilterBarProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border/50">
      <h3 className="font-semibold text-foreground">Filters:</h3>
      
      <Select value={selectedDifficulty} onValueChange={onDifficultyChange}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="Beginner">Beginner</SelectItem>
          <SelectItem value="Intermediate">Intermediate</SelectItem>
          <SelectItem value="Advanced">Advanced</SelectItem>
          <SelectItem value="Expert">Expert</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedCondition} onValueChange={onConditionChange}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Conditions" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Conditions</SelectItem>
          <SelectItem value="Excellent">Excellent</SelectItem>
          <SelectItem value="Good">Good</SelectItem>
          <SelectItem value="Fair">Fair</SelectItem>
          <SelectItem value="Poor">Poor</SelectItem>
        </SelectContent>
      </Select>

      {activeFiltersCount > 0 && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onClearFilters}
          className="flex items-center gap-1"
        >
          <X className="h-3 w-3" />
          Clear ({activeFiltersCount})
        </Button>
      )}

      {activeFiltersCount > 0 && (
        <Badge variant="secondary" className="ml-2">
          {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied
        </Badge>
      )}
    </div>
  );
};