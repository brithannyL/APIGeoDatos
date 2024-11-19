import {config}from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || 'bupxyf250mwo1hivecjk-mysql.services.clever-cloud.com'
export const BD_DATABASE=process.env.BD_DATABASE|| 'bupxyf250mwo1hivecjk'
export const DB_USER=process.env.DB_USER|| 'uaq66gbuo19ko5uy'
export const DB_PASSWORD=process.env.DB_PASSWORD||'ZyqdE8QVwAsWgNNMWGrW'
export const DB_PORT=process.env.DB_PORT|| 3306
export const PORT= process.env.PORT|| 3000