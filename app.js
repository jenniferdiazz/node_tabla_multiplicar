
//const { argv } = require('process');
//const { option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
//const base = 8;
console.clear();
//console.log(process.argv);
console.log(argv);
/**
 * [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\jennifer.diaz.zavala\\Desktop\\node\\02-bases-node\\app',
  --base=5    

]
 */

// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log("base");
// console.log(base);
crearArchivo(argv.base, argv.listar, argv.hasta)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));
