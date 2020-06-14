

//============================ CHAPTER 1 ============================== //

function error() {
	alert("Error! Please enter a valid password");
}
function greet() {
	alert("Hello Sir How Are You?");
}
function welcome() {
	alert("Welcome to JS Land... \n Happy Coding");
}
function sequence() {
	alert("Welcome to JS Land...");
	alert("Happy Coding \n Prevent this page from creating additional dialogs");
}
function consoles() {
	alert("Hello... I can run JS through my web browser's console");
	console.log("Hello... I can run JS through my web browser's console");
}


//============================ CHAPTER 2 ============================== //


var username;
 myName="Muzammil Asghar"
 message="Muzammil Asghar"
 stuName="Jhone Doe";
 stuAge=15;
 stuSkill="Certified Mobile Application Developpment";
 email="muzammilasghar78636@gmail.com";
var book= "A smarter way to learn JavaScript";
pi="pizza";
for ( var i=0; i >=pi.length ; i++) {
		document.write(pi);
}

function messag() {
	alert(message);
}

function biodata() {
	alert(stuName);
	alert(stuAge + "years old");
	alert(stuSkill);
}

function welcome() {
	alert("Welcome to JS Land... \n Happy Coding");
}
function sequence() {
	alert("Welcome to JS Land...");
	alert("Happy Coding \n Prevent this page from creating additional dialogs");
}

function consoles() {
	alert("Hello... I can run JS through my web browser's console");
	console.log("Hello... I can run JS through my web browser's console");
}

function emailaddress() {
	alert("My email address is "+ email);
}

function bookName() {
	alert("I am trying to learn from a book "+ book);
}

function html() {
	document.write("Yah, I can write HTML content through JavaScript ");
}

function string() {
	alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
}


//============================ CHAPTER 3 ============================== //


var age=15;
 visitNumber=14;
 birthYear=1999;
 visitorName="Jhone Doe";
 productTitle="T-shirts";
 site="XYZ clothing Store"
 quantity=5;

function myage() {
	alert("I am "+age+" years old");
}

function visit() {
	alert("You have visited this site "+visitNumber+" times");
}

function birthyear() {
	document.write("My birth Year is "+birthYear+"<br>"+" Datatype of my declared variable is number");
}
function customer() {
	document.write(visitorName+" ordered "+ quantity +" "+productTitle+" on "+site);
}



//============================ CHAPTER 4 ============================== //


var greeting="Hello World";
 test="Testing...";
 year=2020;


function three() {
	alert(greeting+'\n'+test+'\n'+year);
}

function fivelegal() {
	alert("pi = 3.14"+'\n'+"person = 'John Doe'"+'\n'+"answer = 'Yes I am!'"+'\n'+"carName = 'Volvo'"+'\n'+"price = 200");
}

function fiveilllegal() {
	alert("1pi = 3.14"+'\n'+"-person = 'John Doe'"+'\n'+"$answer = 'Yes I am!'"+'\n'+"0carName = 'Volvo'"+'\n'+"(price = 200");
}

function varrules() {
	document.write('a) A heading stating "Rules for naming JS variables"'+"<br>"+
	'b) Variable names can only contain ______, ______,______ and ______.'+"<br"+
	'For example $my_1stVariable'+"<br>"+
	'c) Variables must begin with a ______, ______ or_____. For example $name, _name or name'+"<br"+
	'd) Variable names are case _________'+"<br"+
	'e) Variable names should not be JS _________');
}



//============================ CHAPTER 5 ============================== //


var firstNumber=3;
 secondNumber=5;
 add=firstNumber+secondNumber;
 subtract=firstNumber-secondNumber;
 multiply=firstNumber*secondNumber;
 divide=firstNumber/secondNumber;
 modulo=firstNumber%secondNumber;
 ticketprice=600;

function addition(){
	alert("addition of "+firstNumber+" and "+secondNumber+" = "+add);
}

function subtraction(){
	alert("subtraction of "+firstNumber+" and "+secondNumber+" = "+subtract);
}

function multiplication(){
	alert("mutilication of "+firstNumber+" and "+secondNumber+" = "+multiply);
}

function division(){
	alert("division of "+firstNumber+" and "+secondNumber+" = "+divide);
}

function modulus(){
	alert("modulus of "+firstNumber+" and "+secondNumber+" = "+modulo);

}

function condition(){
 counter="undefined";
 document.write("value after variable declaration is "+counter+"<br>");
 counter=5;
 document.write("Initial value "+counter+"<br>");
 counter++;
 document.write("Value after increment "+counter+"<br>");
 newvalue=counter+7;
 document.write("Value after addition "+newvalue+"<br>");
 newvalue--;
 document.write("Value after decrement "+newvalue+"<br>");
 remind=newvalue%3;
 document.write("The reminder is "+remind+"<br>");
 
}

function ticketcal(){
	alert("Total cost of buying 5 tickets to a movie is "+ticketprice*5+"PKR");

}

function mtable(){
	document.write('<h2>Table of 4</h2>')
	table=4;
	for (var i = 0; i <=0; i++) {
		// document.write(table+'<br>');
		for (var j =1; j <=10; j++) {
			document.write(table+" * ")
			document.write(j+" = "+table*j+'<br>')
		}
    }
}



//============================ CHAPTER 6-9 ============================== //


var a=10;
 secondNumber=5;

function arithmetic(){
 	document.write("The value of a is "+a+"<br><br>");
 	
 	++a;
 	document.write("The value of ++a is: "+a+"<br>");
 	document.write("Now the value of a is: "+a+"<br><br>");
 	

 	document.write("The value of a++ is: "+a+"<br>");
 	a++;
 	document.write("Now the value of a is: "+a)+'<br>';
 	

 	--a;
 	document.write('<br><br>'+"The value of --a is: "+a);
 	document.write('<br>'+"Now the value of a is: "+a);


 	document.write('<br><br>'+"The value of a-- is: "+a+"<br>");
 	a--;
 	document.write("Now the value of a is: "+a)+'<br>';
 }


var a = 2, b = 1;
 result = --a - --b + ++b + b--;

function resul(){
    document.write(a);

}

function userinput(){
	var name=prompt("Kindly mention your name");
	alert("Welcome "+name);
}

function numberinput(){
	var usernumber=prompt("Enter a number");
	var defaultnumber=5;
	if (usernumber) {
	    document.write('<h2>Your Entered Number Table</h2>')
		for (var i = 0; i <=0; i++) {
		// document.write(table+'<br>');
		for (var j =1; j <=10; j++) {
			document.write(usernumber+" * ")
			document.write(j+" = "+usernumber*j+'<br>')
		}
     }
  }else
  {
  	document.write('<h2>Table of 5</h2>')
		for (var i = 0; i <=0; i++) {
		// document.write(table+'<br>');
		for (var j =1; j <=10; j++) {
			document.write(defaultnumber+" * ")
			document.write(j+" = "+defaultnumber*j+'<br>')

         }
      }  
   }
}


function stumarks(){
  var english=parseInt(prompt("Enter your English marks"));
   maths=parseInt(prompt("Enter your English marks"));
   urdu=parseInt(prompt("Enter your English marks"));
   totalmarks=100;
   overalltotal=totalmarks+totalmarks+totalmarks;
   totalobtained=english+maths+urdu;
   totalpercent=((totalobtained/overalltotal)*100);
   

   document.write("<table>");
     document.write("<tr>");
      
      document.write("<th>");
        document.write("Subject");
      document.write("</th>");
      document.write("<th>");
        document.write("Total Marks");
      document.write("</th>");
      document.write("<th>");
        document.write("Obtained Marks");
      document.write("</th>");
      document.write("<th>");
        document.write("Percentage");
      document.write("</th>");
     

     document.write("</tr>");
       

     document.write("<tr>");
         
         document.write("<td>");
           document.write("English");
         document.write("</td>");
         document.write("<td>");
           document.write(totalmarks);
         document.write("</td>");
         document.write("<td>");
           document.write(english);
         document.write("</td>");
         document.write("<td>");
           document.write((english/totalmarks)*100+" %");
         document.write("</td>");
       
    document.write("</tr>");


     document.write("<tr>");
         
         document.write("<td>");
           document.write("Maths");
         document.write("</td>");
         document.write("<td>");
           document.write(totalmarks);
         document.write("</td>");
         document.write("<td>");
           document.write(maths);
         document.write("</td>");
         document.write("<td>");
           document.write((maths/totalmarks)*100+" %");
         document.write("</td>");
       
    document.write("</tr>");


     document.write("<tr>");
         
         document.write("<td>");
           document.write("Urdu");
         document.write("</td>");
         document.write("<td>");
           document.write(totalmarks);
         document.write("</td>");
         document.write("<td>");
           document.write(urdu);
         document.write("</td>");
         document.write("<td>");
           document.write((urdu/totalmarks)*100+" %");
         document.write("</td>");
       
    document.write("</tr>");


     document.write("<tr>");
         
         document.write("<th>");
           document.write("");
         document.write("</th>");
         document.write("<th>");
           document.write(overalltotal);
         document.write("</th>");
         document.write("<th>");
           document.write(totalobtained);
         document.write("</th>");
         document.write("<th>");
           document.write(totalpercent+" %");
         document.write("</th>");
       
    document.write("</tr>");
   document.write("</table>");

}



//============================ CHAPTER 9-11 ============================== //


function city(){
	var cityName=prompt("Enter your city");
	if (cityName=="karachi" || cityName == "Karachi") {
	    alert("Welcome to the City of Lights "+cityName);
    }else
    {
     alert("Another City");
    }
}

function gender(){
	var gendertype=prompt("Enter your gender");
	if (gendertype=="male" || gendertype == "Male" || gendertype=="m" || gendertype=="M") {
	    alert("Good Morning Sir");
    }else
    {
     alert("Good Mornig Ma'am");
    }
}

function trafficSignal(){
  document.write('<table>');
    document.write("<th>");
      document.write("Signal colour");
    document.write("</th>");
    document.write("<th>");
      document.write("Message");
    document.write("</th>");

	var lightColor=prompt("Enter traffic light color");
	if (lightColor=="red" || lightColor == "Red") {
	    document.write("<tr>");
	      document.write("<td>");
	        document.write(lightColor);
	      document.write("</td>");
	      document.write("<td>");
	        document.write("Must Stop");
	      document.write("</td>");
	    document.write("<tr>");
    }else if(lightColor=="yellow" || lightColor=="Yellow")
    {
        document.write("<tr>");
	      document.write("<td>");
	        document.write(lightColor);
	      document.write("</td>");
	      document.write("<td>");
	        document.write("Ready To Move");
	      document.write("</td>");
	    document.write("<tr>");
    }
    else{
    	document.write("<tr>");
	      document.write("<td>");
	        document.write(lightColor);
	      document.write("</td>");
	      document.write("<td>");
	        document.write("Move Now");
	      document.write("</td>");
	    document.write("<tr>");
    }
   document.write('</table>');
}

function fuel(){
	var remainingFuel=parseInt(prompt("Enter the amount of fuel remaining"));
	if (remainingFuel<0.25) {
		alert("Please refill the fuel in your car");
	}
	else{
		alert("you are all good");
	}
}

function testing(){
	var a = 4;
    if (++a === 5){
      alert("given condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83){
      alert("given condition for variable b is true");
    }

     var c = 12;
     if (c++ === 13){
       alert("condition 1 is true");
    }
     if (c === 13){
       alert("condition 2 is true");
    }
     if (++c < 14){
       alert("condition 3 is true");
    }
     if(c === 14){
       alert("condition 4 is true");
    }

     var materialCost = 20000;
     var laborCost = 2000;
     var totalCost = materialCost + laborCost;
     if (totalCost === laborCost + materialCost){
       alert("The cost equals");
    }

     if (true){
      alert("True");
    }
     if (false){
       alert("False");
    }

     if("car" < "cat"){
      alert("car is smaller than cat");
    }
}

function marks(){
	var subject1=parseInt(prompt("Enter your First Subject marks"));
	    subject2=parseInt(prompt("Enter your Second Subject marks"));
	    subject3=parseInt(prompt("Enter your Third Subject marks"));
	    totalOfSubjects=subject1+subject2+subject3;
	    totalmarksOfSubjects=300;
	    PercentageOfSubjects=(totalOfSubjects/300)*100;

    document.write('<table>');
    document.write("<tr>");
    document.write("<th>");
      document.write("Percentage %");
    document.write("</th>");
    document.write("<th>");
      document.write("Grades");
    document.write("</th>");
    document.write("<th>");
      document.write("Remarks");
    document.write("</th>");
    document.write("</tr>");

	if (PercentageOfSubjects>=80) {
	    document.write("<tr>");
	      document.write("<td>");
	        document.write("Greater Than Or Equal To 80");
	      document.write("</td>");
	      document.write("<td>");
	        document.write("A-One");
	      document.write("</td>");
	      document.write("<td>");
	        document.write("Excellent");
	      document.write("</td>");
	    document.write("</tr>");

	    document.write("<h2>Marks Sheet</h2><br><br>");
	      document.write("<p>Total Marks : "+totalmarksOfSubjects+"</p>");
	      document.write("<p>Marks Obtained : "+totalOfSubjects+"</p>");
	      document.write("<p>Percentage : "+PercentageOfSubjects+" %</p>");
	      document.write("<p>Grade : A-One</p>");
	      document.write("<p>Remarks : Excellent</p>");
    }
    else if (PercentageOfSubjects>=70) {
	    document.write("<tr>");
	      document.write("<td>");
	        document.write("Greater Than Or Equal To 70");
	      document.write("</td>");
	      document.write("<td>");
	        document.write("A");
	      document.write("</td>");
	      document.write("<td>");
	        document.write("Good");
	      document.write("</td>");
	    document.write("</tr>");

	    document.write("<h2>Marks Sheet</h2><br><br>");
	      document.write("<p>Total Marks : "+totalmarksOfSubjects+"</p>");
	      document.write("<p>Marks Obtained : "+totalOfSubjects+"</p>");
	      document.write("<p>Percentage : "+PercentageOfSubjects+" %</p>");
	      document.write("<p>Grade : A</p>");
	      document.write("<p>Remarks : Good</p>");
    }
    else if (PercentageOfSubjects>=60) {
	    document.write("<tr>");
	      document.write("<td>");
	        document.write("Greater Than Or Equal To 60");
	      document.write("</td>");
	      document.write("<td>");
	        document.write("B");
	      document.write("</td>");
	      document.write("<td>");
	        document.write("You need to improve");
	      document.write("</td>");
	    document.write("</tr>");

	    document.write("<h2>Marks Sheet</h2><br><br>");
	      document.write("<p>Total Marks : "+totalmarksOfSubjects+"</p>");
	      document.write("<p>Marks Obtained : "+totalOfSubjects+"</p>");
	      document.write("<p>Percentage : "+PercentageOfSubjects+" %</p>");
	      document.write("<p>Grade : B</p>");
	      document.write("<p>Remarks : You need to improve</p>");
    }
    else if (PercentageOfSubjects<60) {
	    document.write("<tr>");
	      document.write("<td>");
	        document.write("Less Than 60");
	      document.write("</td>");
	      document.write("<td>");
	        document.write("Fail");
	      document.write("</td>");
	      document.write("<td>");
	        document.write("Sorry!");
	      document.write("</td>");
	    document.write("<tr>");

	    document.write("<h2>Marks Sheet</h2><br><br>");
	      document.write("<p>Total Marks : "+totalmarksOfSubjects+"</p>");
	      document.write("<p>Marks Obtained : "+totalOfSubjects+"</p>");
	      document.write("<p>Percentage : "+PercentageOfSubjects+" %</p>");
	      document.write("<p>Grade : Fail</p>");
	      document.write("<p>Remarks : Sorry!</p>");
    }
   document.write('</table>');
}

function guessGame(){
	secretNumber=6;
	userGuess=parseInt(prompt("Guess a number"));
	if (userGuess==secretNumber) {
		alert("Bingo! Correct answer");
	}
	else if (userGuess==secretNumber+1) {
		alert("Close enough to the correct answer");
	}
	else{
		alet("Try again");
	}
}

function dividedBy3(){
	checkNumber=parseInt(prompt("Guess a number"));
	if (checkNumber%3==0) {
		alert("Entered number is divisible by 3");
	}
	else{
		alert("Entered number is not divisible by 3");
	}
}

function evenOdd(){
	userNumber=parseInt(prompt("Guess a number"));
	if (userNumber%2==0) {
		alert("Entered number is even");
	}
	else{
		alert("Entered number is odd");
	}
}

function weather(){
	temperature=parseInt(prompt("Enter temperature"));
	if (temperature>=40) {
		alert("It is too hot outside.");
	}
	else if (temperature>=30){
		alert("The Weather today is Normal.");
	}
	else if (temperature>=20){
		alert("Today’s Weather is cool.");
	}
	else if (temperature>=10){
		alert("OMG! Today’s weather is so Cool.");
	}
}

function calculate(){
	firstNumber1=parseInt(prompt("Enter first number"));
	secondNumber2=parseInt(prompt("Enter second number"));
	operation=prompt("Enter Operation like(+,-,*,etc)");
	if (operation=="+") {
		alert(firstNumber1+secondNumber2);
	}
	else if (operation=="-"){
		alert(firstNumber1-secondNumber2);
	}
	else if (operation=="*"){
		alert(firstNumber1*secondNumber2);
	}
	else if (operation=="/"){
		alert(firstNumber1/secondNumber2);
	}
	else if (operation=="%"){
		alert(firstNumber1%secondNumber2);
	}
}


//============================ CHAPTER 12-13 ============================== //

function datatype(){
	var numbertype=document.getElementById("datatypeText").value;
	if (numbertype) {
	    alert(document.getElementById.innerHTML =typeof(numbertype));
    }
    else{
    	alert(secondInteger +" is larger");
    }
}

function larger(){
	var firstInteger=parseInt(prompt("Enter first number"));
	    secondInteger=parseInt(prompt("Enter second number"));
	if (firstInteger>secondInteger) {
	    alert(firstInteger +" is larger");
    }
    else{
    	alert(secondInteger +" is larger");
    }
}

function positiveNegative(){
	var firstInteger=parseInt(prompt("Enter first number"));
	if (firstInteger>0) {
	    alert(firstInteger +" is posive");
    }
    else if (firstInteger<0){
    	alert(firstInteger +" is negative");
    }
    else{
    	alert(firstInteger +" is 0")
    }
}

function vowel(){
	var char=prompt("Enter first number");
	if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u") {
	    alert(char +" is vowel");
    }
    else{
    	alert(char +" is not vowel")
    }
}

function pass(){
	var savepass="admin";
	userpass=prompt("Enter your password");
	if (userpass == '' || userpass == " " || userpass == "  ") {
	    alert("Please enter your password");
    }
	if (userpass == savepass) {
	    alert("Correct! The password you entered matches the original password");
    }
    else{
    	alert("Incorrect password")
    }
}

function ifCorrection(){
   var greeting="";
   var hour = 13;
   if (hour < 18) { 
      alert(greeting += "Good day");
   }
   else{
      alert(greeting += "Good evening");
   }
 }

function time(){
   var hours=parseInt(prompt("Enter time in 24 hours format"));
       standard=1200;
       if (hours>standard) {
       	alert((hours-standard)+ " PM");
       }
       else if (hours<standard){
       	alert(hours + " PM");
       }
 }


//============================ CHAPTER 17-20 ============================== //


function stuArray(){
	var stuName = new Array();
	
}

function stuobjArray(){
	var objstuName = Array();
	
}

function stArray(){
	var strArray = ["string1","string2","string3","string4","string5"];
	    for (var i in strArray) {
                document.write(strArray[i]+"<br>")
	    }
}

function stArray(){
	var strArray = ["string1","string2","string3","string4","string5"];
	    for (var i in strArray) {
                document.write(strArray[i]+" , ")
	    }
}

function numberArray(){
	var numArray = [1,2,3,4,5,6,7];
	    for (var i in numArray) {
                document.write(numArray[i]+" , ")
	    }
}

function boleanArray(){
	var boolArray = boolean();
	    for (var i in boolArray) {
                document.write(boolArray[i]+" , ")
	    }
}

//============================ CHAPTER 17-20 ============================== //


function emptyArray(){
	var newArray=[[],[],[],[]];
	for (i in newArray){
		document.write(newArray[i]);
	}
}

function multiArray(){
	var arrays=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
	for (i in arrays){
		document.write(arrays[i]+"<br>");
	}
}

function counting(){
	document.write("<h2>Counting 1 to 10</h2>")
	for (var i = 0; i <= 10; i++) {
		document.write(i+"<br>");
	}
}

function tableCount(){
	var userTable=parseInt(prompt("Enter a number to show its multiplication"));
	    tableLength=parseInt(prompt("Enter a number to show its multiplication"));
	    document.write("<h2>Table of "+userTable+"</h2>");
	for (var i = 0; i <=0; i++) {
		for (var j =1; j <=tableLength; j++) {
			document.write(userTable+" * ")
			document.write(j+" = "+userTable*j+'<br>')
		}
    }
}

function fruitsArray(){
	var fruits = ["apple", "banana", "mango", "orange","strawberry"]
	for (var i in fruits) {
	 	document.write(fruits[i]+"<br>");
	 }

	 for (var j in fruits) {
	 	document.write(indexof(fruits[j]+"<br>"));
	 } 
    
}

function numCounting(){
	document.write("<h2>Counting</h2>");
	for (var i=0; i<=15; i++) {
	 	document.write(i+" , ");
	 }

	 document.write("<h2>Reverse Counting</h2>");
	 for (var i=10; i>=1; i--) {
	 	 document.write(i+" , ");
	 }

	 document.write("<h2>Even</h2>");
	 for (var i=0; i<=20; i=i+2) {
	 	 document.write(i+" , ");
	 }

	 document.write("<h2>Odd</h2>");
	 for (var i=1; i<=20; i=i+2) {
	 	 document.write(i+" , ");
	 }

	 document.write("<h2>Series</h2>");
	 for (var i=2; i<=20; i=i+2) {
	 	 document.write(i+"k , ");
	 }
}

function menuOrder(){
	var menu=["cake", "apple pie", "cookie", "chips", "patties"];
	    order=prompt("Welcome to ABC bakery.What do you want to order Siri Ma'am?");
	    productindex=menu.findIndex(checkProduct);
	    product=menu.find(checkProduct);
		if (checkProduct) {
	 	document.write(order+" is avalaible at index "+productindex+ " in our bakery");
	  }
	  else{
	  	document.write("We are Sorry "+order+" is not avalaible in our bakery");
   }
   function checkProduct(pro){
   	   return pro==menu
   }
}

function largestNum(){
	var numArray=[24, 53, 78, 91, 12];
	for (var i in numArray) {
	 	document.write( numArray[i]+" , ");
	  	// document.write("Not available");
   }
}

function smallestNum(){
	var numArray=[24, 53, 78, 91, 12];
	for (var i in numArray) {
	 	document.write( numArray[i]+" , ");
	  	// document.write("Not available");
   }
}

function multiple5(){
	document.write("<h2>Multiples of 5 ranging 1 to 100.</h2>");
	for (var i=5; i<=100; i=i+5) {
	 	document.write( i+" , ");
   }
}