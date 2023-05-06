const createData = (id, name, continent_id) => 
  ({ id, name, continent_id });

export const rows = [
  createData(1, 'United States', 1),
  createData(2, 'Canada', 1),
  createData(3, 'France', 2),
  createData(4, 'Germany', 2),
  createData(5, 'Brazil', 3)
];
