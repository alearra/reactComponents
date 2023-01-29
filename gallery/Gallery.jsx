
import React from 'react'
import batman from "../gallery/static/batman.jpg"
import captain from "../gallery/static/captain.jpg"
import dartvader from "../gallery/static/dartvader.jpg"
import ironman from "../gallery/static/ironman.jpg"
import "../gallery/Gallery.css"

export const Gallery = () => {
  return (
    <section>
        <img src={batman} />
        <img src={captain} />
        <img src={dartvader} />
        <img src={ironman} />
    </section>
  )
}
