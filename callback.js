let datosUsuario={
    usuario:"johanamoreno",
    password:"123456"

}

//declarar (decir que hace) la funcion principal
//llamo a mi funcion secundaria o callback

function conectarConNetflix(datos,generarRespuestaCallback){
    
    console.log("Procesando peticion...")
    setTimeout(function(){

        if (datos.usuario=="johanamoreno" && datos.password=="123456"){
            
            generarRespuestaCallback(200,"Bienvenido a netflix")


        }else{
            generarRespuestaCallback(204,"No estas registrado, suscribete..")
        }

    },5000)    
    
}
//utilizar la funcion principal
// declaro lo que hace el callback
conectarConNetflix(datosUsuario,function(codigo,mensaje){

    if(codigo==200){
        console.log(mensaje)
        console.log("Cargando Peliculas") 
            
        }else{
            console.log(mensaje)
        }
    
})

