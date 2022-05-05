const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
})
.option('l', {
    alias: 'listar',
    demandOption: true,
    type: 'boolean',
    default:false
})
.option('h', {
    alias: 'hasta',
    demandOption: true,
    type: 'number',
    default:1
})
.check((argv, options) =>{
    if( isNaN(argv.base)){
        throw 'La base tiene que ser un número'
    }
    return true;
})
.argv;

module.exports = argv;