// function writeNumber() {
    
//     var value = parseInt(document.getElementById("value").value);
//     // var valuePlus5 = 

//     var x = document.getElementById("outputSegment");
//     x.innerHTML = value;
//     // document.getElementById("outputSegment").innerHTML = 1;
    
//   }

//   function writeNumberSecond(chooser) {
    
//     var value = parseInt(document.getElementById("value").value);
//     // var valuePlus5 = 
//     if (chooser == true) {
//       document.getElementById("value").value = value + 5;
//       value = value + 10;
//     }

//     var x = document.getElementById("outputSegment");
//     x.innerHTML = value;
//     // document.getElementById("outputSegment").innerHTML = 1;
    
//   }


/* THE FOLLOWING LINES WILL DISPLAY THE TABS. */
/* /////////////////////////////////////////////////////////////////// */
  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
/* /////////////////////////////////////////////////////////////////// */
/* THE ABOVE LINES WILL DISPLAY THE TABS. */