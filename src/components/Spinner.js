import React, { Component } from 'react'

import loading from './loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center page-middle' style={{
        position:" fixed",
         zIndex:"1101",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
      }}>
        <img src={loading} alt="loading"></img>
      </div>
    )
  }
}
// .spinner {
//   position: fixed;
//   z-index: 1031;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }
