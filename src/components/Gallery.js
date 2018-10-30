import React from "react";
import Media from "../containers/Media";

const Gallery = ({ username, url }) => {
  return (
    <div className="container mx-2">
      <div className="row mt-5 justify-content-center history-media">
        <a href="/#" className="btn btn-light noborder active">
          <i className="fas fa-th mr-1" /> Publicaciones
        </a>
        <a href="/#" className="btn btn-light noborder">
          <i className="fas fa-tv mr-1" /> IG TV
        </a>
        <a href="/#" className="btn btn-light noborder">
          <i className="far fa-user-circle mr-1" />
          Etiquetadas
        </a>
      </div>
      <Media username={username} />
    </div>
  );
};

export default Gallery;
