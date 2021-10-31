import { Component } from "react";
import s from './imageFinder.module.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {

state={
  searchQuery: '',
}

handleSearchInput = event => {
  this.setState({searchQuery: event.currentTarget.value.toLowerCase()});

}

handleSearch = event => {
    event.preventDefault()

if (this.state.searchQuery.trim() === '') {  
     toast.error("enter search immage")
    return
}
    this.props.searchPics(this.state.searchQuery)  //передали в апп pokemonName-имя пропса!!!!!!
    this.setState({searchQuery: ''})
}

render(){
    return(
<header className={s.Searchbar}>
  <form className={s.SearchForm} onSubmit={this.handleSearch}>
    <button type="submit"  className={s.SearchFormButton}>
      <span className={s.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={s.SearchFormInput}
      type="text"
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
      value = {this.state.searchQuery}
      onChange = {this.handleSearchInput}
    />
  </form>
</header>
    )
}

}

export default Searchbar