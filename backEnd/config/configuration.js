var PORT=3030;
let APP_MODE="LOCAL"
let HOST=APP_MODE=="PRODUCTION"?"https://domain.com":"http://localhost:"

module.exports={
    PORT:PORT,
    HOST:HOST,
    APP_MODE:APP_MODE
}