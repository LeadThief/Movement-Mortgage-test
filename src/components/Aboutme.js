import React from 'react';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

class Banner extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      content: null,
      whySo: null,
      hours: null,
      address: null,
      mapKey: 'AIzaSyA4zz5Y8wRfDJX5TdVEgPUWsUWqIv5NK2E'
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
    allPosts{
      content,
      whySo
    }
    allAuthors{
      address,
      hours
    }
  }
`).then(result => {
  this.setState({ 
    content: result.allPosts[0].content,
    whySo: result.allPosts[0].whySo,
    hours: result.allAuthors[0].hours,
    address: result.allAuthors[0].address
   })
}); 
}

  render() {
    const tstate = this.state;
    return (
      <div id="MMPage__About">
        <div className="About__item item1">
          <h3 className="About__h3">ABOUT ME</h3>
          <h2 className="About__h2">A few things to know</h2>
          <p className="About__p">{`${tstate.content}`}</p>
        </div>
        <div className="About__item item2">
          <h3 className="About__h3">FACTS</h3>
          <h2 className="About__h2">What makes us so good</h2>
          <p className="About__p">{`${tstate.whySo}`}</p>
          <ul className="About__ul">
            <li className="About__li"><img src="/images/facts-chatbox.svg" alt="Chatbox"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li className="About__li"><img src="/images/facts-notes.svg" alt="Notes"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li className="About__li"><img src="/images/facts-chatbox.svg" alt="Chatbox"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>
        <div className="About__item item3">
        <div className="About__address">
          <h3 className="About__h3">LOCATION</h3>
          <h2 className="About__h2 About__h2--mb">We welcome you</h2>
          <p className="About__p">{`${tstate.address}`}</p>
          <p className="About__p About__p--mt">Hours: {`${tstate.hours}`}</p>
          <a className="About__btn" href="#linkToCome">GET DIRECTIONS</a>
        </div>
        <div className="About__map">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${tstate.mapKey}&q=${tstate.address}`} allowFullScreen>
          </iframe>
        </div>
        </div> 
      </div>
    )
  }
}

export default Banner;