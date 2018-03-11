// class SmartCalculator {
//   constructor(initialValue) {
//     this.expression = "" + initialValue;
//   }

//   add(number) {
//     this.expression += " + " + number;
//     return this;
//   }

//   subtract(number) {
//     this.expression += " - " + number;
//     return this;
//   }

//   multiply(number) {
//     this.expression += " * " + number;
//     return this;
//   }

//   devide(number) {
//     this.expression += " / " + number;
//     return this;
//   }

//   pow(number) {
//     this.expression += " ** " + number;
//     return this;
//   }

//   valueOf(){
//     return eval(this.expression);
//   }
// }

// module.exports = SmartCalculator;

class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.initialExpression = '' + initialValue;
  }

  valueOf(){
    return this.value;
  }

  add(number) {
    this.initialExpression += '+' + number;
    this.value = eval(this.initialExpression);
    return this;
  }

  subtract(number) {
    this.initialExpression += '-' + number;
    this.value = eval(this.initialExpression);    
    return this;
  }

  multiply(number) {
    this.initialExpression += '*' + number;
    this.value = eval(this.initialExpression);
    return this;
  }

  devide(number) {
    this.initialExpression += '/' + number;
    this.value = eval(this.initialExpression);
    return this;
  }

  pow(number) { 
    this.initialExpression += '**' + number;
    this.value = eval(this.initialExpression);
    return this;
  }
}
module.exports = SmartCalculator;