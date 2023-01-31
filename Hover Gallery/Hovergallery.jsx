import React from "react";
import "./Hovergallery.css";

export const Hovergallery = () => {
  return (
    <section className="container">
      <div className="card">
        <div className="imgCard">
          <img src="https://images5.alphacoders.com/109/1092637.jpg" />
        </div>
        <div className="content">
          <div>
            <h2>BATMAN</h2>
            <p>
              Batman es una opción inteligente por su justicia, determinación,
              habilidades y valores morales fuertes.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="imgCard">
          <img src="https://4kwallpapers.com/images/walls/thumbs_3t/8773.jpg" />
        </div>
        <div className="content">
          <div>
            <h2>IRON MAN</h2>
            <p>
              Iron Man es una opción astuta por su ingenio, tecnología avanzada,
              valentía y humor sarcástico.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="imgCard">
          <img src="https://c4.wallpaperflare.com/wallpaper/619/326/394/action-red-fantasy-sky-wallpaper-preview.jpg" />
        </div>
        <div className="content">
          <div>
            <h2>Captain America</h2>
            <p>
              Captain America es una opción noble por su patriotismo,
              integridad, liderazgo y valores éticos inquebrantables.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="imgCard">
          <img src="https://p4.wallpaperbetter.com/wallpaper/778/130/358/green-lantern-high-resolution-wallpaper-preview.jpg" />
        </div>
        <div className="content">
          <div>
            <h2>GREEN LANTERN</h2>
            <p>
              Green Lantern es una opción poderosa por su fuerza, habilidad para
              crear, valentía y responsabilidad con la justicia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
