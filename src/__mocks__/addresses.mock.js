const createData = (id, street, number, postal_code, notes, city_id) => 
  ({ id, street, number, postal_code, notes, city_id });

export const rows = [
  createData(1, 'Main St', '123', '12345', 'Near the park', 1),
  createData(2, 'Oak Ave', '456', '67890', 'Close to the river', 2),
  createData(3, 'Elm St', '789', '54321', 'Corner of Elm and 5th', 3),
  createData(4, 'Maple Dr', '10', '98765', 'Apartment 3B', 4),
  createData(5, 'Cedar St', '22', '45678', 'Suite 200', 5),
];
