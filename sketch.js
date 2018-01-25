function setup() {

 let nn = new NeuralNetwork(2, 2, 1);

 let input = new Matrix(2,1);

 let output = nn.feedforward([1,0]);
 console.log(output);
} 

