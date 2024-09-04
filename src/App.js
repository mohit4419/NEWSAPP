import './App.css';
import React, { Component } from 'react'
import {Routes} from "react-router-dom"

import    NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


// state = {
//   progress : 0
// }
//     // setProgress(progress){
    //   this.setProgress({progress: progress})
    // }



export class App extends Component {
  render() {
    return (
      <div>
         <Router>
         <NavBar title="NewsWala" ></NavBar>
         <LoadingBar
        color='#f11946'
        height={4}
        progress={100}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route exact path="/" element={<News pageSize={10} country="in" category="All"/>}/>

        <Route exact path="/Business" element={<News  key="Business"pageSize={10} country="in" category="Business"/>}/>
         <Route exact path="/general" element={<News key="General" pageSize={10} country="in" category="General"/>}/>
         <Route exact path="/Health"element={<News key="Health" pageSize={10} country="in" category="Health"/>}/>
         <Route exact path="/Sports"element={<News key="Sports" pageSize={10} country="in" category="Sports"/>}/>
         <Route exact path="/Science"element={<News key="Science" pageSize={10} country="in" category="Science"/>}/>
         <Route exact path="/Technology"element={<News key="Technology" pageSize={10} country="in" category="Technology"/>}/>
         <Route exact path="/Entertainment"element={<News key="Entertainment" pageSize={10} country="in" category='Entertainment'/>}/>
        
        </Routes>
          
         </Router>
      </div>
    )
  }
}

export default App
