const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // connection handler that prints message when connected
  conn.on("connect", (connect) => {
    console.log('Successfully connected to game server');
  });
  
  
  conn.on("connect", (connect) => {
    conn.write("Name: @MM");
    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 50);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100);
  });

  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });
  
  return conn;
};

module.exports = {
  connect,
};