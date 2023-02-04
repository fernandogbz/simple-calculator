class Display { 
  constructor(displayLastValue, displayCurrentValue) { 
    this.displayLastValue = displayLastValue; 
    this.displayCurrentValue = displayCurrentValue; 
    this.calculator = new Calculator(); 
    this.operationType = undefined;
    this.currentValue = ''; 
    this.lastValue = '';
    this.signs = {
      add: '+',
      subtract: '-',
      multiply: 'x',
      divide: '÷'
    }
  }

  delete() {
    this.currentValue = this.currentValue.toString().slice(0,-1);
    this.printValues();
  }

  deleteAll() {
    this.currentValue = '';
    this.lastValue = '';
    this.operationType = undefined;
    this.printValues();
  }

  compute(type) {
    this.operationType !== 'equal' && this.calculate();
    this.operationType = type;
    this.lastValue = this.currentValue || this.lastValue;
    this.currentValue = '';
    this.printValues();
  }

  addNumber(number) {
    if(number === '.' && this.currentValue.includes('.')) return
    this.currentValue = this.currentValue.toString() + number.toString(); 
    this.printValues(); 
  }

  printValues() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayLastValue.textContent = `${this.lastValue}
    ${this.signs[this.operationType] || ''}`;
  }

  calculate() {
    const lastValue = parseFloat(this.lastValue);
    const currentValue = parseFloat(this.currentValue);

    if(isNaN(currentValue) || isNaN(lastValue)) return
    this.currentValue = this.calculator[this.operationType](lastValue, currentValue).toString();
  }
}