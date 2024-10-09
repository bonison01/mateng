// /app/delivery-rates/distanceMap.ts

export const distanceMap: Record<string, Record<string, number>> = {
  'RIMS': {
    'Thangmeiband': 5,
    'Lamphel Supermarket': 3,
    'Paona Bazar': 7,
    'Keishampat': 4,
  },
  'Thangmeiband': {
    'RIMS': 5,
    'Lamphel Supermarket': 2,
    'Paona Bazar': 8,
    'Keishampat': 6,
  },
  'Lamphel Supermarket': {
    'RIMS': 1,
    'Thangmeiband': 2,
    'Paona Bazar': 3,
    'Keishampat': 4,
  },
  'Paona Bazar': {
    'RIMS': 7,
    'Thangmeiband': 8,
    'Lamphel Supermarket': 6,
    'Keishampat': 9,
  },
  'Keishampat': {
    'RIMS': 4,
    'Thangmeiband': 6,
    'Lamphel Supermarket': 5,
    'Paona Bazar': 9,
  },
  // Add more addresses as needed
};
