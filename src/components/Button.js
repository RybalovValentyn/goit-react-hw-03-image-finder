import React from "react"
import s from './imageFinder.module.css'

export default function Button ({loadMore}) {

  window.scrollTo({
    top: (document.documentElement.scrollHeight - 1400),
     behavior: 'smooth',
   });

return (
  <button onClick = {loadMore} type='button' className= {s.Button}>Load more</button>
)

}