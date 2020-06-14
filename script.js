

window.onload = function()
{
	show(0);
}


  let questions = [
 {
   id:1,
   question:"what is RAM ?",
   answer:"Random Access Memory",
   options:[
   "Random Access Memory",
    "Randomly Access Memory",
    "Run Access Memory",
    "None of these"
    ]

 },
{
   id:2,
   question:"what is ROM in computer ?",
   answer:"Read only memory",
   options:[
   "Read only memory ",
    "Random Access Memory",
    "Run Access Memory",
    "None of these"
   ]
},

{

id:3,
   question:"what is computer ?",
   answer:"A Machine",
   options:[
   " A Machine",
    "Random Access Memory",
    "Run Access Memory",
    "None of these"
     

   ]
}
];


function submitform(e) {
  
   

	e.preventDefault();
    
   let name=document.forms["welcome_form"]["name"].value;

   sessionStorage.setItem("name",name);

   location.href="quiz.html";
	
	
}


let question_count=0;
let point = 0;

function next()
{   

	  //answer check
	let user_answer = document.querySelector("li.option.active").innerHTML;
    if(user_answer == questions[question_count].answer)
    {
       point =point+10;
       sessionStorage.setItem("points",point);
    } 
  
   if(question_count == questions.length-1)
   { 
    sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds `);
    clearInterval(id);
   location.href = "end.html";
   return;
   }

	question_count++;
	show(question_count);
}


function show(count)
{
	let question = document.getElementById("questions");


	question.innerHTML = `<h2>Q${question_count+1}. ${questions[count].question}</h2>

               <ul class="option_group">
					<li class="option">${questions[count].options[0]}</li>
					<li class="option">${questions[count].options[1]}</</li>
					<li class="option">${questions[count].options[2]}</</li>
					<li class="option">${questions[count].options[3]}</</li>	
				</ul>`;			

	toggleActive();
}


function toggleActive()
{

    let option = document.querySelectorAll("li.option");
   for(let i=0;i<option.length;i++)
   {
   	option[i].onclick = function()
   	{
     for(let j=0;j<option.length;j++)
     {
     	if(option[j].classList.contains("active"))
     	{
     		option[j].classList.remove("active");
     	}
     }

      option[i].classList.add("active");
   	}
   }

}






























