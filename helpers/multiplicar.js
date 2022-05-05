const fs = require('fs');
var colors = require('colors');
const crearArchivo = async (base = 5, listar = true, hasta = 1) =>{
    try{
    let salida= '';
for(let i=1;  i<= hasta; i++){
    salida += `${ base } x ${i} = ${base*i} \n`; 
}

if (listar){
    console.log('tablaaaaaaaaaaaaa'.trap)
console.log(salida.rainbow)
}

fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    //if (err) throw err;
    //console.log(`tabla-${base}.txt creado`)
  
    return `tabla-${base}.txt`;

}catch(err){
    throw err;
}
}

module.exports = {
    crearArchivo
}