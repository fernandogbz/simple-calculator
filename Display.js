class Display { 
  constructor(displayLastValue, displayCurrentValue) { 
    this.displayLastValue = displayLastValue; 
    this.displayCurrentValue = displayCurrentValue; 
    this.calculator = new Calculator(); 
    this.currentValue = ''; 
    this.lastValue = '';
  }
  
  addNumber(number) { 
    this.currentValue = number; 
  } 
}