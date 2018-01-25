
class Matrix{

  constructor(rows, columns){

      this.rows = rows;
      this.cols = columns;
      this.data = [];

      for(var i = 0; i < this.rows; i++){
        this.data[i] = [];
        for(var j = 0; j < this.cols; j++){
          this.data[i][j] = [];
        }
      }

  }

  transpose(){

    let result = new Matrix(this.cols, this.rows);

    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++){
        result.data[j][i] = this.data[i][j];
      }
    }

    return result;

  }

  static mult(m1, m2){

    if(m1.cols != m2.rows){
      console.log('Columns of A do not match rows of B.');
      return undefined;
    }
    let a = m1;
    let b = m2;

    let result = new Matrix(a.rows, b.cols);


    for(let i = 0; i < result.rows; i++){
      for(let j = 0; j < result.cols; j++){
        let sum = 0;
        for(let k = 0; k < a.cols; k++){

          sum += a.data[i][k] * b.data[k][j];

        }
        result.data[i][j] = sum;
      }
    }

    return result;

  }

  mult(n){

    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++){
        this.data[i][j] *= n;
      }
    }
  }

 map(func){
    // Apply a function to every element of the matrix
    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++){
        let val = this.data[i][j];
        this.data[i][j] = func(val);
      }
    }
  }

  static fromArray(input_array){

    let m = new Matrix(input_array.length, 1);
    for(let i = 0; i < input_array.length; i++){

      m.data[i][0] = input_array[i];

    }

    return m;

  }

  toArray(){
      let arr = [];
      for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.cols; j++){
              arr.push(this.data[i][j]);
            }
      }
      return arr;

  }


  randomize(){

    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++){
        this.data[i][j] = Math.random() * 2 - 1;
      }
    }

  }

  add(n){

    if(n instanceof Matrix){
      for(var i = 0; i < this.rows; i++){
        for(var j = 0; j < this.cols; j++){
          this.data[i][j] += n.data[i][j];
        }
      }
    } else {

      for(var i = 0; i < this.rows; i++){
        for(var j = 0; j < this.cols; j++){
          this.data[i][j] += n;
        }
      }
    }
  }

  print(){

    console.table(this.data);

  }
}
