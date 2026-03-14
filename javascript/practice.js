const Cryptr = require('cryptr');
const cryptr = new Cryptr('donot@try!to_guess69'); // Secret key

// Function to encrypt a password
function encryptPassword(plainPassword) {
  try {
    const encryptedPassword = cryptr.encrypt(plainPassword);
    console.log('Plain Password:', plainPassword);
    console.log('Encrypted Password:', encryptedPassword);
    return encryptedPassword;
  } catch (error) {
    console.error('Error encrypting password:', error);
  }
}

// Example usage
const password = 'J3ffEng4ge21'; // Your plain password
encryptPassword(password);