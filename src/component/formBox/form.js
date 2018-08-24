import React, { Component } from 'react';
import formBox from './form.css';

class FormBox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      price: 0,
      imgurl: ''
     }
  }


  render() {
    
    


    return ( 
      <div className='formBox'>
        
        <h3>PLACEHOLDER FOR FORMBOX</h3>
        <input placeholder='Click me to insert new image'></input>
      </div>
     );
  }
}
 
export default FormBox;