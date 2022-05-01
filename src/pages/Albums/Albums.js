import React from 'react';
import "./Albums.css"
import albums from "./albums.json"

const Albums = () => {
  return (
    <div className="albums_section">
      {albums.albums.map((item) => (
        <div className="album_info">
          {item.id === '1' && <img src="../images/albums/meet_the_woo.png" alt="meetTheWoo"/>}
          {item.id === '2' && <img src="../images/albums/meet_the_woo_2.png" alt="meetTheWoo2"/>}
          {item.id === '3' && <img src="../images/albums/sfsafm.png" alt="sfasfm"/>}
          {item.id === '4' && <img src="../images/albums/faith.png" alt="faith"/>}
          <div className="text_info">
            <h1>{item.name}</h1>
            <h2>{item.year}</h2>
            <button className="more_info_btn">More Info</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Albums;