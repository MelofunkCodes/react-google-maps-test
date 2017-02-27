import React from 'react';
import Collapsible from 'react-collapsible';
import Scroll from 'react-scroll';

import './Collap.css';
import GMap from './GMap';
import Frame from './Frame';


var scroll = Scroll.animateScroll;

class Collap extends React.Component{
  constructor(){
    super();

    this.state={
      showIframe: false
    };
  }

  onClick(){
    this.setState({
      showIframe: true
    });
  }

  scrollTo() {
    scroll.scrollTo(500);
  }

  render() {
    return(
      <div>

        <a onClick={this.scrollTo.bind(this)}>
        <Collapsible lazyRender 
        transitionTime={600} 
        trigger="Buy Online" 
        easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} 
        overflowWhenOpen="visible"
        triggerClassName="CustomTriggerCSS"
        triggerOpenedClassName="CustomTriggerCSS--open"> 
          <p>Add the prop of <strong style={{fontWeight: 'bold'}}>lazyRender</strong> and the content will only be rendered when the trigger is pressed</p>
            <div>
              Amazon
              Nike AirMax Women's 7
              $79.99 USD
              <div className="linkButton" onClick={this.onClick.bind(this)}><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></div>
            
            {this.state.showIframe ? <Frame src="https://www.amazon.com/Nike-Womens-Black-White-Running/dp/B01AJ65EBO/ref=sr_1_12?s=apparel&ie=UTF8&qid=1488137498&sr=1-12&nodeID=7147440011&keywords=nike+women%27s+air+max" /> : null}
            </div>

         
          <a href="https://www.amazon.com">
            <div>
              Ebay
              Nike AirMax Women's 7 Red
              $69.98 USD
              <div className="linkButton"><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></div>
            </div>
          </a>
          <a href="https://www.amazon.com">
            <div>
              SneakersNStuff
              Nike AirMax Women's 7 Camo
              $279.99 USD
              <div className="linkButton"><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></div>
            </div>
          </a>
        </Collapsible>
        </a>

        <a onClick={this.scrollTo.bind(this)}>
        <Collapsible lazyRender
        transitionTime={400} 
        trigger="Buy In Store" 
        easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
        triggerClassName="CustomTriggerCSS"
        triggerOpenedClassName="CustomTriggerCSS--open">
          <div className="map-box">
            <GMap />
          </div>
        </Collapsible>
        </a>

      </div>
    );
  }
}
export default Collap;