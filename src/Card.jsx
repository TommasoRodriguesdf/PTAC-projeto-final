export default function Card({video}) {
  return (
    <div>
    <div class="row"/>
    <div class="col"/>
      Column

      <div class="col">
        <div class="card">
          <div class="" >
          <div class="container text-center">

          <iframe width="350" 
                  height="350"   
                  src={"https://www.youtube.com/embed/"+ video.urlVideo.slice(17) }
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>

          </div>
          <div class="card-body">
            <p class="card-text">{video.urlVideo}</p>
            <p class="card-text">{video.cantor}</p>
            <p class="card-text">{video.nomMusica}</p>
            <p class="card-text">{video.favorita}</p>
            <p class="card-text">{video.produtora}</p>
          </div>
        </div>
      </div>
    </div>                   
  </div>

  );
}

