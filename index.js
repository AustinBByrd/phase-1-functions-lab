function distanceFromHqInBlocks (distance) {
    
    if (distance<42){
      return(42-distance);
    }
    else {
        return(distance-42);
    }
}

function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance)*264;
    
}

function distanceTravelledInFeet(a,b){
    if (b>a){
      return((b-a)*264);
    }
    else
      return((a-b)*264);
}

function calculatesFarePrice(start,destination){
    let driveDistance = distanceTravelledInFeet(start,destination);
    if (driveDistance<= 400){
      return 0;
    }
    if (driveDistance>=400 && driveDistance<=2000){
      return (driveDistance-400)* 0.02;
    }
    else if(driveDistance>=2000&& driveDistance<=2500){
      return 25;
    }
    else if (driveDistance > 2500){
      return "cannot travel that far";
    }
  }
