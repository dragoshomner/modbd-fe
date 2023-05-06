const createData = (id, name, description, rating, address_id) => 
  ({ id, name, description, rating, address_id });

export const rows = [
  createData(1, 'Hotel A', 'A cozy hotel in the heart of the city', 4.5, 1),
  createData(2, 'Hotel B', 'A luxurious hotel with ocean views', 4.8, 4),
  createData(3, 'Hotel C', 'A budget hotel near the airport', 3.2, 2),
  createData(4, 'Hotel D', 'A family-friendly hotel with a pool', 4.2, 5),
  createData(5, 'Hotel E', 'An eco-friendly hotel in a secluded area', 4.9, 3),
];
