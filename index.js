var crypto = require("crypto");

module.exports = class Dotan {
    constructor(password, algorithm = "aes-192-cbc") {
        this.algorithm = algorithm;
        this.iv = crypto.scryptSync("just shut up LOL", 'salt', 16);
        this.password = password
    }

    getKey() {
        return crypto.scryptSync(this.password, 'salt', 24);
    }

    getKeyHex(){
        return this.getKey().toString("hex")
    }

    getKeyBufferFromHex(key){
        return Buffer.from(key, "hex")
    }

    getKeyBase64(){
        return this.getKey().toString("base64")
    }

    getKeyBufferFromBase64(key){
        return Buffer.from(key, "base64")
    }

    encrypted(text) {
        const cipher = crypto.createCipheriv(
            this.algorithm,
            this.getKey(),
            this.iv
        );
        return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    }

    decrypted(data_encrypted) {
        const decipher = crypto.createDecipheriv(
            this.algorithm,
            this.getKey(),
            this.iv
        );
        return decipher.update(data_encrypted, 'hex', 'utf8') + decipher.final('utf8'); //deciphered text
    }
}
