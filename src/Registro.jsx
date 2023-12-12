import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Registro() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [id, setId] = useState(
    listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1
  );
  const [lista, setLista] = useState(listaLocalStorage);

  const [urlVideo, setUrlVideo] = useState("");
  const [cantor, setCantor] = useState("");
  const [nomMusica, setNomMusica] = useState("");
  const [favorita, setFavorita] = useState("");
  const [produtora, setProdutora] = useState("");

  const navigate = useNavigate();

  const salvar = async (e) => {
    e.preventDefault(urlVideo);
await setLista([
      ...lista,
      {
        id: id,
        //<Link to={"/detalhe/ ${lista.id}"} className="btn btn-primary">detalhe</Link>
        //Math.floor(Math.random() * 100000000),
        urlVideo: urlVideo,
        cantor: cantor,
        nomMusica: nomMusica,
        favorita: favorita,
        produtora: produtora,
      },
    ]);

    setId(id + 1);
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  return (
    <div>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
     <div class="container-fluid">
    <a class="navbar-brand" href="#">Sound Serenity</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
                <Link to="/">Home</Link>
                <hr class="dropdown-divider" />
                <Link to="/destaque">Destaque</Link>
                <hr class="dropdown-divider" />
                <Link to="/detalhe">Detalhe</Link>

    </div>
  </div>

</nav>

<div>

<div class="container text-center">
  <div class="row"/>
    <div class="col"/>

      <div className="text-white">
        <h1></h1>
        <form onSubmit={salvar}>
        <hr class="dropdown-divider" />
          <label htmlFor="">urlVideo</label>
        <hr class="dropdown-divider" /> 
          <input
            type="text"
            value={urlVideo}
            onChange={(e) => {
              setUrlVideo(e.target.value);
            }}
          />
          <hr class="dropdown-divider" />
          <label htmlFor="">setCantor</label>
          <hr class="dropdown-divider" />
          <input
            type="text"
            value={cantor}
            onChange={(e) => {
              setCantor(e.target.value);
            }}
          />
          <hr class="dropdown-divider" />
          <label htmlFor="">setNomMusica</label>
          <hr class="dropdown-divider" />
          <input
            type="text"
            value={nomMusica}
            onChange={(e) => {
              setNomMusica(e.target.value);
            }}
          />
          <hr class="dropdown-divider" />
          <label htmlFor="">setFavorita</label>
          <hr class="dropdown-divider" />
          <input
            type="text"
            value={favorita}
            onChange={(e) => {
              setFavorita(e.target.value);
            }}
          />
          <hr class="dropdown-divider" />
          <label htmlFor="">setProdutora</label>
          <hr class="dropdown-divider" />
          <input
            type="text"
            value={produtora}
            onChange={(e) => {
              setProdutora(e.target.value);
            }}
          />
          <hr class="dropdown-divider" />
          <button>adicionar</button>
        </form>
      </div>
    </div>
    </div>
</div>
  );
}
