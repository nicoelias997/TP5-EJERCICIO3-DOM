const tarea = document.getElementById("tarea");
const descripcionTarea = document.getElementById("descriptionTarea")
const div = document.getElementById("lista");
const ol = document.createElement("ol");

const listaDeTareas = [];

const subirTarea = () => {
   if(tarea.value != ""){
      listaDeTareas.push(tarea.value);
   let li = document.createElement("li");
   let contenedor = document.createElement("div");
   let boton = document.createElement("button");
   
      for(let i = 0 ;i < listaDeTareas.length; i++){
         contenedor;
         li;
         boton;
         contenedor.appendChild(li);
         contenedor.appendChild(boton)
         contenedor.className = "d-flex justify-content-between contenedor"
         boton.type = "button";
         boton.textContent = "x"
         boton.className = `btn rounded-circle eliminar`;
         boton.addEventListener('click', eliminarTarea);
         li.innerHTML = listaDeTareas[i]
         li.className = "fs-5 text-break";
      }
      ol.appendChild(contenedor)
      ol.className = "d-flex justify-content-between row"
      div.appendChild(ol);
      div.className = "col";
        
   } else{
      alert("No escribiste nada!");
   }   
}


const eliminarTarea = (event) => {

   for(let i = 0; i < ol.childNodes.length; i ++){
      if(event.target.parentNode == ol.childNodes[i]){
         event.target.parentNode.remove()
      }
   }
}
   
//    if(confirm("Seguro que desea eliminar la tarea?") == true){
//       console.log("first")
// }


      