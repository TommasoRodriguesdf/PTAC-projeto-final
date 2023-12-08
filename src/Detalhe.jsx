import { useState } from "react-router-dom";
import Card from "./Card";

export default function Detalhe(){
    const{ id } = useParams();
    const videos =JSON.parse(localStorage.getItem("videos")) || []; 
 
const urlVideo = videos.filter( (objeto) =>{
      if(objeto.id == id){
             return objeto; 
 
      } 

})


return (
    <Card atividade={urlVideo[0]} />
);



}