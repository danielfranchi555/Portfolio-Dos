import ecommerce from '../src/img/ecommerce-dos.png'
import crud from '../src/img/crud-dos.png'
import chat from '../src/img/chat-dos.png'
import movie from '../src/img/movie-app-dos.png'
import clima from '../src/img/app-clima-dos.png'

 const proyectos = [
    {
         id: 1,
         img:ecommerce,
         title:"Ecommerce",
         description:'App Ecommerce utilizando como Base de Datos Firebase',
         link:'https://ecommerce-vite.vercel.app/',
         Code:'https://github.com/danielfranchi555/Ecommerce-Vite.git'
       },
       {
        id:2,
         img:crud,
         title:"Crud-Firebase",
         description:'Este proyecto es una aplicación web que utiliza React y Firebase Firestore como Base de Datos para Insertar, Actualizar y Eliminar productos',
         link:'https://crud-firebase-six.vercel.app/',
         Code:'https://github.com/danielfranchi555/Crud-Firebase.git'
       },
     
      {
         "id":"3",
         "img": chat,
         "title":"Movies-App",
         description:'App de peliculas con Authentication de Auth0 para el inicio de Sesion y consumiendo la Api de TMDB para mostrar el trailer y detalle de cada pelicula',
         link:'https://tmdb-api-theta.vercel.app/',
         Code:'https://github.com/danielfranchi555/danielfranchi555-App-Movies.git'


       },
       {
        "id":"4",
         "img":movie,
         "title":"Chat-App",description:'App creada con Vite utilizando firebase como Base De Datos y Authentication',
         link:'https://tmdb-api-theta.vercel.app/',
         Code:'https://github.com/danielfranchi555/danielfranchi555-App-Movies.git'

       },
       {
        "id":"5",
         "img":clima,
         "title":"App-Wheater",
         description:'Aplicacion consumiendo la Api de OpenWheater paramostar los datos de la ciudad ingresada por el usuario',
         link:' https://danielfranchi555.github.io/App-Weather/',
         Code:'https://github.com/danielfranchi555/App-Weather.git'
       }
 
 ]

export default proyectos