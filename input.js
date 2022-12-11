let connection;

// setup interface to handle user input from stdin

const { connect } = require("./client");

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (key) {
  // u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
    }
  
  //binding keys
  if (key === 'w') {
    connection.write("Move: up");
    }

  if (key === 'a') {
    connection.write("Move: left");
    }    

  if (key === 's') {
    connection.write("Move: down");
    }

  if (key === 'd') {
    connection.write("Move: right");
    }
};

module.exports = {
  setupInput,
}