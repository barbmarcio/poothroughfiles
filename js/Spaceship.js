class Spaceship {
  static get deaccelerationRate() {
    return 0.17
  }

  constructor(name, pax, type) {
    this.name         = name
    this.pax          = pax
    this.type         = type
    this.isHitched    = false
    this.isDoorOpened = false
    this.currentSpeed = 0
  }

  spaceshipHitch() {
    alert('Hitching the spaceship')
    this.isHitched    = true
    this.isDoorOpened = true
  }

  spaceshipLift() {
    alert('Lifting the spaceship')
    this.isHitched    = false
    this.isDoorOpened = false
  }

  spaceshipSpeedUp() {
    let wannago = Number(prompt('How much do you want to accelerate?'))
    if (wannago > 0) {
      this.currentSpeed += wannago * (1 - Spaceship.deaccelerationRate) 
      alert('You are now by ' + this.currentSpeed + ' km/s.')
    }
  }  
}