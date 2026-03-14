const Cryptr = require('cryptr');
const cryptr = new Cryptr('donot@try!to_guess69'); // Your secret key

// Function to test encryption and decryption
function testEncryptDecrypt(plainPassword) {
  try {
    // Encrypt the password
    const encryptedPassword = cryptr.encrypt(plainPassword);
    console.log('Plain Password:', plainPassword);
    console.log('Encrypted Password:', encryptedPassword);

    // Decrypt the password
    const decryptedPassword = cryptr.decrypt(encryptedPassword);
    console.log('Decrypted Password:', decryptedPassword);

    // Verify if decryption matches original
    if (decryptedPassword === plainPassword) {
      console.log('Success: Decrypted password matches original!');
    } else {
      console.log('Error: Decrypted password does not match original!');
    }
  } catch (error) {
    console.error('Error during encryption/decryption:', error.message);
  }
}

// Example usage
const password = 'J3ffEng4ge21'; // Test password
// const password = 'Cappuccino.fling-2459055'; // Test password
testEncryptDecrypt(password);