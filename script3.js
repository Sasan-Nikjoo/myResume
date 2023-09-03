const return3 = document.getElementById('return3');

return3.addEventListener('click',function(){
    window.location.href = 'index.html';
});


const java = document.getElementById('java');
const bigjava = document.getElementById('bigjava');
java.addEventListener('click',function(){
    if(bigjava.style.visibility == "visible"){
        bigjava.style.visibility = "hidden";
    }
    else{
        bigjava.style.visibility = "visible";
    }
});
