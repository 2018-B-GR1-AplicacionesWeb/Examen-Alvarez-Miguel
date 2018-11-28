//const inquirer = require('inquirer');
import {Promise} from 'es6-promise'
const fs = require("fs");
const rxjs = require('rxjs')
const mergemap = require('rxjs/operators').mergemap;
const map = require('rxjs/operators').map;




function main(){
    console.log('1) Busque los tipos de "gender" en el arreglo `people.json`')

    inicializarBase().pipe();
    console.log('2) Busque los tipos de "eye_color" en el arreglo `people.json`')
}

main()
/*function leerArchivoJSON(){
    const leerBDD$ = rxjs.from(leerBDD());

    return leerBDD$
        .pipe(
            mergeMap(
                (respuestaLeerBDD: RespuestaBDD) => {
                    if (respuestaLeerBDD.bdd) {
                        // truty / {}
                        return rxjs.of(respuestaLeerBDD)
                    } else {
                        // falsy / null
                        return rxjs.from(crearBDD())
                    }
                }
            )
        );
}*/

function inicializarBase() {

    const leerBDD$ = rxjs.from(leerBDD());

    return leerBDD$
        .pipe(
            map(
                (respuestaLeerBDD: RespuestaBDD) => {
                    if (respuestaLeerBDD.bdd) {
                        // truty / {}
                        return rxjs.of(respuestaLeerBDD)
                    } else {
                        // falsy / null
                        //return rxjs.from(crearBDD())
                        console.log('Error al leer la base de datos')

                    }
                }
            )
        );

}


function leerBDD(){
    return new Promise(
        (resolve) => {
            fs.readFile(
                'people.json',
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        resolve({
                            mensaje: 'Base de datos vacia',
                            bdd: null

                        });
                    } else {
                        resolve({
                            mensaje: 'Lectura Correcta...',
                            bdd: contenidoLeido,


                        });
                    }

                }
            );
        }

    );
}

interface RespuestaBDD {
    mensaje: string,
    bdd: string
}