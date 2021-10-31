
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import { ToastContainer } from 'react-toastify';
import API from "./components/Api";
import Modal from "./components/Modal";
import s from './components/imageFinder.module.css'

class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    showModal: false,
    modalImageUrl: ''
  }

handleSearch=searchPics=>{

this.setState({searchQuery: searchPics})
}

toggleModal = (imageId) => {

  this.setState(({ showModal, modalImageUrl }) => ({
    modalImageUrl: imageId,
    showModal: !showModal,
    
  }));
};

render(){

  return (
<div 
className={s.App}
>
<Searchbar searchPics = {this.handleSearch}/>
<API imageSearch={this.state.searchQuery} togle={this.toggleModal} />
<ToastContainer autoClose={3000} />
            {this.state.showModal && (
      <Modal onClose={this.toggleModal} imageId={this.state.modalImageUrl}/>

             )}

</div>
  );
}

}

export default App;

