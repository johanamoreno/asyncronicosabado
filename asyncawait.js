let datosUsuario={
    usuario:"johanamoreno",
    password:"123456"

}

function conectarConNetflix(datos){
    
    console.log("Procesando peticion...")

    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){

            if (datos.usuario=="johanamoreno" && datos.password=="123456"){
                
                resolve("Bienvenido a netflix")
            }else{
                reject("No estas registrado, suscribete..")
            }
    
        },5000)

    })
    return promesa;
}

async function procesarPeticion(datosUsuario){
    
    try{

        let respuesta= await conectarConNetflix(datosUsuario);
        console.log(respuesta)

    }catch(error){
        console.log(error)
    }

}

procesarPeticion(datosUsuario);