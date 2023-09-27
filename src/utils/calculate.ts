export const findMinValue = (obj: Record<string, any>): number => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return 0; 
    }
  
    const values = Object.values(obj);
    const numbers = values
      .map(value => (typeof value === 'object' ? findMinValue(value) : value))
      .filter((value): value is number => typeof value === 'number');
  
    return numbers.length > 0 ? Math.min(...numbers) : 0;
  };
  