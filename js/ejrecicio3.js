const tarea = document.getElementById("tarea");
const descripcionTarea = document.getElementById("descriptionTarea")
const linkTarea = document.createElement("a");
const tituloTarea = document.querySelectorAll(".titulo");
const descripcion = document.querySelectorAll("p")




const eliminarTarea = () => {
   if(confirm("Seguro que desea eliminar la tarea?") == true){
    delete tarea.field
   }
}
