const os = require('os');

// info about current user
// console.log(os.userInfo());

// method returns the system uptime in secs
// console.log(`system uptime is ${os.uptime()} secs`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS);
