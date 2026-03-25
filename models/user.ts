export type Title = 'Mr' | 'Mrs';
export type Country = 'India' | 'United States' | 'Canada' | 'Australia' | 'Israel' | 'New Zealand' | 'Singapore';

export interface User {
  name: string;
  email: string;
  password: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: Country;
  state: string;
  city: string;
  zipCode: string;
  mobile: string;
  title: Title;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
}