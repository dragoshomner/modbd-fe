const createData = (id, name, department_name, salary) => 
  ({ id, name, department_name, salary });

export const rows = [
  createData(1, 'Manager', 'Management', 50000),
  createData(2, 'Receptionist', 'Front Desk', 30000),
  createData(3, 'Housekeeper', 'Housekeeping', 25000),
  createData(4, 'Cook', 'Kitchen', 35000),
  createData(5, 'Waiter/Waitress', 'Restaurant', 20000)
];
