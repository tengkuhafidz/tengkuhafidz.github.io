import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ScrollToTop from 'react-scroll-up'
import { DropdownButton, MenuItem } from 'react-bootstrap'

import VenueAvailability from './VenueAvailability'

@observer
class App extends Component {

  handleFilter(e){
    this.props.store.filter = e.target.value;
  }

  handleDayChange(day){
    this.props.store.day = day
  }

  getDayName(day){
    let dayName = 'Monday'

    switch(day) {
      case 1:
          dayName = 'Tuesday'
          break;
      case 2:
          dayName = 'Wednesday'
          break;
      case 3:
          dayName = 'Thursday'
          break;
      case 4:
          dayName = 'Friday'
          break;
      default:
          dayName = 'Monday'
    }
    return dayName
  }

  render() {

    let { filteredVenues, day } = this.props.store;

    let dayName = this.getDayName(day)

    let venuesList = filteredVenues.map(venue => (
      <li className="list-group-item left-align" key={venue}>
        <h4 className="list-group-item-heading">{venue}</h4>
        <VenueAvailability venue={venue}/>
      </li>
    ))

    return (
      <div className="App col-md-6 col-md-offset-3">
        <div id="title">
          <h2 className="header">NUS Venues</h2>
          <p className="lead">
            Find venues that are available for you to occupy on <u>{dayName}s</u>.
          </p>
        </div>
        <div id="filter">
        <div className="input-group">
          <input type="text" className="form-control"  onChange={this.handleFilter.bind(this)} />
          <div className="input-group-btn">
            <DropdownButton title="Day">
               <MenuItem onClick={this.handleDayChange.bind(this, 0)}>Monday</MenuItem>
               <MenuItem onClick={this.handleDayChange.bind(this, 1)}>Tuesday</MenuItem>
               <MenuItem onClick={this.handleDayChange.bind(this, 2)}>Wednesday</MenuItem>
               <MenuItem onClick={this.handleDayChange.bind(this, 3)}>Thursday</MenuItem>
               <MenuItem onClick={this.handleDayChange.bind(this, 4)}>Friday</MenuItem>
             </DropdownButton>
          </div>
        </div>
        </div>
        <div id="venues">
          <ul className="list-group">{venuesList}</ul>
        </div>
        <ScrollToTop showUnder={160}>
          <span><i className="fa fa-arrow-circle-up fa-3x"></i></span>
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
