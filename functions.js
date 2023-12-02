var text1 = "";
var text2 = "";
function getparagraph1(form) {
  text1 = form[0].value; //first input element
 return form[0].value;
 }
 function getparagraph2(form) {
    text2 = form[1].value; //first input element
   return form[1].value;
   }
function myFunc(form){
var inputText = getparagraph1(form);
var inputAnotherText = getparagraph2(form);
document.getElementById("log").innerHTML = getAction();
}
function getAction(){	//let's use global variable
	let action = "<p>" + text1 +"</p><p>" +  text2 + "</p>";
	return action;
}
