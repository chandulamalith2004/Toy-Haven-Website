document
.getElementById("feedback-form")
.addEventListener("submit", function(event){


event.preventDefault();

let name =
document.getElementById("feedback-name").value.trim();


let email =
document.getElementById("feedback-email").value.trim();


let message =
document.getElementById("feedback-message").value.trim();



if(
name === "" ||
email === "" ||
message === ""
){

alert("Please complete all feedback fields");

return;

}




let feedback = {


name:
document.getElementById("feedback-name").value,


email:
document.getElementById("feedback-email").value,


message:
document.getElementById("feedback-message").value


};



let feedbackList =
JSON.parse(localStorage.getItem("feedback")) || [];



feedbackList.push(feedback);



localStorage.setItem(
"feedback",
JSON.stringify(feedbackList)
);



alert("Feedback submitted successfully!");


this.reset();


});



function showAnswer(id){


let answer =
document.getElementById("answer"+id);



if(answer.style.display === "block"){

answer.style.display="none";

}

else{

answer.style.display="block";

}


}