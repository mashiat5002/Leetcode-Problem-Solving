const passengers = [19, 13, 26, 4, 25, 11, 21];
capacity = 2;
const buses= [10,20,30]
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
  buses = buses.sort((a, b) => a - b);
  passengers = passengers.sort((a, b) => a - b);
  var l = 0;
  var r = passengers.length - 1;

  for (var i = 0; i < buses.length; i++) {
    if(passengers.includes(passengers[l+capacity-1]) && passengers[l+capacity-1]<=buses[i]){
        l=l+capacity;
        continue;

    }
   

    for (var j = 0; j < capacity; j++) {
      if (!passengers[l] || passengers[l] > buses[buses.length - 1]) {
        if ([...new Set(passengers)].includes(buses[buses.length - 1])) {
          var Track = buses[buses.length - 1];
          while (true) {
            if (![...new Set(passengers)].includes(Track)) {
              return Track;
            } else Track--;
          }
        }
        return buses[buses.length - 1];
      }
      if (passengers[l] <= buses[i]) {
        l++;
      } else break;
    }
  }
  l = l - 1;
  var Track = passengers[l] - 1;
  while (true) {
    if (!passengers.includes(Track)) {
      return Track;
    } else Track--;
  }
};

console.log(latestTimeCatchTheBus(buses, passengers, capacity));
