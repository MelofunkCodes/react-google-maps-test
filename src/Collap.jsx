import React from 'react';
import Collapsible from 'react-collapsible';

import './Collap.css';
import GMap from './GMap';

var Collap = React.createClass({


  render: function() {
    return(
      <div>

        <Collapsible lazyRender 
        transitionTime={600} 
        trigger="Buy Online" 
        easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} 
        overflowWhenOpen="visible"
        triggerClassName="CustomTriggerCSS"
        triggerOpenedClassName="CustomTriggerCSS--open"> 
          <p>Add the prop of <strong style={{fontWeight: 'bold'}}>lazyRender</strong> and the content will only be rendered when the trigger is pressed</p>
          <a href="https://www.amazon.com">
            <div>
              Amazon
              Nike AirMax Women's 7
              $79.99 USD
              <div className="linkButton"><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></div>
            </div>
          </a>
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

      </div>
    );
  }
});
export default Collap;