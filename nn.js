function sigmoid(x){
  return 1/ (1 + Math.exp(-x));
}


class NeuralNetwork {

  constructor(num_inp, num_hid, num_out){
    this.input_nodes = num_inp;
    this.hidden_nodes = num_hid;
    this.output_nodes = num_out;

    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);

    this.weights_ih.randomize();
    this.weights_ho.randomize();

    this.bias_h = new Matrix(this.hidden_nodes, 1);
    this.bias_o = new Matrix(this.output_nodes, 1);
    this.bias_h.randomize();
    this.bias_o.randomize();
  }

  feedforward(input_array){

    let inputs = Matrix.fromArray(input_array);
    let hidden = Matrix.mult(this.weights_ih, inputs);
    hidden.add(this.bias_h);

    // Activation function
    hidden.map(sigmoid);

    let output = Matrix.mult(this.weights_ho, hidden);
    output.add(this.bias_o);
    output.map(sigmoid);

    return output.toArray();
  }

  train(inputs, targets){
      let outputs = this.feedforward(inputs);
      outputs = Matrix.fromArray(outputs);
      targets = Matrix.fromArray(targets);
      
      let output_errors = Matrix.subtract(targets,outputs);
      
      let weights_ho_trans = Matrix.transpose(this.weights_ho);
      let hidden_errors = Matrix.mult(weights_ho_trans, output_errors); 


      //targets.print();
      //outputs.print();
      //error.print();
      
  }
}
