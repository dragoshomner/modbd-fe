const createData = (id, name, address, start_date, birth_date, nationality, hotel_id, job_id) => 
  ({ id, name, address, start_date, birth_date, nationality, hotel_id, job_id });

export const rows = [
  createData(1, 'John Doe', '123 Main St', '2022-05-10', '1990-01-01', 'USA', 1, 1),
  createData(2, 'Jane Smith', '456 Oak Ave', '2022-05-11', '1995-05-15', 'Canada', 2, 2),
  createData(3, 'Bob Johnson', '789 Pine Rd', '2022-05-12', '1985-08-20', 'Mexico', 3, 3),
  createData(4, 'Alice Lee', '321 Elm St', '2022-05-13', '2000-12-31', 'China', 1, 2),
  createData(5, 'Mike Chen', '654 Maple Dr', '2022-05-14', '1998-03-10', 'Taiwan', 2, 3),
];
