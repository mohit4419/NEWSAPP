import React, { Component } from 'react'

export class NewsItem extends Component {

  // constructor(props){
  //   super();
  //   // console.log("hello i am here");
  //   this.state={
      
  //     title:"Mohit",
  //     description:"desc",
  //     // imgUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     click:"Read More...",
  //     newsUrl: "TODO"
  //   }
  // }


  render() {
    let {title,description, imgUrl, author , source, date, newsUrl} = this.props;
    return (
      
      <div className="container mx-3 my-4">
        <div className="card" style={{width: ""}}>
  <img src={!imgUrl?"https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    {/* <h5 className="card-title">{this.state.title}</h5> */}
    <h5 className="card-title">{title} <span className="position-absolute top-0  translate-middle rounded-pill badge  bg-danger" style={{left:'100' , zIndex:'1'}}>{source}
    {/* <span class="badge text-" ></span> */}
  </span></h5>
    {/* <span class="badge text-bg-secondary">New</span> */}
    <p className="card-text">{description}...</p>
    <p className="card-text"><small classname="text-body-secondary">By {author} on  {new Date(date).toGMTString()}</small></p>
    <a rel= "noreferrer" href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">Read More...</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem;
