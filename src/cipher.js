//Cipher object
const cipher = {
  encode: (offset, message) => {
    //For each character we will obtain the ascii code
    //and according to the offset it will be encoded as in the ceaser cipher
    let msg = "";
    for (let i = 0; i < message.length; i++) {
      let textCode = message.charCodeAt(i);
      if (textCode >= 65 && textCode <= 90) {
        msg += String.fromCharCode(((textCode - 65 + offset) % 26) + 65);
        document.getElementById("pizarraC1").innerHTML = msg;
      } else if (textCode >= 97 && textCode <= 122) {
        msg += String.fromCharCode(((textCode - 97 + offset) % 26) + 97);
        document.getElementById("pizarraC1").innerHTML = msg;
      } else if (textCode == 32) {
        msg += " ";
      }
    }
    return msg;
  },
  decode: (offset, message) => {
    //In the same way to decode we will do the opposite steps as in encode
    let msg = "";
    for (let i = 0; i < message.length; i++) {
      let textCode = message.charCodeAt(i);
      if (textCode >= 65 && textCode <= 90) {
        msg += String.fromCharCode(((textCode - 65 - offset) % 26) + 65);
        document.getElementById("pizarraC2").innerHTML = msg;
      } else if (textCode >= 97 && textCode <= 122) {
        msg += String.fromCharCode(((textCode - 97 - offset) % 26) + 97);
        document.getElementById("pizarraC2").innerHTML = msg;
      } else if (textCode == 32) {
        msg += " ";
      }
    }
    return msg;
  },
};
export default cipher;
