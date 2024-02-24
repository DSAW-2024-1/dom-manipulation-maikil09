let fechaActual = new Date();
    
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth();
    let semana = fechaActual.getDay();
    let meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ];
    let diasSemana = ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    // Asegurarse de que el día y el mes tengan dos dígitos
    if (dia < 10) {
      dia = '0' + dia;
    }
    mes=meses[mes]
    semana = diasSemana[semana]
    document.getElementById('fecha').textContent = semana + ' , ' + dia + ' de ' + mes;

    const añadir_tarea = document.getElementById("añadir_tarea");
    const lista_tareas = document.getElementById("lista_tareas");

    function añadirtarea(){
        if(añadir_tarea.value === ''){
            alert ("Debes escribir algo para poder añadir la tarea"); 
        }else{
            let li = document.createElement("li");
            li.innerHTML = añadir_tarea.value;
            lista_tareas.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        añadir_tarea.value = "";
        guardartareas();
    }


    lista_tareas.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("completado");
            guardartareas();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            guardartareas();
        }
    }, false);

    function guardartareas(){
        localStorage.setItem("data", lista_tareas.innerHTML);
    }
    function mostrarTareas(){
        lista_tareas.innerHTML = localStorage.getItem("data");
    }
    mostrarTareas();