//抓包https://gw.nevapp.gtmc.com.cn/ha/iam/api/sec/oauth/token响应体的encryptData填到data里

const $ = new Env("广汽丰田token转换")
const CryptoJS = require("crypto-js");
let data = ''
function decrypt(data, key, iv) {
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    var decrypted = CryptoJS.AES.decrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    var decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
}
let body = decrypt(data , "ajgekbmgfkasefqk", "cd1d955be8e4c11a");
console.log('token:'+body.body.accessToken);
console.log('refreshToken:'+body.body.refreshToken);
