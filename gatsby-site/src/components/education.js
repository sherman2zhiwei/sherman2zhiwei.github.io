import * as React from 'react'

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        selected: 0,
    };
    this.options = ["Monash University Malaysia", "HELP Academy"]
  }

  render() {
      return(
        <>
        <div className="col col-md-auto d-flex">
          <div className="list-group">

            {this.options.map((current, index) => {
                return (
                      <a href="javascript:void(0)" onClick={() => this.setState({selected: index})} className={`list-group-item list-group-item-action list-group-item-dark ${this.state.selected == index ? "active" : ""}`}>{current}
                      </a>
                  )
            })}
          </div>
        </div>
        
        {
        
        (() => {
          switch(this.state.selected){
          case 0:
            return(
              <div class="col d-flex flex-column">
                <h2>Bachelor of Computer Science (Honours) - Monash University Malaysia</h2>
                <p className="lead">October 2016 - June 2020</p>
                <ul>
                  <li className="mb-2"><b>CGPA</b> : 3.92/4.0</li>
                  <li className="mb-2"><b>Weighted Average Mark</b> : 85.7/100</li>
                  <li className="mb-2"><b>Honors and Awards </b>: Cliff Bellamy Awards (Dean's Achievement Award - Highest Achieving Student), Highest Unit Score Award, Faculty of IT Best Graduate</li>
                  <li className="mb-2"><b>Relevant Coursework </b>: Object Oriented Design and Implementation in Java, Advanced Algorithms and Data Structures, Android Application Development, Parallel and Distributed Computing</li>
                  <li className="mb-2"><b>Honours Research Thesis </b>: Incorporating Contextual Data in Sequence-Based Recommender Systems</li>
                </ul>
              </div>
            )

          case 1:
            return(
              <div class="col d-flex flex-column">
                <h2>A-Levels HELP Academy</h2>
                <p className="lead">January 2014 - July 2015</p>
                <ul>
                  <li className="mb-2"><b>A-Levels</b> : Physics, Economics, Mathematics, Further Mathematics (4A*)</li>
                  <li className="mb-2"><b>Honors and Awards</b> : Highest Mark in the World - Cambridge International AS Level Economics 2014</li>

                </ul>
              </div>
            )
          }
        })()

        }

        </>  
      )    
  }
}

export default Education