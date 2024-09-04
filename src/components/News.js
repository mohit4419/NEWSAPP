import React, { Component } from 'react'
import NewsItem from './NewsItem';
// import Spinner from './Spinner';
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
  static dafaultProp = {
    country:'in',
    pageSize: 7,
    category:'general'
  }
  static propType = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
             
 
    

  constructor(props){
    super(props);
    // console.log("hello i am here");
    this.state = {
      articles:[],
      loading:false,
      page:1
    }
    document.title = `${this.props.category}-NewsZone`;
  }


  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=327adc7d2a344512a74e45e6bcfe6e3f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles:parsedData.articles ,
       totalResults:parsedData.totalResults,
      loading:false
    })
    
  }
    handleNextClick= async()=>{
    console.log("clicked Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    // this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=327adc7d2a344512a74e45e6bcfe6e3f&page=${this.state.page + 1}&pageSize={this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page :this.state.page + 1,
      articles:parsedData.articles,
      loading:false,
     

    }) 
    // this.props.setProgress(100);
  }
   

  }
  

  handlePreviousClick= async()=>{
    console.log("clicked Previous");
    // this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=327adc7d2a344512a74e45e6bcfe6e3f&page=${this.state.page - 1}&pageSize={this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles:parsedData.articles,
      loading:false
    })
    // this.props.setProgress(100);

  }
     
  



  render() {
    return (
      <div className="container my-3 mx-2" >
      <h1 className="text-center"style={{margin: '35px 0px' , marginTop:'90px' , color:'red'}}>NewsWala - Top  {this.props.category} Headlines</h1>
         {this.state.loading&&<Spinner/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((element) => {
        return  <div className="col-md-3" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,29):""}description={element.description?element.description.slice(0,39):""} imgUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
      })}
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-sm btn-dark " onClick={this.handlePreviousClick}>&larr;Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-sm btn-dark "  onClick={this.handleNextClick}> Next&rarr;</button>
        </div>
      </div>
        </div>
       
    )
  }
}

export default News
