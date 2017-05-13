import React, { Component } from 'react';

class VenueAvailability extends Component {

  render() {
    let times = ["0800", "0830", "0900", "0930", "1000", "1030", "1100", "1130", "1200", "1230", "1300", "1330", "1400", "1430", "1500", "1530", "1600", "1630", "1700", "1730", "1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300"]
    let timeAvailability = times.map((time, index, timeArray) => <span key={index}>{time}, </span>);

    return (
      <div>
        <p>{timeAvailability} 2330.</p>
      </div>
    );
  }
}

export default VenueAvailability;
