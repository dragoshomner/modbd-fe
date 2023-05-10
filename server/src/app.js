import express from 'express';
import chalk from 'chalk';
import { handleError } from './routes/middleware.js';
import oracledb from 'oracledb';
import { SequelizeService } from "./config/db.js";
import { countryRouter } from './routes/country.js';
import { cityRouter } from './routes/city.js';
import { addressRouter } from './routes/address.js';
import { hotelRouter } from './routes/hotel.js';
import { jobRouter } from './routes/job.js';
import { employeeRouter } from './routes/employee.js';
import { roomRouter } from './routes/room.js';
import { rezervationRouter } from './routes/rezervation.js';
import cors from 'cors'
import { clientRouter } from './routes/client.js';
// const today = new Date();
// console.log(today.toISOString());


const app = express();

app.use(express.json());
app.use(cors());

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


// SequelizeService.getEUInstance().sync()
//   .then(() => {
//     console.log('Database sync successful!');
//   })
//   .catch((error) => {
//     console.error('Database sync error:', error);
//   });

  app.get('/health', (req, res) => {
    res.send({
      message: 'Up and running'
    })
  });
  


app.use('/api/countries', countryRouter);
app.use('/api/cities', cityRouter);
app.use('/api/addresses', addressRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/employees', employeeRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/rezervations', rezervationRouter);
app.use('/api/clients', clientRouter);

app.use(handleError);

const connectionParams = {
  user: 'modbd_regional_user',
  password: 'modbdpw',
  connectString: 'localhost/modbd_global'
};

// oracledb.getConnection(connectionParams, (err, connection) => {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log('Connected to Oracle database!');
//   connection.execute(
//     "SELECT * FROM COUNTRIES_EU",
//     (err, result) => {
//       if (err) {
//         console.error(err.message);
//         return;
//       }
//       console.log(result);
//     }
//   );
// });

app.listen(4200, (err) => {
  err && console.error(err);
  console.log(chalk.magenta(`Server started on port`), chalk.yellow(4200));
});