import React,{Component} from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="App">
       <section className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1">This is the Home Page</h1>
            <h3 className="mb-5">
              <em>A Free Bootstrap Theme by Start Bootstrap</em>
            </h3>

          </div>
          <div className="overlay"></div>
        </section>
          
      </div>
    );
  }
}

export default Landing;