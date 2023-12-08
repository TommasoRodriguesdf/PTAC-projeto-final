import { useParams } from "react-router-dom";
import Card from "./Card";

export default function Detalhe(){
    const{ id } = useParams();
    const lista =JSON.parse(localStorage.getItem("Lista")); 
 
const  cantor = lista.filter( (objeto) =>{
      if(objeto.id == id){
             return objeto; 
 
      } 
<Link to={"/detalhe/ ${lista.id}"} className="btn btn-primary">detalhe</Link>
})


return (
    <Card atividade={cantor[0]} />
);



}