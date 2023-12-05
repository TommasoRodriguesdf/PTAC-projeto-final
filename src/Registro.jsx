import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Registro() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))|| [];
  const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1 ]?.id + 1 || 1);
  const [lista, setLista] = useState(listaLocalStorage );
  
  const [urlVideo, setUrlVideo] = useState("");
  const [cantor, setCantor] = useState("");
  const [nomMusica, setNomMusica] = useState("");
  const [favorita, setFavorita] = useState("");


  const salvar = (e) => {
    e.preventDefault();

    setLista([
      ...lista,
      {

        id: id,
        //Math.floor(Math.random() * 100000000), 
        urlVideo: urlVideo,
        cantor: cantor,
        nomMusica:nomMusica,
        favorita:favorita,
      },
    ]);

    setId(id + 1);
  };

  useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

  
 

  return (
    <div>
      <div>
        <h1>katanas</h1>
        <form onSubmit={salvar}>
          <input
            type="text"
            value={urlVideo}
            onChange={(e) => {
              setUrlVideo(e.target.value);
            }}
          />
          <input
            type="text"
            value={cantor}
            onChange={(e) => {
              setCantor(e.target.value);
            }}
          />
          <input
            type="text"
            value={nomMusica}
            onChange={(e) => {
              setNomMusica(e.target.value);
            }}
          />
                    <input
            type="text"
            value={favorita}
            onChange={(e) => {
              setFavorita(e.target.value);
            }}
          />
          <button>Comprar</button>
        </form>
      </div>
     </div>
  );
}

