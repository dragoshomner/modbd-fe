const createData = (id, name, email, phone_number, premium_guest, membership_points) => 
  ({ id, name, email, phone_number, premium_guest, membership_points });

export const rows = [
  createData(1, 'John Smith', 'john@example.com', '555-1234', true, 100),
  createData(2, 'Jane Doe', 'jane@example.com', '555-5678', false, 50),
  createData(3, 'Bob Johnson', 'bob@example.com', '555-9012', false, 20),
  createData(4, 'Sara Lee', 'sara@example.com', '555-3456', true, 150),
];
