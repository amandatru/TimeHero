chrome.browserAction.onClicked.addListener(function(activeTab) {
  var newURL = chrome.extension.getURL('event.html');
  chrome.tabs.create({ url: newURL });
}); 


function add() {
  var y = document.getElementById("entry").value;
  var t = document.createTextNode(y);
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.appendChild(x);
  cell1.appendChild(t);
}

function removeItem() {
  var s = document.getElementById("myTable");
  var t = s.getElementsByTagName("INPUT");
  for(var i=0; i < t.length; i++) {
    if(t[i].type == 'checkbox') {
      if (t[i].checked) {
        s.deleteRow(i);
      } 
    }
  }
}




