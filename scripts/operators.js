let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function isHit() {
  let randomNumber = Math.random();
  return randomNumber > 0.5;
  
    // should return true if a randomly generated number is greater than .5, false if it is less than .5
}
  
function shipCanFire() {
    return shipAmmo > 0 && shipHealth > 0;
    // return true if the ships health is above 0 AND ammo is above 0 false otherwise
}
function isDestroyed(health) {
    return health <= 0;
    // return true if health is zero or less
}
function reloadShip() {
    shipHealth--;
    shipAmmo +=3;
    // reduce ship health by 1 and increase ammo by 3
}



function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

encounter();