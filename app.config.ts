const port = process.env.PORT || 3005;
const localhost = `http://localhost:${port}`;
const serverHost = `http://localhost:${port}`;
const isLocal = process.env.NODE_ENV === 'development';
const waHost = "https://wa.wibudev.com";

const appConfig  = {
    host: isLocal ? localhost : serverHost,
    isLocal,
    port,
    waHost
}

export default appConfig