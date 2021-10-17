var kaina = parseInt(prompt("Parašyk skaičių"));
if(isNaN(kaina)) {
  alert('Neteisingai');
} else {
  var pvm = kaina * 0.21;
  var suma = kaina + pvm;
  console.log("Kaina be pvm: " + kaina + "€" + ", kaina su pvm: " + suma);
}
