// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  let absValue = Math.abs(distance - 42);
  return absValue;

}

function distanceFromHqInFeet(feetd){
  let feetDistance = distanceFromHqInBlocks(feetd)*264;
  return feetDistance;

}

function distanceTravelledInFeet(street1,street2){
  let travelled = Math.abs(street2 - street1)*264;
  return travelled;

}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start,destination);
  let fee;
  if (distance < 400){
    fee = 0;
  }else if (distance > 400 && distance < 2000){
    fee = (distance - 400) * 0.02;
  }else if (distance > 2000 && distance < 2500){
    fee = 25;
  }else if (distance > 2500){
    fee = 'cannot travel that far';
  }
  return fee;
}
