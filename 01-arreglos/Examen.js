"use strict";
exports.__esModule = true;
//const inquirer = require('inquirer');
var es6_promise_1 = require("es6-promise");
var fs = require("fs");
var rxjs = require('rxjs');
var mergemap = require('rxjs/operators').mergemap;
var map = require('rxjs/operators').map;
function main() {
    console.log('1) Busque los tipos de "gender" en el arreglo `people.json`');
    inicializarBase();
    console.log('2) Busque los tipos de "eye_color" en el arreglo `people.json`');
}
main();
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
    var leerBDD$ = rxjs.from(leerBDD());
    return leerBDD$
        .pipe(mergemap(function (respuestaLeerBDD) {
        if (respuestaLeerBDD.bdd) {
            // truty / {}
            return rxjs.of(respuestaLeerBDD);
        }
        else {
            // falsy / null
            //return rxjs.from(crearBDD())
            console.log('Error al leer la base de datos');
        }
    }));
}
function leerBDD() {
    return new es6_promise_1.Promise(function (resolve) {
        fs.readFile('people.json', 'utf-8', function (error, contenidoLeido) {
            if (error) {
                resolve({
                    mensaje: 'Base de datos vacia',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Lectura Correcta...',
                    bdd: contenidoLeido
                });
            }
        });
    });
}
