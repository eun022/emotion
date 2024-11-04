import { DotPad } from "../static/DotPad_Class.js"
let myDotPad = new DotPad();


document.getElementById("connectbutton").addEventListener("click", onConnectButtonClick, false);
document.getElementById("disconnectbutton").addEventListener("click", onDisconnectButtonClick, false);







//document.getElementById("ch0").addEventListener("click", onchoButtonClick, false);

/*
document.getElementById("Button_pie1").addEventListener("click", function () { generate(0) }, false);
document.getElementById("Button_chart1").addEventListener("click", function () { generate(1) }, false);
document.getElementById("Button_chart2").addEventListener("click", function () { generate(2) }, false);
document.getElementById("Button_chart3").addEventListener("click", function () { generate(3) }, false);
window.addEventListener("load", preload_image_and_jsons, false);
*/



async function onConnectButtonClick() {
  try {
    console.log('Requesting Bluetooth Device...');
    //console.log('with ' + JSON.stringify(options));
    myDotPad.connect();

  } catch (error) {
    console.log('> Error:' + error);
  }
}

async function onDisconnectButtonClick() {
  try {
    myDotPad.disconnect();
  }
  catch (error) {
    console.log('> Error:' + error);
  }
}





function hexa(a) {
  let b = parseInt(a, 2);
  b = b.toString(16);
  return b;
}


function trans_hex_pad(a) {
  let trans_list = '';
  const J = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36];
  for (let j of J) {

    let s = '';
    let ss = '';
    for (let i = 0; i < a[0].length - 1; i += 2) {
      s = '' + a[j + 3][i] + a[j + 2][i] + a[j + 1][i] + a[j][i];
      ss = '' + a[j + 3][i + 1] + a[j + 2][i + 1] + a[j + 1][i + 1] + a[j][i + 1];

      trans_list += hexa(ss) + hexa(s);
    }

  }
  return trans_list;
}





























function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function performGattOperation() {
  return new Promise((resolve, reject) => {
    // Perform the actual GATT operation here
    // For demonstration purposes, you can resolve the promise after a simulated delay
    setTimeout(() => {
      resolve(); // Resolve the promise to indicate the completion of the GATT operation
    }, 2700); // Simulated delay of 1 second (adjust as needed)
  });
}





