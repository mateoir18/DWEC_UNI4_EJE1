window.onload = function() {
    
    alert("Iniciamos los cambios");

    
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = "insertando un parrafo";
    document.body.appendChild(nuevoParrafo);

    
    var enlace = document.getElementById("enlace");
    enlace.parentNode.removeChild(enlace);

    var parrafo1 = document.getElementById("parr1");
    parrafo1.innerHTML = "Mateo";

    
    var fechaParrafo = document.createElement("p");
    var fecha = new Date();
    fechaParrafo.innerHTML = fecha.toDateString();
    var div = document.getElementById("division");
    document.body.insertBefore(fechaParrafo, div);
}
