export default function Card({video}) {
  return (
    <div>

      <div class="col">
        <div class="card">
          <div class="ratio ratio-16x9">
          <iframe  src={"https://www.youtube.com/embed/"+ video.urlVideo.slice(17) }title="" allowfullscreen></iframe>
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
  );
}
