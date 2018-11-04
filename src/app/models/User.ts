export interface User {
  firstName: string;
  lastName: string;
  age?: number; // ? - optional properties
  address?: {
    street?: string;
    city?: string;
    state?: string;
  };
}
