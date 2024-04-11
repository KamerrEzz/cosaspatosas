import crypto from "crypto"

// Genera una clave segura de 32 bytes. Recuerda almacenar esta clave de forma segura y reutilizarla entre reinicios de la aplicación.
const SECRET_KEY = "5vFUK3BovAEbnN5ireLbUp9bpChoEXGR" || crypto.randomBytes(32);
const ALGORITHM = 'aes-256-ctr';

// Asegúrate de guardar la clave generada de manera segura para su uso futuro
console.log("Clave segura generada:", SECRET_KEY.toString('hex'));

// Función para cifrar el token
function cifrar(texto) {
    if (SECRET_KEY.length !== 32) {
        throw new Error('La longitud de la clave debe ser de 32 caracteres.');
      }

    const iv = crypto.randomBytes(16); // AES utiliza un IV de 16 bytes
    const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);
    let encrypted = cipher.update(texto, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}

// Función para descifrar el token
function descifrar(textoCifrado) {
    const textParts = textoCifrado.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Uso del ejemplo
const token = 'la wea cosmica';
const tokenCifrado = cifrar(token);
console.log('Token cifrado:', tokenCifrado);

const tokenDescifrado = descifrar(tokenCifrado);
console.log('Token descifrado:', tokenDescifrado);