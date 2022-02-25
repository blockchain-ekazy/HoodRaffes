function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark text-white">
          <div className="blurbg"></div>
          <a class="navbar-brand" href="#">Hood raffes</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              {/* <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
              </li> */}
              <li class="nav-item active">
                <a class="nav-link" href="#welcome">About</a>
              </li>
              {/* <li class="nav-item active">
                <a class="nav-link" href="#story">Story</a>
              </li> */}
              {/* <li class="nav-item active">
                <a class="nav-link" href="#team">Team</a>
              </li> */}
              <li class="nav-item active">
                <a class="nav-link" href="#roadmap">Roadmap</a>
              </li>
            </ul>
            <a href="https://twitter.com/HoodRaffesNFT" target="_blank"><i className="fab fa-twitter mx-2 py-3"></i></a>
        <a href="https://discord.com/invite/hoodraffesnft" target="_blank"><i className="fab fa-discord mx-2 py-3"></i></a>
        <a href="https://www.facebook.com/Hood-Raffes-108804948289189" target="_blank"><i className="fab fa-facebook mx-2 py-3"></i></a>
        <a href="https://www.instagram.com/hoodraffesnft/" target="_blank"><i className="fab fa-instagram mx-2 py-3"></i></a>
          </div>
        </nav>
    );
}

export default Navbar;