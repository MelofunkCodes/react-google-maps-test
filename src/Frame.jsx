import React from 'react';

import './Frame.css';

class Frame extends React.Component {

	render(){
		return(
			<div className="container" style={{ width: 960, height: 630}}>
				<div className="whitebox" style={{overflow:`auto`, width: 952, height: 622}}>
					<iframe src={this.props.url} className="iframe-box"></iframe>
				</div>
	            <button type="button" id="cboxClose">
	            	incon here
	            </button>
           </div>
		);
	}
}

export default Frame;


//NOTES:
/*
--NOT ABLE TO display amazon, ebay, google websites in iFrame because of error message "Refused to display [url] in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN'."
-It's these domains that don't allow this

--Mathieu said another way around, (that would be more time-consuming and not entirely perfect), is to create a crawler, that you would call from your react front-end
1. Fetch with the url being your server endpoint
		url = https://me.com?http://www.ebay.ca/itm/Nike-Air-Max-95-Running-Mens-Shoes-Size-/192095769123?var=&hash=item2cb9ccd223%3Am%3AmjBBZqK3nJueos8QRX9DYlA
2. Your server code, expressJS, would take that param, and send a fetch to return HTML back in the response
3. Parse it. BC HTML similar to XML, can parse it similar so that areas that show <img src ="/images/242.png">, you can just add the domain name like so <img src="http://www.google.com/images/242.png"

---will not do for Shoestagram project. Not enough time



*/ 