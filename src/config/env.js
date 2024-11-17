require('dotenv').config(); // Carga las variables de entorno
const { get } = require('env-var');

// Definición del objeto `envs`
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
};

// Exporta `envs`
module.exports = {
    envs,
};
