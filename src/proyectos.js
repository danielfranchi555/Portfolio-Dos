import ecommerce from '../src/img/ecommerce.png'
import crud from '../src/img/crud-firebase.png'
import chat from '../src/img/chat-app.png'
import movie from '../src/img/tmdb-api.png'
import clima from '../src/img/app-weather.png'

 const proyectos = [
    {
         id: 1,
         img:ecommerce,
         title:"Ecommerce-Firebase",
         description:'App Ecommerce utilizando como Base de Datos Firebase-Firestore',
         link:'https://ecommerce-vite.vercel.app/',
         Code:'https://github.com/danielfranchi555/Ecommerce-Vite.git'
       },
       {
        id:2,
         img:crud,
         title:"Crud-Firebase",
         description:'Crud para Agregar,Eliminar y Editar datos utilizando firebase-firestore como base de datos',
         link:'https://crud-firebase-six.vercel.app/',
         Code:'https://github.com/danielfranchi555/Crud-Firebase.git'
       },
     
      {
         "id":"3",
         "img":movie,
         "title":"Movies-App",
         description:'Aplicacion de Peliculas donde podras filtrar y seleccionar la pelicula que quieras con su detalle',
         link:'https://tmdb-api-theta.vercel.app/',
         Code:'https://github.com/danielfranchi555/TMDB-API.git'


       },
       {
        "id":"4",
         "img":chat,
         "title":"Chat-App",
         description:'App creada para simular un chat en tiempo real utilizando firestore y la authentication de firebase',
         link:'https://chat-app-liart-phi.vercel.app/',
         Code:'https://github.com/danielfranchi555/Chat-App.git'

       },
       {
        "id":"5",
         "img":clima,
         "title":"App-Wheater",
         description:'App que devuelve el clima de la ciudad ingresada por el usuario',
         link:' https://danielfranchi555.github.io/App-Weather/',
         Code:'https://github.com/danielfranchi555/App-Weather.git'
       }
 
 ]

export default proyectos