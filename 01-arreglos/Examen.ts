//const inquirer = require('inquirer');
import {Promise} from 'es6-promise'
const fs = require("fs");
const rxjs = require('rxjs')
const mergemap = require('rxjs/operators').mergemap;
const map = require('rxjs/operators').map;
const peopleJson = 'people.json';

function leerBDD(nombreArchivo) {
    return new Promise(function (resolve, reject) {
        fs.readFile(nombreArchivo, 'utf-8', function (error, content) {
            if (error) {
                reject('\n\tError al leer el archivo JSON');
            }
            else {
                resolve(content);
            }
        });
    });
}

function consultasDatos() {
    return new Promise(function (resolve) {
        leerBDD(peopleJson)
            .then(function (content) {
                const respuesta = content;
                resolve(respuesta);
            })
            .catch(function (resultadoError) {
                console.log('Algo malo paso', resultadoError);
            });
    });
}

consultasDatos().then(
    function (cont) {
        console.log('\n1) Busque los tipos de "gender" en el arreglo `people.json`');
        const datosJSON = JSON.parse(cont.toString());
        datosJSON.map(
            (valor)=>{
                return valor.gender;
            }
        ).forEach(
            (elementoLeido) => console.log(elementoLeido)
        );
    }
)


consultasDatos().then(
    function (cont) {
        console.log('\n2) Busque los tipos de "eye_color" en el arreglo `people.json`');
        const datosJSON = JSON.parse(cont.toString());
        datosJSON.map(
            (valor)=>{
                return valor.eye_color;
            }
        ).forEach(
            (elementoLeido) => console.log(elementoLeido)
        );
    }
)

consultasDatos().then(
    function (cont) {
        console.log('\n3) Busque los tipos de "skin_color" en el arreglo `people.json`');
        const datosJSON = JSON.parse(cont.toString());
        datosJSON.map(
            (valor)=>{
                return valor.skin_color;
            }
        ).forEach(
            (elementoLeido) => console.log(elementoLeido)
        );
    }
)

consultasDatos().then(
    function (cont) {
        console.log('\n4) Busque los tipos de "hair_color" en el arreglo `people.json`');
        const datosJSON = JSON.parse(cont.toString());
        datosJSON.map(
            (valor)=>{
                return valor.hair_color;
            }
        ).forEach(
            (elementoLeido) => console.log(elementoLeido)
        );
    }
)




function inicializarBase() {

    /*const leerBDD$ = rxjs.from(leerBDD());

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
*/
}




interface RespuestaBDD {
    mensaje: string,
    bdd: string
}

