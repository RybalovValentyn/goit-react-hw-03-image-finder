import ImageItem from './ImageGalleryItem'
import s from './imageFinder.module.css'
import { Component } from 'react';

export default class ImageGallery extends Component {
state ={
  hits: {},
  largeImageURL: "",
}
componentDidMount() {
    this.setState({hits: this.props.images})
    // console.log('Modal componentDidMount');
    window.addEventListener('click', this.handleClick);

  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('click', this.handleClick);
  }

  handleClick = event => {
    if (event.target.currentSrc) {
 
    const imageId =  this.state.hits.find(hit => hit.webformatURL === event.target.src)
    // this.setState({largeImageURL: imageId.largeImageURL})
    // console.log(imageId.webformatURL);
if (imageId) {
  // console.log(imageId);
  this.props.imageId(imageId)
  
}  
         
    }

}

// onClick={() => onDeleteTodo(id)}

render () {
  const hits = this.props.images
   return (
   
     <ul className={s.ImageGallery}>
      {hits.map(image => (
        <li key = {image.id}>
          <ImageItem imageUrl={image} />
          
        </li>
    
      ))}
    </ul> 
    
          )
}
     
    
}