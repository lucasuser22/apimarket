import {createPool} from 'mysql2/promise'
import {DB_HOST,DB_DATABASE,DB_USER,DB_PASSWORD,DB_PORT} from './config.js'

export const pool= createPool({
    host:'mysql.railway.internal',
    user:'root',
    password:'QTzhsdaeEMiZAjppjHdokxKxayrXKdQU',
    port:'3306',
    database:'railway'
})

