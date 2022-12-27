"use strict"

class AlarmClock {
  constructor() {
    this.alarmCollection = [];  //все звонки здесь, добавленные addClock
    this.intervalId = null;       //таймер? 
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error ("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время')
    }

    this.alarmCollection.push({time, callback, canCall: true});
  }

  removeClock(time) {          
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {  
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  start() {
    if (this.intervalId !== null) {
      return; 
    }

    let func = () => this.alarmCollection.forEach(alarm => {
      if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
        alarm.canCall = false;
        alarm.callback();
      }
    });

    this.intervalId = setInterval(func, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}