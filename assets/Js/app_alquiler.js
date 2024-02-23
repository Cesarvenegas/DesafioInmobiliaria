
const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa rústica en las afueras',
        src: 'https://images.unsplash.com/photo-1583772806650-3d48e2c81dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        descripcion: 'Esta encantadora casa rústica está ubicada en un entorno tranquilo y natural, perfecto para aquellos que buscan escapar del bullicio de la ciudad.',
        ubicacion: '123 Rural Lane, Countryside, CA 12345',
        habitaciones: 3,
        costo: 3200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento moderno en el centro',
        src: 'https://images.unsplash.com/photo-1520250497598-f6a08eb6468a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        descripcion: 'Este moderno apartamento se encuentra en el corazón de la ciudad, rodeado de tiendas, restaurantes y vida nocturna.',
        ubicacion: '789 Urban Street, Downtown, CA 56789',
        habitaciones: 1,
        costo: 2000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Piso luminoso con vistas al parque',
        src: 'https://images.unsplash.com/photo-1562570866-618f64383c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        descripcion: 'Este espacioso piso ofrece abundante luz natural y hermosas vistas al parque cercano, perfecto para familias y amantes de la naturaleza.',
        ubicacion: '101 Parkside Avenue, Greenfield, CA 34567',
        habitaciones: 3,
        costo: 2800,
        smoke: false,
        pets: true
    }
    
];


function generarPropiedadesHTML(propiedades) {
    let html = '';
    for (let propiedad of propiedades) {
        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"><i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
                        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"><i class="fas fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
                    </div>
                </div>
            </div>
        `;
    }
    return html;
}


function renderizarPropiedadesAlquiler() {
    const contenedorHTML = document.getElementById('propiedades_alquiler');
    contenedorHTML.innerHTML = generarPropiedadesHTML(propiedades_alquiler);
}


renderizarPropiedadesAlquiler();
