'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
let discos = [];

//Contador de discos cargados.
let contDiscos = 0;

// Función Mostrar:
// const Mostrar = () => {
//     // Variable para ir armando la cadena:
//     let html = '';

//     // Cositas:

//     // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
//     document.getElementById('info').innerHTML = html; // <--- ahí es acá
// };

//Creamos la clase pista, que conteiene el nombre y la duracion de cada cancion del disco.
class Pista {
    #nombre;
    #duracion;

    constructor(nombre, duracion) {
        this.#nombre = nombre;
        this.#duracion = duracion;
    }

    set setNombre(nombre) {
        if (isNaN(nombre)) {
            this.#nombre = nombre;
        }
    }

    set setDuracion(duracion) {
        if (isNaN(duracion)) {
            this.#duracion = duracion;
        }
    }

    get getNombre() {
        return this.#nombre;
    }
    get getDuracion() {
        return this.#duracion;
    }
}

//Creamos la clase disco, que va a contener las propiedades del mismo.
class Disco {
    #nombre;
    #autor;
    #codigo;
    #pistas;

    constructor(nombre, autor, codigo, pistas) {
        this.#nombre = nombre;
        this.#autor = autor;
        this.#codigo = codigo;
        this.#pistas = pistas;
    }

    set setNombre(nombre) {
        if (isNaN(nombre)) {
            this.#nombre = nombre;
        }
    }

    set setAutor(autor) {
        if (isNaN(autor)) {
            this.#autor = autor;
        }
    }

    set setCodigo(codigo) {
        if (!isNaN(codigo)) {
            this.#codigo = codigo;
        }
    }

    set setPistas(pistas) {
        if (isNaN(pistas)) {
            this.#pistas = pistas;
        }
    }

    get getNombre() {
        return this.#nombre;
    }

    get getAutor() {
        return this.#autor;
    }

    get getCodigo() {
        return this.#codigo;
    }

    get getPistas() {
        return this.#pistas;
    }

}

//Creamos la funcion que valida el nombre del disco
function cargarNombre() {
    let nombre;
    do {
        nombre = prompt("Ingrese el nombre del disco, por favor.");

        if (nombre == "") {
            alert("Error, ha ingresado el campo vacio.");
        }
    } while (!(nombre != ""));
    return nombre;
}

//Creamos la funcion que valida el nombre del autor del disco
function cargarAutor() {
    let autor;
    do {
        autor = prompt("Ingrese el nombre del autor del disco, por favor.");
    } while (!(autor != ""));
    return autor;
}

//Creamos la funcion que valida el codigo del disco
function cargarCodigo() {
    let codigo;
    let auxCodigo = false;
    do {
        do {
            codigo = parseInt(prompt("Ingrese el código del disco, por favor."));

            if (discos.length > 0) {
                for (let auxCod in discos) {
                    if (discos[auxCod].getCodigo == codigo) {
                        alert("Error, el código del disco ya existe. Vuelva a ingresar otro nuevamente.");
                    }
                    else {
                        auxCodigo = true;
                    }
                }
            }
            else {
                auxCodigo = true;
            }

        } while (!auxCodigo);

        if (!(codigo >= 1 && codigo <= 999) && isNaN(codigo)) {
            alert("Error, ha ingresado un codigo invalido.");
        }

    } while (!(codigo >= 1 && codigo <= 999) && isNaN(codigo));
    return codigo;
}

//Creamos la funcion que carga las canciones del disco.
function cargarPistas() {
    let pista;
    let duracion;
    let auxDuracion = false;
    let pistas = [];

    do {

        do {
            pista = prompt("Ingrese el nombre de la pista del disco, por favor.");
        } while (!(pista != ""));

        do {
            do {
                duracion = parseInt(prompt("Ingrese la duración de la pista del disco, por favor. (Es en segundos: 0 - 7200)"));

                if (duracion >= 0 && duracion <= 7200) {
                    auxDuracion = true;
                }
                else {
                    alert("Error, ha ingresado una duración invalida.");
                }

            } while (!auxDuracion)


        } while (isNaN(duracion));
        pistas.push(new Pista(pista, duracion));


    } while (confirm("Quiere ingresar otra pista?"));
    return pistas;
}

//La constante que crea el objeto Disco
const Cargar = () => {

    let nombre = cargarNombre();
    let autor = cargarAutor();
    let codigo = cargarCodigo();
    let pista = cargarPistas();


    discos.push(new Disco(nombre, autor, codigo, pista));
    contDiscos++;
    alert(`La cantidad de discos ingresados hasta el momento es: ${contDiscos}.`);
};


//Funcion que busca el disco por codigo.
function BuscarDisco() {
    let codigo;
    let auxCodigo = false;
    do {
        codigo = parseInt(prompt("Ingrese el codigo del disco que quiere buscar."));
        if (!(codigo >= 1 && codigo <= 999) && isNaN(codigo)) {
            alert("Error, ingrese solo numeros.");
        }
    } while (!(codigo >= 1 && codigo <= 999))

    if (discos.length > 0) {
        

        for (let auxCod in discos) {
            if (discos[auxCod].getCodigo == codigo) {
                let h22 = document.createElement("h2");
                h22.innerText = ("Buscador de discos");
                let div = document.getElementById("discoBuscado");
                let h2 = document.createElement("h2");

                h2.innerText = (`El disco fue encontrado! Es: ${discos[auxCod].getNombre}.`);
                auxCodigo = true;
                div.append(h22, h2);
                let menu = document.getElementById("barra");
                menu.setAttribute("style", "visibility: hidden;");
                let limpiar = document.getElementById("limpiar");
                limpiar.setAttribute("style", "visibility: visible;");

            }
            
        }
        if (!auxCodigo) {
            alert("Error, no fue encontrado el disco.");
        }
    }
    else {
        alert("Error, no se ha ingresado ningun disco, por lo tanto no se puede buscar ningun codigo.");
    }
}

//Muestra los datos del disco.
function MostrarDatosDeDiscos() {
    let contPistas = 0;
    let acumDuracion = 0;
    let mayor = Number.NEGATIVE_INFINITY;
   
    if (discos.length > 0) {
        let pistaMayorTodosLosDiscos;

        for (let a in discos) {
            let pistaMayor;
            let div = document.getElementById("datosDeColoresDiscos");
            let acumDuracionTxt = document.createElement("h3");
            let contPistasTxt = document.createElement("h3");
            let contPistasMayorTxt = document.createElement("h3");
            let h22 = document.createElement("h2");
            h22.innerText = ("Datos de los discos");
            div.append(h22);
            for (let b in discos[a].getPistas) {
                contPistas++;
                acumDuracion += discos[a].getPistas[b].getDuracion;

                if (discos[a].getPistas[b].getDuracion > mayor) {
                    mayor = discos[a].getPistas[b].getDuracion;
                    pistaMayor = discos[a].getPistas[b].getNombre;
                    pistaMayorTodosLosDiscos = discos[a].getPistas[b].getNombre;
                }
            }
            acumDuracionTxt.innerText = (`La cantidad de pistas que tiene el disco ${discos[a].getNombre} con una duracion total de ${acumDuracion}s. y es de ${contPistas} pista/s.`);
            contPistasTxt.innerText = (`El promedio de duracion del disco ${discos[a].getNombre} es de: ${acumDuracion / contPistas}s.`);
            contPistasMayorTxt.innerText = (`La pista con mayor duracion es ${pistaMayor} con una duracion de ${mayor}.`);

            div.append(acumDuracionTxt, contPistasTxt, contPistasMayorTxt);

            mayor = 0;
            pistaMayor = "";
            contPistas = 0;
            acumDuracion = 0;
        }
        let pistaMayor = document.createElement("h3");
        pistaMayor.innerText = (`La pista con la duracion mas larga de todos los discos es: ${pistaMayorTodosLosDiscos}.`);
        div.append(pistaMayor);

    }
    else {
        alert("Error, no se ha ingresado ningun disco, por lo tanto no se pueden mostrar datos.");
    }

    let menu = document.getElementById("barra");
        menu.setAttribute("style", "visibility: hidden;");
        let limpiar = document.getElementById("limpiar");
        limpiar.setAttribute("style", "visibility: visible;");
        
}

function MostrarDatosDeDiscoEspecifico() {
    let auxCodigo = false;

    let codigo;
    do {
        codigo = parseInt(prompt("Ingrese el codigo del disco que quiere buscar."));

        if (!(codigo >= 1 && codigo <= 999)) {
            alert("Error, ingrese solo numeros.");
        }
    } while (!(codigo >= 1 && codigo <= 999) && isNaN(codigo))

    if (discos.length > 0) {
        let div = document.getElementById("discoBuscadoInfo");
        let ul = document.getElementById("ulBuscadoInfo");
        let nombreDisco = document.createElement("h2");
        let nombreAutor = document.createElement("h2");
        let codigoh2 = document.createElement("h2");
        let h22 = document.createElement("h2");
        h22.innerText = ("Datos del disco especifico.");
        div.append(h22);
        for (let auxCod in discos) {
            nombreDisco.innerText = (`${discos[auxCod].getNombre}`);
            nombreAutor.innerText = (`${discos[auxCod].getAutor}`);
            codigoh2.innerText = (`${discos[auxCod].getCodigo}`);
            
            if (discos[auxCod].getCodigo == codigo) {
                
                nombreDisco.innerText = (`Nombre del disco: ${discos[auxCod].getNombre}.`);
                nombreAutor.innerText = (`Autor: ${discos[auxCod].getAutor}.`);
                codigoh2.innerText = (`Codigo: ${discos[auxCod].getCodigo}.`);

                for (let b in discos[auxCod].getPistas) {
                    let li = document.createElement("li");
                    if (discos[auxCod].getPistas[b].getDuracion > 180) 
                    {
                        li.innerText = (`Nombre: ${discos[auxCod].getPistas[b].getNombre}, Duracion: ${discos[auxCod].getPistas[b].getDuracion}`);
                        li.setAttribute("style", "color:red;")
                     }
                     else
                     {
                        li.innerText = (`Nombre: ${discos[auxCod].getPistas[b].getNombre}, Duracion: ${discos[auxCod].getPistas[b].getDuracion}`);
                     }
                     ul.append(li);
                }
                div.append(nombreDisco, nombreAutor, codigoh2, ul)
            }
            auxCodigo = true;
            let menu = document.getElementById("barra");
            menu.setAttribute("style", "visibility: hidden;");
            let limpiar = document.getElementById("limpiar");
            limpiar.setAttribute("style", "visibility: visible;");
        }
        if (!auxCodigo) {
            alert("Error, no se ha encontrado ningun disco.");
        }
    }
    else {
        alert("Error, no se ha ingresado ningun disco, por lo tanto no se puede buscar ningun codigo.");
    }
}

function Mostrar() {

    let div = document.getElementById("discos");

    if (discos.length > 0) {

        for (let a in discos) {
            let h22 = document.createElement("h2");
            h22.innerText = ("Discos");
            let ul = document.createElement("ul");
            let nombreDisco = document.createElement("h2");
            let nombreAutor = document.createElement("h2");
            let codigo = document.createElement("h2");
            nombreDisco.innerText = (`Nombre del disco: ${discos[a].getNombre}`);
            nombreAutor.innerText = (`Autor del disco: ${discos[a].getAutor}`);
            codigo.innerText = (`Codigo del disco: ${discos[a].getCodigo}`);
            div.append(h22);
            for (let b in discos[a].getPistas) {
                let li = document.createElement("li");
                if (discos[a].getPistas[b].getDuracion > 180) 
                {
                    li.innerText = (`Nombre: ${discos[a].getPistas[b].getNombre}, Duracion: ${discos[a].getPistas[b].getDuracion}`);
                    li.setAttribute("style", "color:red;")
                 }
                 else
                 {
                    li.innerText = (`Nombre: ${discos[a].getPistas[b].getNombre}, Duracion: ${discos[a].getPistas[b].getDuracion}`);
                 }
                 ul.append(li);
            }

            div.append(nombreDisco, nombreAutor, codigo, ul);
            
        }
        let menu = document.getElementById("barra");
        menu.setAttribute("style", "visibility: hidden;");
        let limpiar = document.getElementById("limpiar");
        limpiar.setAttribute("style", "visibility: visible;");
    }
    else {
        alert("Error, no se ha ingresado ningun disco, por lo tanto no se pueden mostrar datos.");
    }

}

function AbrirMenu() {
    let menu = document.getElementById("barra");
    menu.setAttribute("style", "visibility: visible;");
}


let button = document.getElementById("limpiar");
button.addEventListener("click", () => {
    
    let div = document.getElementById("discos")
    let div2 = document.getElementById("discoBuscadoInfo")
    let div3 = document.getElementById("discoBuscado")

    div.innerHTML = "";
    div2.innerHTML = "";
    div3.innerHTML = "";
    button.setAttribute("style", "visibility: hidden");
}
)