
const propiedades_venta = [
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento moderno con vista a la montaña',
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        descripcion: 'Este encantador apartamento cuenta con una hermosa vista a las montañas y está ubicado en una zona tranquila y apacible.',
        ubicacion: '123 Mountain View Drive, Mountain Town, CA 90123',
        habitaciones: 2,
        costo: 1800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa familiar con jardín amplio',
        src: 'https://images.unsplash.com/photo-1584373746051-3aa2b0c2715a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        descripcion: 'Esta hermosa casa familiar ofrece un amplio jardín ideal para disfrutar de actividades al aire libre y pasar tiempo en familia.',
        ubicacion: '789 Green Street, Suburbia, CA 34567',
        habitaciones: 4,
        costo: 3500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento con terraza y vista panorámica',
        src: 'https://images.unsplash.com/photo-1556926595-9a73215de6a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        descripcion: 'Este encantador apartamento cuenta con una amplia terraza y ofrece una vista panorámica de la ciudad.',
        ubicacion: '456 Skyline Avenue, Cityscape, CA 67890',
        habitaciones: 2,
        costo: 2800,
        smoke: true,
        pets: true
    }
];


function renderizarPropiedadesVenta() {
    const contenedorHTML = document.getElementById('propiedades_venta');
    contenedorHTML.innerHTML = ''; 
    propiedades_venta.slice(0, 3).forEach(propiedad => {
        contenedorHTML.innerHTML += generarPropiedadHTML(propiedad);
    });
}


renderizarPropiedadesVenta();
