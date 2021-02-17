class TransportSpaceship extends Spaceship {
  constructor(name, pax, type, passengerLimit) {
    super(name, pax, type)
    this.passengerLimit = passengerLimit
  }
}