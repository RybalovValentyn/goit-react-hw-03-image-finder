import s from './imageFinder.module.css'

export default function ImageItem({imageUrl}) {
  return (

<div  className={s.ImageGalleryItem}>
  <img src={imageUrl.webformatURL} alt={imageUrl.tags} className={s.ImageGalleryItemImage} />
</div>

)}