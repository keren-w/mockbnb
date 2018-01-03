import React from 'react';
export default function Rating({value}) {

    let starsArr = []
    if(value <= 0 || value >5) {
        throw new Error("number must be an integer between 1-5"); 
    }

    for (let i=0; i<5; ++i) {
        var icon = (i >= value) ? (<i key={i} className="fa fa-star-o" aria-hidden="true"></i>) : (<i key={i} className="fa fa-star" aria-hidden="true"></i>);
        starsArr.push(icon)
    }

  return (
      <div className="ratings">{starsArr}</div>
  )
}