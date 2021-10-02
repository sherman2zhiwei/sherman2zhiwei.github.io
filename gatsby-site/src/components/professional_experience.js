import * as React from 'react'

class ProfessionalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        selected: 0,
    };
    this.options = ["MIMOS Berhad", "Digi-X", "PwC"]
  }

  render() {
      return(
        <>
        <div className="col col-md-auto d-flex">
          <div className="list-group">

            {this.options.map((current, index) => {
                return (
                      <a href="javascript:void(0)" onClick={() => this.setState({selected: index})} className={`list-group-item list-group-item-action ${this.state.selected == index ? "active" : ""}`}>{current}
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
                <h2>Software Engineer - MIMOS Berhad</h2>
                <p className="lead">February 2020 - June 2021</p>
                <ul>
                  <li className="mb-2">Supported advanced visualization data queries and security requirements by expanding Flask backend APIs
                    for Apache Superset (An open-source visualization platform)</li>
                  <li className="mb-2">Reduced customer anomaly response time by 20% by providing streaming analytics (Kafka. DruidDB,
                    Superset, Thingsboard), leading to a 5% reduction in product defect rate</li>
                  <li className="mb-2">Built streaming data pipelines with automated workflows (Nifi) that ingest and preprocess data (using Python) from IoT sensors and production line data</li>
                  <li className="mb-2">Reduced web app average response time by 50% by designing and implementing load balancing (NGINX)
                    and web server (Gunicorn) concurrency</li>
                </ul>
              </div>
            )

          case 1:
            return(
              <div class="col d-flex flex-column">
                <h2>Business Operations Intern - Digi-X</h2>
                <p className="lead">November 2018 - February 2019</p>
                <ul>
                  <li className="mb-2">Carried out business operations for GPS tracking solution</li>
                  <li className="mb-2">Provided customer support, troubleshooting and answered product enquiries</li>
                  <li className="mb-2">Carried out major product version upgrade</li>

                </ul>
              </div>
            )

            case 2:
              return(
                <div class="col d-flex flex-column">
                  <h2>IT Intern - PwC</h2>
                  <p className="lead">January 2016 - June 2016</p>
                  <ul>
                    <li className="mb-2">Managed computer inventory and handled sensitive digital data with utmost discretion</li>
                    <li className="mb-2">Serviced company employees regarding any IT-related problems</li>
                    <li className="mb-2">Delivered IT briefings to new employees, managers and directors</li>
  
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

export default ProfessionalExperience