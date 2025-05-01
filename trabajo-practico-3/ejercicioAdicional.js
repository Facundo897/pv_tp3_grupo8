//Ejercicio Adicional
const productos = [
    { descripcion: "Auriculares", precio: 49000.99 },
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 90000 },
    { descripcion: "Cámara Web", precio: 35000 },
    { descripcion: "Mouse Pad", precio: 11990 },
    { descripcion: "Microfono", precio: 20000 }
];

//1 Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio: $[precio]", usando forEach.
console.log("------1.Lista de productos: ------");
productos.forEach (producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
});

//2 - Crear un nuevo array con los productos cuyo precio sea mayor a $20.000, usando filter.
const productosFiltrados = productos.filter(producto => producto.precio > 20000);
console.log("------2.Productos con precio mayor a $20.000: ------");
productosFiltrados.forEach (producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
});

//3 - Crear un array con los productos, pero con el precio con IVA incluido (21%), usando map.
const productosConIVA = productos.map(producto => {
    return {
        descripcion: producto.descripcion,
        precio: (producto.precio * 1.21).toFixed(2)
    };
});
console.log("------3.Productos con IVA incluido:------");
productosConIVA.forEach (producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
});

