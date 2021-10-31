import { Component } from "react";
import Preloading from "./Loader"
import ImageGallery from './/ImageGallery'
import Button from './Button'
export default class API extends Component {

    state = {
       image: [],
        loading: false,
        error: null,
        status: 'idle',
        page: 1,
        modalImageUrl: ''
    }


componentDidUpdate(prevProps, prevState){
    const key = '22353010-e1640ec84a31ac5dbc2cb01be'
    if (prevProps.imageSearch !== this.props.imageSearch ) {
this.setState({status: 'pending', page: 1})

setTimeout(() => {
    fetch(`https://pixabay.com/api/?q=${this.props.imageSearch}&page=${this.props.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12
    `)

    .then(response=>{
        if (response.ok) {
            
            return response.json()
        }
    return Promise.reject( new Error (`not name ${this.props.imageSearch}`))
    })
    .then( image => 
  { 
            this.setState({image: image.hits, status: 'resolved',})})
    .catch(error => this.setState({error, status: 'rejected'}))
 },1000);
    }
    if ( prevState.page !== this.state.page && this.state.page > 1 ) {
        this.setState({status: 'load more'})
        setTimeout(() => {
            fetch(`https://pixabay.com/api/?q=${this.props.imageSearch}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12
            `)        
            .then(response=>{
                if (response.ok) {                    
                    return response.json()
                }
            return Promise.reject( new Error (`not name ${this.props.imageSearch}`))
            })
            .then( image => 
          { 
            this.setState(prevState => ({
               image:[...prevState.image, ...image.hits ]}) ) 
            console.log([...prevState.image, ...image.hits ]);
                    this.setState({ status: 'resolved'})})
            .catch(error => this.setState({error, status: 'rejected'}))
                },1000);
    }
}

componentWillUnmount() {
    this.setState({page: 1})
  }

imagesIdsearch=(imageId) => {

this.props.togle(imageId)
}

handleLoadMore = () =>{
   
console.log('dslkfnvdfvev');
this.setState(prevState => ({
    page: prevState.page + 1
}) )

}

render(){
    const{ image, status, error }= this.state
        
if (status === 'idle') {
    return <></>
}
if (status === 'pending' && image) {
    return <Preloading />
}

if (status === 'resolved') {
    // console.log(image);
    return(
        <>
         <ImageGallery images={image} imageId ={this.imagesIdsearch}/>
         {status === 'load more'&&  <Preloading />}
        {image.length >= 12 && <Button loadMore={this.handleLoadMore}/>}
        </>
)
}
if (status === 'load more') {
    // console.log(image);
    return(
        <>
         {status === 'load more'&&  <Preloading />}
         <ImageGallery images={image} imageId ={this.imagesIdsearch}/>
         <Preloading />
        </>
)
}
if (status ==='rejected') {
    return <p>{error.message }{this.props.imageSearch} нету</p>
}

}
}




