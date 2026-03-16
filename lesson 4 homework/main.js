class Calculator {
  constructor(x, y) {
    if (!this._isValid(x) || !this._isValid(y)) {
      throw new Error('x and y must be valid numbers!');
    }
    this.x = x;
    this.y = y;
  }

  _isValid(value) {
    return (
      typeof value === 'number' &&
      isFinite(value) &&
      !Number.isNaN(value)
    );
  }

  setX(newX) {
    if (!this._isValid(newX)) {
      throw new Error('Invalid value for x.');
    }
    this.x = newX;
  }

  setY(newY) {
    if (!this._isValid(newY)) {
      throw new Error('Invalid value for y.');
    }
    this.y = newY;
  }


  logSum = () => this.x + this.y

  logMul = () => this.x * this.y

  logSub = () => this.x - this.y
  
  logDiv = () => {
    if (this.y === 0) {
      throw new Error('Division by zero is forbidden!');
    }
    return this.x / this.y;
  }
}

