(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{3:function(e,t,a){e.exports={App:"imageFinder_App__2a439",Searchbar:"imageFinder_Searchbar__3OcA6",SearchForm:"imageFinder_SearchForm__2QndB",SearchFormButton:"imageFinder_SearchFormButton__3u1EO",SearchFormButtonLabel:"imageFinder_SearchFormButtonLabel__1EuA7",SearchFormInput:"imageFinder_SearchFormInput__rZuF9",ImageGallery:"imageFinder_ImageGallery__2oSm9",ImageGalleryItem:"imageFinder_ImageGalleryItem__v-jlt",ImageGalleryItemImage:"imageFinder_ImageGalleryItemImage__3MPd5",Overlay:"imageFinder_Overlay__1bSXm",Modal:"imageFinder_Modal__1UkPb",Button:"imageFinder_Button__78LLJ"}},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a.n(o),i=a(4),s=a(5),l=a(7),h=a(6),m=a(3),u=a.n(m),d=a(10),g=(a(17),a(1)),p=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSearchInput=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSearch=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.searchPics(e.state.searchQuery),e.setState({searchQuery:""})):d.b.error("enter search immage")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:u.a.Searchbar,children:Object(g.jsxs)("form",{className:u.a.SearchForm,onSubmit:this.handleSearch,children:[Object(g.jsx)("button",{type:"submit",className:u.a.SearchFormButton,children:Object(g.jsx)("span",{className:u.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:u.a.SearchFormInput,type:"text",placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleSearchInput})]})})}}]),a}(r.Component),j=p,b=a(9),f=a(12),O=a.n(f),v=(a(39),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)(O.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(r.Component));function y(e){var t=e.imageUrl;return Object(g.jsx)("div",{className:u.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:t.webformatURL,alt:t.tags,className:u.a.ImageGalleryItemImage})})}var S=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={hits:{},largeImageURL:""},e.handleClick=function(t){if(t.target.currentSrc){var a=e.state.hits.find((function(e){return e.webformatURL===t.target.src}));a&&e.props.imageId(a)}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({hits:this.props.images}),window.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){var e=this.props.images;return Object(g.jsx)("ul",{className:u.a.ImageGallery,children:e.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(y,{imageUrl:e})},e.id)}))})}}]),a}(r.Component);function I(e){var t=e.loadMore;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(g.jsx)("button",{onClick:t,type:"button",className:u.a.Button,children:"Load more"})}var w=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={image:[],loading:!1,error:null,status:"idle",page:1,modalImageUrl:""},e.imagesIdsearch=function(t){e.props.togle(t)},e.handleLoadMore=function(){window.scrollTo({top:document.documentElement.scrollHeight}),console.log("dslkfnvdfvev"),e.setState((function(e){return{page:e.page+1}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r="22353010-e1640ec84a31ac5dbc2cb01be";e.imageSearch!==this.props.imageSearch&&(this.setState({status:"pending",page:1}),setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(a.props.imageSearch,"&page=").concat(a.props.page,"&key=").concat(r,"&image_type=photo&orientation=horizontal&per_page=12\n    ")).then((function(e){return e.ok?e.json():Promise.reject(new Error("not name ".concat(a.props.imageSearch)))})).then((function(e){a.setState({image:e.hits,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))}),1e3)),t.page!==this.state.page&&this.state.page>1&&(this.setState({status:"load more"}),setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(a.props.imageSearch,"&page=").concat(a.state.page,"&key=").concat(r,"&image_type=photo&orientation=horizontal&per_page=12\n            ")).then((function(e){return e.ok?e.json():Promise.reject(new Error("not name ".concat(a.props.imageSearch)))})).then((function(e){a.setState((function(t){return{image:[].concat(Object(b.a)(t.image),Object(b.a)(e.hits))}})),console.log([].concat(Object(b.a)(t.image),Object(b.a)(e.hits))),a.setState({status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))}),1e3))}},{key:"componentWillUnmount",value:function(){this.setState({page:1})}},{key:"render",value:function(){var e=this.state,t=e.image,a=e.status,r=e.error;return"idle"===a?Object(g.jsx)(g.Fragment,{}):"pending"===a&&t?Object(g.jsx)(v,{}):"resolved"===a?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S,{images:t,imageId:this.imagesIdsearch}),"load more"===a&&Object(g.jsx)(v,{}),t.length>=12&&Object(g.jsx)(I,{loadMore:this.handleLoadMore})]}):"load more"===a?Object(g.jsxs)(g.Fragment,{children:["load more"===a&&Object(g.jsx)(v,{}),Object(g.jsx)(S,{images:t,imageId:this.imagesIdsearch}),Object(g.jsx)(v,{})]}):"rejected"===a?Object(g.jsxs)("p",{children:[r.message,this.props.imageSearch," \u043d\u0435\u0442\u0443"]}):void 0}}]),a}(r.Component),_=document.querySelector("#modal-root"),x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){"DIV"===t.target.nodeName&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("click",this.handleBackdropClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("click",this.handleBackdropClick)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:u.a.Overlay,children:Object(g.jsx)("div",{className:u.a.Modal,children:Object(g.jsx)("img",{src:this.props.imageId.largeImageURL,alt:this.props.imageId.tags})})}),_)}}]),a}(r.Component),k=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={page:1,searchQuery:"",showModal:!1,modalImageUrl:""},e.handleSearch=function(t){e.setState({searchQuery:t})},e.toggleModal=function(t){e.setState((function(e){var a=e.showModal;e.modalImageUrl;return{modalImageUrl:t,showModal:!a}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(j,{searchPics:this.handleSearch}),Object(g.jsx)(w,{imageSearch:this.state.searchQuery,togle:this.toggleModal}),Object(g.jsx)(d.a,{autoClose:3e3}),this.state.showModal&&Object(g.jsx)(x,{onClose:this.toggleModal,imageId:this.state.modalImageUrl})]})}}]),a}(r.Component),F=k;c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4acd72d9.chunk.js.map