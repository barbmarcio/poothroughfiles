class App {
  constructor() {
    this.selectedSpaceship = null
  }

  start() {
    this.spaceshipSelect() 
    this.menuMain()    
  }

  menuMain(spaceshipName) {
    let chosenOption
    do {
      chosenOption  = prompt('Welcome to ' + spaceshipName + 'What are we going to do?' +
                             '\n1 - XLR8' + 
                             '\n2 - Change the spaceship' +
                             '\n3 - Print details and exit')
      this.menuMainSelected(chosenOption)  
    } while (chosenOption != 3);
    this.printAndExit()
  }

  menuMainSelected(chosenOption) {
    if (chosenOption == 1) {
      if (this.selectedSpaceship.isHitched = true)
        this.selectedSpaceship.spaceshipLift()
      this.selectedSpaceship.spaceshipSpeedUp()
    }   
    else if (chosenOption == 2)
      this.start();   
  }

  menuType(spaceshipName) {
    let chosenType = ''
    do {
      chosenType = prompt('What is the type of ' + spaceshipName + '?' + 
                          '\n1 - Battleship' +
                          '\n2 - Transportship')
    } while (chosenType == '')

    return chosenType
  }

  spaceshipCreate() {
    let howMany
    let newSpaceship
    let pName = prompt('Please enter the Spaceship name')
    let pPax  = prompt('How many tripulants are in ' + pName + '?')
    let pType = this.menuType(pName);
    switch(pType) {
      case "1":
        howMany = prompt('How many weapons are attached to ' + pName + '?')
        newSpaceship = new BattleSpaceship(pName, pPax, pType, howMany)  
        break
      case "2":
        howMany = prompt('How many passengers can travel in ' + pName + '?')
        newSpaceship = new TransportSpaceship(pName, pPax, pType, howMany)
        break
    }

    return newSpaceship
  }

  spaceshipSelect() {
    this.selectedSpaceship = this.spaceshipCreate()
    this.selectedSpaceship.spaceshipHitch()
  }  

  printAndExit() {
    alert('The ' + this.selectedSpaceship.name + ' have stopped' +
          '\nCurrent status:' +
          '\nPAX: ' + this.selectedSpaceship.pax +
          '\nCurrent Speed: ' + this.selectedSpaceship.currentSpeed + ' km/s.')    
  }
}

