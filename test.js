const Donat = require('./index');

const d = new Donat("1234");

var text = "Hello there"
var encrypted = d.encrypted(text)

var decrypted = d.decrypted(encrypted)


console.log({
    text: text,
    iv: d.iv.toString(),
    encrypted: encrypted,
    decrypted: decrypted
});