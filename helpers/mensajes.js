require("colors");

const mostrarMenu = () => {

  return new Promise((resolve) => {
    console.clear();
    console.log("===========================".green);
    console.log("     Elige una opcion".green);
    console.log("===========================\n".green);
  
    console.log(`${"1.".random} Crear tarea`);
    console.log(`${"2.".random} Listar tareas`);
    console.log(`${"3.".random} Listar tareas completadas`);
    console.log(`${"4.".random} Listar tareas pendientes`);
    console.log(`${"5.".random} Completar tarea(s)`);
    console.log(`${"6.".random} Borrar tarea`);
    console.log(`${"0.".random} Salir`);
  
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question("Seleccione una opcion: ", (opt) => {      
      readline.close();
      resolve( opt );
    });
    
  })
};
const pausa = () => {

  return new Promise((resolve) => {
    
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question(`\nPresione ${"Enter".green} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });

  })
};

module.exports = { mostrarMenu, pausa };
