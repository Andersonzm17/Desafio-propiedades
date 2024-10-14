/*const propiedades_venta = [
  {
      titulo: "Apartamento de lujo en zona exclusiva",
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      banos: 4,
      precio: 5000,
      fumar: false,
      mascotas: false,
      imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      tipo: "venta"
    },
    {
      titulo: "Apartamento acogedor en la montaña",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      direccion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      banos: 1,
      precio: 1200,
      fumar: true,
      mascotas: true,
      imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      tipo: "venta"
    },
    {
      titulo: "Penthouse de lujo con terraza panorámica",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      direccion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 4500,
      fumar: false,
      mascotas: true,
      imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      tipo: "venta"
    },
    {
        titulo: 'Casa campestre con hidropiscina',
        descripcion: 'Hermosa casa campestre con hidropiscina, que tiene vistas a la montaña, dispone de alojamiento con piscina al aire libre y patio a unos 38 km de Parque Acualago',
        direccion: 'Los Santos, Santander, Colombia',
        habitaciones: 4,
        baños: 2,
        precio: 7500,
        fumar: false,
        mascotas: true,
        imagen: "https://www.google.com/imgres?q=casa%20campestre&imgurl=https%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1280x900%2F425331810.jpg%3Fk%3Dcc320e82e69f87f4a96886a91ed808e761f8b65eb054bfc3f50ab0dcc681607d%26o%3D&imgrefurl=https%3A%2F%2Fwww.bedandbreakfast.eu%2Fes%2Fa%2FgvsES31fGTqJ%2Fhermosa-casa-campestre-con-hidropiscina&docid=nDZVLxjPZV21iM&tbnid=5UQvUMtbsOGwrM&vet=12ahUKEwiypozN_4iJAxUWIrkGHY_VJbgQM3oFCIABEAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwiypozN_4iJAxUWIrkGHY_VJbgQM3oFCIABEAA" ,
        
    },
   ];
const propiedades_alquiler = [
   {
      titulo: "Apartamento en el centro de la ciudad",
      descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      direccion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2000,
      fumar: false,
      mascotas: true,
      imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      tipo: "alquiler"
    },
    {
      titulo: "Apartamento luminoso con vista al mar",
      descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
      direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 2500,
      fumar: true,
      mascotas: true,
      imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tipo: "alquiler"
    },
    {
      titulo: "Condominio moderno en zona residencial",
      descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      direccion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2200,
      fumar: false,
      mascotas: false,
      imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      tipo: "alquiler"
    },
    {
      titulo: 'SANTA ANA SUITES',
      descripcion: 'HOME ESTUDIO exclusivos para el arriendo, con excelente ubicación cercano a plazas, pubs, restaurant, ciclovías',
      direccion: 'Rosas 1851, Santiago Centro',
      habitaciones: 0,
      banos: 2, 
      precio: 700,
      fumar: false,
      mascota: true,
      imagen: "https://constructorarupanco.com/wp-content/uploads/2021/12/cozy-living-room-interior-with-panoramic-window-1.jpg" ,
      },
      ];


  function mostrarPropiedades () {
    const paginaActual = window.location.pathname;
    const seccionVenta = document.getElementById('venta').querySelector('.row');
    const seccionAlquiler = document.getElementById('alquiler').querySelector('.row');
    if (seccionVenta) {
     
      let cont = 0;

    propiedades_venta.forEach( (enVenta) => {

        const propiedadVentaHtml = `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${enVenta.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${enVenta.titulo}
                </h5>
                <p class="card-text">
                  ${enVenta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  ${enVenta.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${enVenta.habitaciones}
                  <i class="fas fa-bath"></i> ${enVenta.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${enVenta.precio}</p>
                <p class="${enVenta.fumar ? "permitido" : "no-permitido"}">
                  <i class="fas fa-smoking-ban"></i> ${enVenta.fumar}
                </p>
                <p class="${enVenta.fumar ? "permitido" : "no-permitido"}">
                <i class="fas fa-smoking-ban"></i> ${
                  enVenta.fumar ? "Permitido fumar" : "No se permite fumar"
                }
              </p>
              < class="${enVenta.mascotas ? "permitido" : "no-permitido"}">
                <i class="fa-solid fa-ban"></i> ${
                  enVenta.mascotas
                    ? "Mascotas permitidas"
                    : "No se permiten mascotas"
                }
                </p>
              </div>
            </div>
          </div>
        `;

        if(propiedadActual.includes("propiedades_venta.html")) {
            seccionVenta.innerHTML += propiedadVentaHtml;
        } else if (paginaActual.includes("index.html") && cont < 3) {
            seccionVenta.innerHTML += propiedadVentaHtml;
        }
       cont++;
      });
    }
  }
  if (seccionAlquiler) {
    let cont = 0;
    propiedades_alquiler.forEach((enAlquiler) => {
      const propiedadAlquilerHtml = `  <
      div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="${enAlquiler.imagen}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title">
                ${enAlquiler.titulo}
              </h5>
              <p class="card-text">
                ${enAlquiler.descripcion}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> 
                ${enAlquiler.direccion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${enAlquiler.habitaciones} |
                <i class="fas fa-bath"></i> ${enAlquiler.banos}
              </p>
              <p><i class="fas fa-dollar-sign"></i>${enAlquiler.precio}</p>
              <p class="${enAlquiler.fumar ? "permitido" : "no-permitido"}">
              <i class="fas fa-smoking-ban"></i> ${
                enAlquiler.fumar ? "Permitido fumar" : "No se permite fumar"
              }
              </p>
              <p class="${enAlquiler.mascotas ? "permitido" : "no-permitido"}">
                <i class="fa-solid fa-ban"></i> ${
                  enAlquiler.mascotas
                    ? "Mascotas permitidas"
                    : "No se permiten mascotas"
                }
              </p>
            </div>
          </div>
        </> `

    })
  }



  document.addEventListener('DOMContentLoaded', mostrarPropiedades)





*/
const propiedades_venta = [
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4, // Corregido a 'banos'
    precio: 5000,
    fumar: false,
    mascotas: false,
    imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    tipo: "venta"
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    precio: 1200,
    fumar: true,
    mascotas: true,
    imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    tipo: "venta"
  },
  {
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 4500,
    fumar: false,
    mascotas: true,
    imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    tipo: "venta"
  },
  {
    titulo: 'Casa campestre con hidropiscina',
    descripcion: 'Hermosa casa campestre con hidropiscina, que tiene vistas a la montaña, dispone de alojamiento con piscina al aire libre y patio a unos 38 km de Parque Acualago',
    direccion: 'Los Santos, Santander, Colombia',
    habitaciones: 4,
    banos: 2,
    precio: 7500,
    fumar: false,
    mascotas: true,
    imagen: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/425331810.jpg?k=cc320e82e69f87f4a96886a91ed808e761f8b65eb054bfc3f50ab0dcc681607d&o="
  }
];

const propiedades_alquiler = [
  {
    titulo: "Apartamento en el centro de la ciudad",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2000,
    fumar: false,
    mascotas: true,
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    tipo: "alquiler"
  },
  {
    titulo: "Apartamento luminoso con vista al mar",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 2500,
    fumar: true,
    mascotas: true,
    imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tipo: "alquiler"
  },
  {
    titulo: "Condominio moderno en zona residencial",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2200,
    fumar: false,
    mascotas: false,
    imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    tipo: "alquiler"
  },
  {
    titulo: 'SANTA ANA SUITES',
    descripcion: 'HOME ESTUDIO exclusivos para el arriendo, con excelente ubicación cercano a plazas, pubs, restaurant, ciclovías',
    direccion: 'Rosas 1851, Santiago Centro',
    habitaciones: 0,
    banos: 2, 
    precio: 700,
    fumar: false,
    mascota: true,
    imagen: "https://constructorarupanco.com/wp-content/uploads/2021/12/cozy-living-room-interior-with-panoramic-window-1.jpg" ,
    },

];

function mostrarPropiedades() {
  const paginaActual = window.location.pathname;
  const seccionVenta = document.getElementById('venta')?.querySelector('.row');
  const seccionAlquiler = document.getElementById('alquiler')?.querySelector('.row');

  if (seccionVenta) {
    let cont = 0;
    propiedades_venta.forEach((enVenta) => {
      const propiedadVentaHtml = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="${enVenta.imagen}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title">${enVenta.titulo}</h5>
              <p class="card-text">${enVenta.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${enVenta.direccion}</p>
              <p><i class="fas fa-bed"></i> ${enVenta.habitaciones} <i class="fas fa-bath"></i> ${enVenta.banos}</p>
              <p><i class="fas fa-dollar-sign"></i> ${enVenta.precio}</p>
              <p class="${enVenta.fumar ? "permitido" : "no-permitido"}">
                <i class="fas fa-smoking-ban"></i> ${enVenta.fumar ? "Permitido fumar" : "No se permite fumar"}
              </p>
              <p class="${enVenta.mascotas ? "permitido" : "no-permitido"}">
                <i class="fa-solid fa-ban"></i> ${enVenta.mascotas ? "Mascotas permitidas" : "No se permiten mascotas"}
              </p>
            </div>
          </div>
        </div>
      `;
      if (paginaActual.includes("propiedades_ventas.html") || (paginaActual.includes("index.html") && cont < 3)) {
        seccionVenta.innerHTML += propiedadVentaHtml;
      }
      cont++;
    });
  }

  if (seccionAlquiler) {
    let cont = 0;

    propiedades_alquiler.forEach((enAlquiler) => {
      const propiedadAlquilerHtml = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="${enAlquiler.imagen}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title">${enAlquiler.titulo}</h5>
              <p class="card-text">${enAlquiler.descripcion}</p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${enAlquiler.direccion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${enAlquiler.habitaciones}
                <i class="fas fa-bath"></i> ${enAlquiler.banos}
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${enAlquiler.precio}</p>
              <p class="${enAlquiler.fumar ? "permitido" : "no-permitido"}">
                <i class="fas fa-smoking-ban"></i>
                ${enAlquiler.fumar ? "Permitido fumar" : "No se permite fumar"}
              </p>
              <p class="${enAlquiler.mascotas ? "permitido" : "no-permitido"}">
                <i class="fa-solid fa-ban"></i>
                ${enAlquiler.mascotas ? "Mascotas permitidas" : "No se permiten mascotas"}
              </p>
            </div>
          </div>
        </div>
      `;

      if (paginaActual.includes("propiedades_alquiler.html")) {
        seccionAlquiler.innerHTML += propiedadAlquilerHtml;
      } else if (paginaActual.includes("index.html") && cont < 3) {
        seccionAlquiler.innerHTML += propiedadAlquilerHtml;
        cont++;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', mostrarPropiedades);
