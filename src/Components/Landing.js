import React,{Component} from 'react'
import Slider from '../Carousel/Slider';
import FirebaseAuthenication from '../Assets/img/firebase-authenication.png';
import FirebaseDatabase from '../Assets/img/firebase-database.jpg';
import ReactJS from '../Assets/img/reactJS.png';
import ReduxPath from '../Assets/img/Redux.png';
import RestAPI from '../Assets/img/restapi.jpg';
import Slick from '../Assets/img/slick.jpg';

// Landing stateless component
class Landing extends Component {
  render() {
    return (
      <div className="App">
        <Slider/>
              
      </div>

    );
  }
}

export default Landing;