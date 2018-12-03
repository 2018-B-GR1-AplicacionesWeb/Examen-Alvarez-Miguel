"use strict";
exports.__esModule = true;
//const inquirer = require('inquirer');
var es6_promise_1 = require("es6-promise");
var fs = require("fs");
var rxjs = require('rxjs');
var mergemap = require('rxjs/operators').mergemap;
var map = require('rxjs/operators').map;
var peopleJson = 'people.json';
function leerBDD(nombreArchivo) {
    return new es6_promise_1.Promise(function (resolve, reject) {
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
    return new es6_promise_1.Promise(function (resolve) {
        leerBDD(peopleJson)
            .then(function (content) {
            var respuesta = content;
            resolve(respuesta);
        })["catch"](function (resultadoError) {
            console.log('Algo malo paso', resultadoError);
        });
    });
}
consultasDatos().then(function (cont) {
    console.log('\n1) Busque los tipos de "gender" en el arreglo `people.json`');
    var datosJSON = JSON.parse(cont.toString());
    datosJSON.map(function (valor) {
        return valor.gender;
    }).forEach(function (elementoLeido) { return console.log(elementoLeido); });
});
consultasDatos().then(function (cont) {
    console.log('\n2) Busque los tipos de "eye_color" en el arreglo `people.json`');
    var datosJSON = JSON.parse(cont.toString());
    datosJSON.map(function (valor) {
        return valor.eye_color;
    }).forEach(function (elementoLeido) { return console.log(elementoLeido); });
});
consultasDatos().then(function (cont) {
    console.log('\n3) Busque los tipos de "skin_color" en el arreglo `people.json`');
    var datosJSON = JSON.parse(cont);
    datosJSON.map(function (valor) {
        return valor.skin_color;
    }).forEach(function (elementoLeido) { return console.log(elementoLeido); });
});
consultasDatos().then(function (cont) {
    console.log('\n4) Busque los tipos de "hair_color" en el arreglo `people.json`');
    var datosJSON = JSON.parse(cont);
    datosJSON.map(function (valor) {
        return valor.hair_color;
    }).forEach(function (elementoLeido) { return console.log(elementoLeido); });
});
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
