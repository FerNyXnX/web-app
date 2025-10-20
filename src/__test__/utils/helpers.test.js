import {
  getImageUrl,
  formatDate,
  formatNumber,
  truncateText,
  getRatingPercentage,
  getRatingColor,
  formatRuntime,
  isMovieInFavorites,
  removeDuplicateMovies,
} from '../../utils/helpers';

describe('Helper Functions', () => {
  describe('getImageUrl', () => {
    test('returns full image URL with path and size', () => {
      const result = getImageUrl('/test.jpg', 'w500');
      expect(result).toContain('/test.jpg');
      expect(result).toContain('w500');
    });

    test('returns null when no path provided', () => {
      const result = getImageUrl(null);
      expect(result).toBeNull();
    });
  });

  describe('formatDate', () => {
    test('formats date string correctly', () => {
      const result = formatDate('2024-01-15');
      expect(result).toContain('2024');
    });

    test('returns N/A for invalid date', () => {
      const result = formatDate(null);
      expect(result).toBe('N/A');
    });
  });

  describe('formatNumber', () => {
    test('formats number with commas', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1000000)).toBe('1,000,000');
    });

    test('returns 0 for null or undefined', () => {
      expect(formatNumber(null)).toBe('0');
      expect(formatNumber(undefined)).toBe('0');
    });
  });

  describe('truncateText', () => {
    test('truncates text longer than max length', () => {
      const longText = 'a'.repeat(200);
      const result = truncateText(longText, 150);
      expect(result.length).toBeLessThan(200);
      expect(result).toContain('...');
    });

    test('returns original text if shorter than max length', () => {
      const shortText = 'Short text';
      const result = truncateText(shortText, 150);
      expect(result).toBe(shortText);
    });

    test('handles empty string', () => {
      const result = truncateText('');
      expect(result).toBe('');
    });
  });

  describe('getRatingPercentage', () => {
    test('converts rating to percentage', () => {
      expect(getRatingPercentage(8.5)).toBe(85);
      expect(getRatingPercentage(10)).toBe(100);
      expect(getRatingPercentage(0)).toBe(0);
    });

    test('returns 0 for null rating', () => {
      expect(getRatingPercentage(null)).toBe(0);
    });
  });

  describe('getRatingColor', () => {
    test('returns green for high ratings', () => {
      const color = getRatingColor(8);
      expect(color).toBe('#46d369');
    });

    test('returns orange for medium ratings', () => {
      const color = getRatingColor(6);
      expect(color).toBe('#ffa500');
    });

    test('returns red for low ratings', () => {
      const color = getRatingColor(3);
      expect(color).toBe('#ff4444');
    });
  });

  describe('formatRuntime', () => {
    test('formats runtime correctly', () => {
      expect(formatRuntime(125)).toBe('2h 5m');
      expect(formatRuntime(90)).toBe('1h 30m');
    });

    test('returns N/A for null runtime', () => {
      expect(formatRuntime(null)).toBe('N/A');
    });
  });

  describe('isMovieInFavorites', () => {
    const favorites = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
    ];

    test('returns true if movie is in favorites', () => {
      expect(isMovieInFavorites(favorites, 1)).toBe(true);
    });

    test('returns false if movie is not in favorites', () => {
      expect(isMovieInFavorites(favorites, 3)).toBe(false);
    });

    test('handles empty favorites array', () => {
      expect(isMovieInFavorites([], 1)).toBe(false);
    });
  });

  describe('removeDuplicateMovies', () => {
    test('removes duplicate movies by ID', () => {
      const movies = [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 1, title: 'Movie 1 Duplicate' },
      ];
      const result = removeDuplicateMovies(movies);
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
    });

    test('handles empty array', () => {
      const result = removeDuplicateMovies([]);
      expect(result).toEqual([]);
    });

    test('returns same array if no duplicates', () => {
      const movies = [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
      ];
      const result = removeDuplicateMovies(movies);
      expect(result).toHaveLength(2);
    });
  });
});