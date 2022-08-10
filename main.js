
function myFunction() {

    var className = document.getElementById("class").value;
    console.log("Class ", className);

    var subjectName = document.getElementById("subject").value;
    console.log("Subject ", subjectName);

    var dateOfTheday = document.getElementById("date").value;
    console.log("Class ", dateOfTheday);

    var paragraph = document.getElementById("question");


 if(className === "HopperLab"){

 setTimeout(function() {  
    document.getElementById("question").innerHTML = " Quesion 1) Write a JavaScript program that accept two integers and display the larger";
}, 3000);
    
    }
}


var hopperLab = { name: "bar",func: function() {
    var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
hopperLab.func();

// Question3

// This function will print 

//   outer func:  this.name = bar
//   outer func:  self.name = bar
//   inner func:  this.name = undefined
//   inner func:  self.name = bar
//   inner func:  self.name = bar

  and it will output undefined on line 45 because instead of using keyword "self" which refers to the object or class it used this.name
  which will not work even if it is declared to be equal to self in the variable. 



//   question4 

identifier "this" is being used to refer to property of the object hopperLab which is name.


