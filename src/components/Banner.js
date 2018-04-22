import React from 'react';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

class Banner extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      authorsUrl: '/images/CoreyAdams_v4.jpg',
      authorsName: 'corey adams'
    };
  }

  componentWillMount(){
    this.fetchServices();
 }

 fetchServices() {
  const client = new Lokka({
    transport: new Transport('https://api.graphcms.com/simple/v1/mmort')
  });
  client.query(`
  {
    allAuthors{
      avatar{
        url
      }
      name
    }
  }
`).then(result => {
  this.setState({ 
    authorsUrl: result.allAuthors[0].avatar.url,
    authorsName: result.allAuthors[0].name
  })
}); 
}

  render() {
    return (
      <div id="MMPage__Profile">
        <div className="MMPage__Banner">
          <div className="MMPage__photo">
          <img src={`${this.state.authorsUrl}`} alt={`${this.state.authorsName}`}/>
          </div>
          <div className="MMPage__name">
            <h1 className="name__h1">{`${this.state.authorsName}`}</h1>
          </div>
            <a className="MMPage__btn" href="#MMPage__Signup">SIGN UP TODAY</a>
        </div>
        <div className="MMPage__underBanner">
          <div className="MMPage__video">
            <img className="video__playbtn" src='/images/play-button.svg' alt='Video Button'/>
            <p className="video__play">PLAY VIDEO</p>
          </div>
          <div className="MMPage__tips">
            <p>12 Handy Tips For Generating Leads Through Cold Calling<br/>
              <svg className="MMPage__svg" width="65" height="13">
                <rect className="MMPage__rect" width="65" height="13"></rect>
              </svg>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;