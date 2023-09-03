const welcome = document.getElementById('Welcome');
const aboutme = document.getElementById('btn2');
const myskills = document.getElementById('btn3');
const contact = document.getElementById('btn4');
const mywork = document.getElementById('btn5');


const talk = ['My name is Sasan', "I'm a programer", 'Hello everyone!'];

let i = 0;

function doSomething1() {
   
    welcome.textContent = talk[i];
    if(i==2){
        i=0;
    }
    else{
        i++;
    }
};



setInterval(doSomething1, 2000);


myskills.addEventListener('click',function(){
    window.location.href = 'index3.html';
});

aboutme.addEventListener('click',function(){
    window.location.href = 'index2.html';
});

contact.addEventListener('click',function(){
    window.location.href = 'index4.html';
});

mywork.addEventListener('click',function(){
    window.location.href = 'index5.html';
});









