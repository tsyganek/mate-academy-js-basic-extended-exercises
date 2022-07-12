function makeDecision(fuelRemaining, distance, fuelConsumption) {
  if (fuelRemaining < 0 || distance < 0 || fuelConsumption <= 0) {
    console.log("a");
    return "please, enter the valid data";
  }

  if (fuelRemaining >= (distance * fuelConsumption) / 100) {
    console.log("b");
    return "reach gas station by themselves";
  }

  console.log("c");
  return "ask for help";
}

makeDecision(3, 34, 6.5);
makeDecision(0, 34, 6.5);
makeDecision(-2, -30, 0);
