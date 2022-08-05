const tarea = document.getElementById("tarea");
const descripcionTarea = document.getElementById("descriptionTarea")
const div = document.getElementById("lista");
const ol = document.createElement("ol")

const listaDeTareas = [];

const eliminarTarea = () => {
   if(confirm("Seguro que desea eliminar la tarea?") == true){
   }
}

const subirTarea = () => {
   if(tarea.value != ""){
      listaDeTareas.push(tarea.value);
      let li = document.createElement("li")
   
      for(let i = 0 ;i < listaDeTareas.length; i++){
         li;
         li.innerHTML = listaDeTareas[i]
         li.className = "fs-5"
      }
      ol.appendChild(li)
      div.className = "col";
      div.appendChild(ol)
      console.log(div)
   
   } else{
      alert("No escribiste nada!");
   }
  
   
}
