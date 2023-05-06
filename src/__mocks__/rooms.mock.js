const createData = (id, number, floor, description, type, price, smoking, hotel_id) => 
  ({ id, number, floor, description, type, price, smoking, hotel_id });

export const rows = [
  createData(1, 101, 1, 'Single room with a view of the city', 'single', 100, false, 1),
  createData(2, 102, 1, 'Single room with a view of the sea', 'single', 120, false, 1),
  createData(3, 201, 2, 'Double room with a view of the city', 'double', 150, true, 1),
  createData(4, 202, 2, 'Double room with a view of the sea', 'double', 180, true, 1),
  createData(5, 301, 3, 'Suite with a view of the city', 'suite', 250, false, 1),
  createData(6, 302, 3, 'Suite with a view of the sea', 'suite', 300, false, 1),
];
