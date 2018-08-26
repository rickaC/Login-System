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
        <section className="section-2 container padding-section center">
            <h2>Project Features</h2>

            <div className="row padding-section">
              <div className="col-md-4">
                  <img src={ReactJS} />
                  <h3>ReactJ</h3>
              </div>
              <div className="col-md-4">
                  <img src={ReduxPath} />
                  <h3>Redux</h3>
              </div>
              <div className="col-md-4">
                  <img src={FirebaseDatabase} />
                  <h3>Firebase Database</h3>
              </div>
            </div>
            <div className="row padding-section">
              <div className="col-md-4">
                  <img src={FirebaseAuthenication} />
                  <h3>Firebase Authenication</h3>
              </div>
              <div className="col-md-4">
                  <img src={RestAPI} />
                  <h3>Rest API</h3>
              </div>
              <div className="col-md-4">
                  <img src={Slick} />
                  <h3>Slick Carousel</h3>
              </div>
            </div>
        </section>        
      </div>

    );
  }
}

export default Landing;