// import Ember from 'ember';
import Controller from '@ember/controller';
import {later} from '@ember/runloop'

export default Controller.extend({
  
  init: function(){
    //This will update the time
    this.updatedTime();
  },

  updatedTime: function(){
    var _this = this;

    //this method will update the time every second.
    later(function(){
      _this.set('yourLocalTime', new Date().toLocaleTimeString());
      _this.updatedTime();
    }, 1000)
  },

  yourLocalTime: new Date().toLocaleTimeString()


});


