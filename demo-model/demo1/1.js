const traffic = document.getElementById('traffic');

function action(traffic,stateList){
  var currentStateIndex = 0;
  
  setInterval(function(){
    var state = stateList[currentStateIndex];
    traffic.className = state;
    currentStateIndex = (currentStateIndex+1)%stateList.length;
  },1000)
}

action(traffic,['stop','wait','pass']);
