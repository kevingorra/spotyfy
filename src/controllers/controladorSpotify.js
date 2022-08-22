//receta para consumir 

// 1.pa onde vas ome
//uri del api

const URI ='https://api.spotify.com/v1/artists/1Oa0bMld0A3u5OTYfMzp5h/top-tracks?market=US'

//2 a hacer que ome 
// Metodos
const PETICION = {
    method:'GET',
    headers: {
        Authorization:'Bearer BQCZpTcI2k8V1TJSBWybywffd19x-IENOf0AGGkJ6Uw9qe9flj2aV6Ui5sBFVNqMWz0H5HCYeOrVMizUCJl5VceRzasq_C-e-eHKodwdDXArEcJknaJ03jRife9VJhOaBarw4maGMX0cM3IAXBewDiQ1RSvm8r0hoER3Wx2-7DMoHkgRtmJY5DYIHXX1IUd5v2g'

    } 
}

//3 andate pues ome
// consuma el api utilizando promesas

fetch(URI,PETICION)
.then(function(respuesta) {
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuestaError){
    console.log(respuestaError)
})