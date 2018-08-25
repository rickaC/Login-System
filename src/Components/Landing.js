import React,{Component} from 'react'

// Landing stateless component
class Landing extends Component {
  render() {
    return (
      <div className="App">
       <section className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1">ReactJs Login Demo</h1>
          </div>
          <div className="overlay"></div>
        </section>
          
      </div>
    );
  }
}

export default Landing;