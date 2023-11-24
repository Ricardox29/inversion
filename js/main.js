
function inversion(){

    //1. ocultar la imagen y mostrar el panel con los datos de la simulacion
    const preCont = document.querySelector(".pre-simulation");
    const postCont = document.querySelector(".post-simulation");


    postCont.classList.remove("disabled");
    preCont.classList.add("disabled");

    //2. Capturamos y mostramois los datos que no se calculan

    const campoNombres = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const nombreShow = document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show");

    nombreShow.innerText =campoNombres;
    emailShow.innerText = campoEmail;


    //3. Capturamos los datos de inversion y tiempo, creamos las variables de ganaciaas y ganacias total

    const inversion = document.getElementById("inversion").value;
    const tiempo = document.getElementById("tiempo").value;
    const gananciaShow = document.getElementById("total-show");
    const totalshow = document.getElementById("ganancia-show");
    const tiempoShow = document.getElementById("tiempo-show");
    const interesShow =document.getElementById("interes-show")
    let ganancia = 0;
    let gananciaTotal = 0;

    //4. Validamos o comparamos el tiempo de inversion segun este mostramos la ganancia del total y los demas datos 

    switch (tiempo) {
        case "1":
            ganancia = (inversion * 0.8) / 100 * 12;
            gananciaTotal = parseInt(inversion) + parseInt(ganancia);

            totalshow.innerText = ganancia;
            gananciaShow.innerText = gananciaTotal;
            tiempoShow.innerText ="12 meses";
            interesShow.innerText = "0.8";
           
            break;
        
            case "2":
                ganancia = (inversion * 1.3) / 100 * 24;
                gananciaTotal = parseInt(inversion) + parseInt(ganancia);
    
                totalshow.innerText = ganancia;
                gananciaShow.innerText = gananciaTotal;
                tiempoShow.innerText ="24 meses";
                interesShow.innerText = "1.3";
            break;

        case "3":
            ganancia = (inversion * 1.7) / 100 * 36;
            gananciaTotal = parseInt(inversion) + parseInt(ganancia);

            totalshow.innerText = ganancia;
            gananciaShow.innerText = gananciaTotal;
            tiempoShow.innerText ="12 meses";
            interesShow.innerText = "1.7";
            break; 
    }
}