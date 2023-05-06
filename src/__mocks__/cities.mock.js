const createData = (id, name, country_id) => 
  ({ id, name, country_id });

export const rows = [
  createData(1, 'New York', 1),
  createData(2, 'Los Angeles', 1),
  createData(3, 'Paris', 2),
  createData(4, 'Berlin', 3),
  createData(5, 'Tokyo', 4),
];
