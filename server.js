const app = require("./app");

const PORT = process.env.PORT || 8080; // Cambiar a 8080 si Fly.io te proporciona este puerto
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

