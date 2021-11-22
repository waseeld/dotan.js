const Dotan = require('./index');
const crypto = require('crypto');
const hash = crypto.createHash("sha256");

function sha256(msg){
    return hash.update(msg, "utf-8").digest('hex');
}

const pubKey = sha256("This is Silly pas$word1");
var dotan = new Dotan(pubKey);

console.log("password hash we use:", pubKey);

const msg = "Any Message LOL";
var encryptedMsg = dotan.encrypted(msg);
console.log("encrypted:", encryptedMsg);

var decryptedMsg = dotan.decrypted(encryptedMsg);
console.log("decrypted:", decryptedMsg);

var key = dotan.getKeyHex();
console.log("key:", key);

var toBuffer = dotan.getKeyBufferFromHex(key);
console.log("Buffer:", toBuffer);

// password hash we use: eb29f0bfa86db05bc3d1b7367ae6bad91945a3579498004e399f1ebd6b4a7b9d
// encrypted: dd86260269c476d89bc4b9a98c6e7d0b
// decrypted: Any Message LOL
// key: 6016f0cb0c4c649ccc18192cd22ef3217eef43eaa052bf87
// Buffer: <Buffer 60 16 f0 cb 0c 4c 64 9c cc 18 19 2c d2 2e f3 21 7e ef 43 ea a0 52 bf 87>
