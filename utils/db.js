// const mysql = require('mysql2')
// export const mysqlPool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'u5790065_csc350'
// })
const mysql = require('mysql2');

export const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'u5790065_csc350',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
  ssl: process.env.DB_SSL === 'true' ? { minVersion: 'TLSv1.2', rejectUnauthorized: true } : undefined,
});
