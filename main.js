

var className = document.getElementById("class").textContent
         console.log("Class ", className);

var subjectName = document.getElementById("subject").textContent
         console.log("Subject ", subjectName);

var dateOfTheday = document.getElementById("date").value
console.log("Class ", dateOfTheday);

function quizQuestion(question,submit){

	function displayQuestion(question){
		var myQuestion = [
            {
                question: "Q1) what is Front-end?",
	}];
	
	displayQuestion(myQuestion);

	submit.onclick = function(){
		showResults(question);
	}
}
}  