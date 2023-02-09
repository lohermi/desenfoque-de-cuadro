 function cambiar() {
            //Opción 1
            /* let grises = document.getElementById("rango").value
            let filtro = "grayscale("+grises+"%)"
            let opacidad = document.getElementById("opacidad").value
            document.getElementById("img1").style.filter=filtro
            document.getElementById("img1").style.opacity=opacidad+"%" */

            //Opción 2
            let grises = document.getElementById("rango").value
            let opacidad = document.getElementById("opacidad").value
            let mivariable = document.getElementById("blur").value
            let filtro = "grayscale(" + grises + "%) opacity(" + opacidad + "%) blur(" + mivariable + "px)"
            document.getElementById("img1").style.filter = filtro

            //Opción 3
            /* document.getElementById("img1").style.filter="grayscale("+document.getElementById("rango").value +
            "%) opacity(" + document.getElementById("opacidad").value + "%)"
            */

        }
        cambiar()