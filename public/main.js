document.getElementById("contactForm").addEventListener("submit", async function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let error = document.getElementById("error");
let success = document.getElementById("success");

error.textContent = "";
success.textContent = "";

/* check form filled */

if(name === ""){
error.textContent = "Please enter your name";
return;
}

if(email === ""){
error.textContent = "Please enter your email";
return;
}

if(!email.includes("@")){
error.textContent = "Email must contain @";
return;
}

if(message === ""){
error.textContent = "Please enter your message";
return;
}

/* send data to backend */

try{

const response = await fetch("/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
name:name,
email:email,
message:message
})

});

const result = await response.text();

success.textContent = "Message sent successfully!";

document.getElementById("contactForm").reset();

}catch(err){

error.textContent = "Failed to send message.";

}

});
