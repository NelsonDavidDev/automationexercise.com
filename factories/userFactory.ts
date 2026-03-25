import { User, Country } from '../models/user';

function generateDateOfBirth() {
  const year = 1990 + Math.floor(Math.random() * 10); // 1990–1999
  const monthNumber = 1 + Math.floor(Math.random() * 12);
  const dayNumber = 1 + Math.floor(Math.random() * 28);

  return {
    day: String(dayNumber),
    month: String(monthNumber),
    year: String(year)
  };
}

function generateTitle(): 'Mr' | 'Mrs' {
  return Math.random() > 0.5 ? 'Mr' : 'Mrs';
}

function generateCountry(): Country {
  const countries: Country[] = [
    'India',
    'United States',
    'Canada',
    'Australia',
    'Israel',
    'New Zealand',
    'Singapore'
  ];

  return countries[Math.floor(Math.random() * countries.length)];
}

export function generateUser(overrides: Partial<User> = {}): User {
  const timestamp = Date.now();

  const defaultUser: User = {
    name: `User_${timestamp}`,
    lastName: `Last_${timestamp}`,
    email: `user_${timestamp}@test.com`,
    password: 'Test123*',
    company: 'QA Company',
    address: `Street ${timestamp}`,
    address2: `Apt ${timestamp}`,
    country: generateCountry(),
    state: 'Antioquia',
    city: 'Medellín',
    zipCode: `${10000 + (timestamp % 90000)}`,
    mobile: `3${Math.floor(100000000 + (timestamp % 900000000))}`,
    title: generateTitle(),
    dateOfBirth: generateDateOfBirth()
  };

  return {
    ...defaultUser,
    ...overrides
  };
}