/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.querySelector("input");
const btn = document.querySelector("button");
const lengthP = document.getElementById("length");
const volumeP = document.getElementById("volume");
const massP = document.getElementById("mass");

btn.addEventListener("click", function () {
  const numToConvert = Number(input.value);
  const lengthObj = lengthConverter(numToConvert);
  const volumeObj = volumeConverter(numToConvert);
  const massObj = massConverter(numToConvert);
  lengthP.textContent = `${numToConvert} meters = ${lengthObj.feet} feet | ${numToConvert} feet = ${lengthObj.meters} meters`;
  volumeP.textContent = `${numToConvert} liters = ${volumeObj.gallons} gallons | ${numToConvert} gallons = ${volumeObj.liters} liters`;
  massP.textContent = `${numToConvert} kilos = ${massObj.pounds} pounds | ${numToConvert} pounds= ${massObj.kilos} kilos`;
});

function lengthConverter(num) {
  const feet = (num * 3.281).toFixed(3);
  const meters = (num / 3.281).toFixed(3);
  const lengthObj = { feet, meters };
  return lengthObj;
}

function volumeConverter(num) {
  const gallons = (num * 0.264).toFixed(3);
  const liters = (num / 0.264).toFixed(3);
  const volumeObj = { gallons, liters };
  return volumeObj;
}

function massConverter(num) {
  const pounds = (num * 2.204).toFixed(3);
  const kilos = (num / 2.204).toFixed(3);
  const massObj = { pounds, kilos };
  return massObj;
}
