import { observable, computed, autorun } from 'mobx'
import allVenues from './venuesData'

class Store {
  @observable day = 0
  @observable venues = allVenues
  @observable filter = ''

  @computed get filteredVenues(){
    var matchesFilter = new RegExp(this.filter, 'i')
    return this.venues.filter(venue => !this.filter || matchesFilter.test(venue))
  }
}

var store = new Store

export default store

autorun(()=>{
  console.log(store.filter);
})
