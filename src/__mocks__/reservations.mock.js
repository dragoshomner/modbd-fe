const createData = (id, check_in_date, check_out_date, created_at, room_id, client_id) => 
  ({ id, check_in_date, check_out_date, created_at, room_id, client_id });

export const rows = [
  createData(1, '2022-01-10', '2022-01-14', '2022-01-09', 1, 1),
  createData(2, '2022-02-01', '2022-02-05', '2022-01-30', 2, 3),
  createData(3, '2022-03-15', '2022-03-18', '2022-03-14', 3, 2),
  createData(4, '2022-05-20', '2022-05-23', '2022-05-19', 2, 1),
  createData(5, '2022-06-05', '2022-06-09', '2022-06-04', 4, 3),
  createData(6, '2022-07-12', '2022-07-16', '2022-07-11', 1, 4),
  createData(7, '2022-09-01', '2022-09-03', '2022-08-31', 3, 1),
  createData(8, '2022-10-10', '2022-10-15', '2022-10-09', 1, 2),
  createData(9, '2022-11-20', '2022-11-24', '2022-11-19', 4, 3),
];
