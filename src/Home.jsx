
import {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div> 
                   <h1>PTAC 2 - PROJETO FINAL</h1>
                   <Link to= "/registro">Registre Se</Link>

                   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">

      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      
      </nav>


      <div class="container text-center">
  <div class="row">
    <div class="col">

        <div class="card">
            <div class="ratio ratio-16x9">
                <iframe src="https://youtu.be/lVNVq-PVOf8" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <p class="card-text">Some quick example text.</p>
            </div>
        </div>

    </div>
    <div class="col">
      
    <div class="card">
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <p class="card-text">Some quick example text.</p>
            </div>
        </div>

    </div>
    <div class="col">
      
    <div class="card">
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <p class="card-text">Some quick example text.</p>
            </div>
        </div>

    </div>
  </div>
</div>

      <div class="container text-center">
  <div class="row">
    <div class="col">
      
    <div class="card">
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <p class="card-text">Some quick example text.</p>
            </div>
        </div>

    </div>
    <div class="col">
    
    <div class="card">
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <p class="card-text">Some quick example text.</p>
            </div>
        </div>

    </div>
    <div class="col">
      
    <div class="card">
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <p class="card-text">Some quick example text.</p>
            </div>
        </div>

    </div>
  </div>
</div>


        </div>
        
        
     );
}