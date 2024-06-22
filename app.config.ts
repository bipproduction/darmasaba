const port = process.env.PORT || 3005;
const localhost = `http://localhost:${port}`;
const serverHost = 'https://wibu-server.wibudev.com';
const isLocal = process.env.NODE_ENV === 'development';
const waHost = "https://wa.wibudev.com";

const appConfig  = {
    host: isLocal ? localhost : serverHost,
    isLocal,
    port,
    waHost
}

export default appConfig