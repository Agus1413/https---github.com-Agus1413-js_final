var peticion = new XMLHttpRequest();
peticion.open("GET", "./productos.json", true);
var total = 0;
var contador = 0;

peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(this.responseText);
        console.log(productos);
        var total = 0;
        var contador = 0;

        productos.forEach(p => {
            var casillas = document.createElement("div");
            // div.appendChild(casillas) // div no existe
            var link = document.createElement('a');
            link.setAttribute('href', '#');
            link.innerText = p.nombre;
            var imagen = document.createElement("img");
            imagen.setAttribute("alt", "imagen producto");
            imagen.setAttribute("src", p.url_foto)
            var descripcion = document.createElement("p");
            descripcion.innerText = p.descripcion
            var precio = document.createElement("p");
            precio.innerText = p.precio;
            casillas.appendChild(link);
            casillas.appendChild(imagen);
            casillas.appendChild(descripcion);
            casillas.appendChild(precio);
            document.querySelector(".productos").appendChild(casillas);

            link.addEventListener("click", function () {
                console.log(p.nombre, p.precio);
                total = total + p.precio;
                console.log("total: ", total);

            });

            link.addEventListener("click", function () {
                console.log(p.nombre, p.precio);
                total = total + p.precio
                console.log("total: ", total);

                //crear fila
                var fila = document.createElement("th")
                var tdNombre = document.createElement("td")
                tdNombre.innerText = p.nombre;
                var tdPrecio = document.createElement("td")
                tdPrecio.innerText = p.precio;
                fila.appendChild(tdNombre);
                fila.appendChild(tdPrecio)

                var tdBorrar = document.createElement("th");
                var linkBorrar = document.createElement("a");
                linkBorrar.setAttribute("href", "#");
                linkBorrar.innerText = "X"
                tdBorrar.appendChild(linkBorrar);
                fila.appendChild(tdBorrar);
                document.querySelector("body").appendChild(fila)

                linkBorrar.addEventListener("click", function(event){
                    console.log(event.target.parentElement.parentElement.remove())
                    total = total - p.precio
                    console.log("total: ", total)
                })

            });
            document.querySelector(".productos").appendChild(link);
        });
    }
});

peticion.send();

var buttonCaro = document.querySelector ("#Caro");

    buttonCaro.addEventListener("click", function () {
    var productosCarritos = document.querySelector(".carrito").children;

    for (let index = 0; index < productosCarritos.length; index++) {
        const productoRow = productosCarritos[index];

        let productoNombre = productoRow.children[0].innerText;
        let productoPrecio = productoRow.children[1].innerText;
        console.log(productoNombre, productoPrecio);
    }
    console.log("el producto mas caro es; TV",)
});
