const cipher = {
  encode: function(offset1, mensaje) {
      let msj = "";
      for (let i=0; i< mensaje.length; i++){
          let codigotexto = mensaje.charCodeAt(i);
          if (codigotexto>= 65 && codigotexto <= 90){
              msj += String.fromCharCode(((codigotexto-65 + offset1)%26)+65);
              document.getElementById("pizarraC1").innerHTML = msj;
          } else if (codigotexto>=97 && codigotexto<=122){
             msj += String.fromCharCode(((codigotexto-97 + offset1)%26)+97);
             document.getElementById("pizarraC1").innerHTML = msj;
          } else if(codigotexto == 32){
            msj += " ";
          }
 
      }
      console.log(msj); 
 
    // let mensaje = Array;
    // let valor1 = txt1.value;
     //let indice1 = valor1.length;
     //let offset1= parseInt(document.getElementById("offset1").value);
      //for (let i = 0; i< indice1; i++){
        // mensaje = mensaje.push( String.fromCharCode((valor1.charCodeAt(i)-65 +offset1)%26 +65));
 //}  
   //console.log(mensaje);
  },
   
  decode: function(offset2, mensaje2){
    let msj2 = "";
    for(let i = 0; i<mensaje2.length ; i++){
        let codigotexto2 = mensaje2.charCodeAt(i);
        if(codigotexto2>= 65 && codigotexto2 <=90){
          msj2 += String.fromCharCode(((codigotexto2-65 - offset2)%26)+65);
          document.getElementById("pizarraC2").innerHTML = msj2;
        }else if  (codigotexto2>=97 && codigotexto2<=122){
         msj2 += String.fromCharCode(((codigotexto2-97 - offset2)%26)+97);
         document.getElementById("pizarraC2").innerHTML = msj2;
        }else if (codigotexto2 == 32){
         msj2 += " ";
        }
    }console.log(msj2);
  }
  }
 ;
 
 export default cipher;