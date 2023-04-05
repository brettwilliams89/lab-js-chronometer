class Chronometer {
  constructor() {
    this.currentTime = 0; // sets current time to 0
    this.intervalId = null; // sets intervalId to null
  }

  start(printTimeCallback) {
    this.intervalId =  setInterval( () => { // creates timer that runs a callback function
      this.currentTime++; // is incrementing the currentTime property of the Chronometer.
      if(printTimeCallback){ // sets condition if printTimeCallBack is called, return the value
        printTimeCallback()
      }   
    }, 1000 ) // set interval to 1 sec
  }

  getMinutes() {
    let count = this.currentTime / 60 // takes the current time and divides by 60 to get minutes
    let minuteCount = Math.floor(count); // rounds to nearest integer
    return minuteCount;
  }

  getSeconds() {
    if (this.currentTime === 0) { // sets condition if current time === 0, return 0.
      return 0;
    } else {
      return this.currentTime % 60;//sets condition if current time is other than 0, % 60 to get seconds value.
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) { // sets condition if value is less than 10, return "0" and add the vlaue behind as a string.
      return "0" + value;
    } else {
      return value.toString();//returns value and converts to a string for anything  = or greater than 10
    }
  }
  

  stop() {
    return clearInterval(this.intervalId); //uses clearInterval to cancel timer set by setInterval
  }

  reset() {
    return this.currentTime= 0; //resets time to this current time
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}
