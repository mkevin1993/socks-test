const SocksClient = require('socks').SocksClient;

const options = {
    proxy: {
      host: '10.0.5.5', // ipv4 or ipv6 or hostname
      port: 1080,
      type: 5 // Proxy version (4 or 5)
    },
  
    command: 'connect', // SOCKS command (createConnection factory function only supports the connect command)
  
    destination: {
      host: '192.168.0.140', // github.com (hostname lookups are supported with SOCKS v4a and 5)
      port: 21000
    }
  };
  
  // Async/Await
  try {
    const info = await SocksClient.createConnection(options);
  
    console.log(info.socket);
    // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)
  } catch (err) {
    // Handle errors
  }
  
  // Promises
  SocksClient.createConnection(options)
  .then(info => {
    console.log(info.socket);
    // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)
  })
  .catch(err => {
    // Handle errors
  });
  
  // Callbacks
  SocksClient.createConnection(options, (err, info) => {
    if (!err) {
      console.log(info.socket);
      // <Socket ...>  (this is a raw net.Socket that is established to the destination host through the given proxy server)
    } else {
      // Handle errors
    }
  });