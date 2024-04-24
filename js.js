let btn = document.getElementById('btn');
let h1 =document.querySelector('h1');



btn.addEventListener('click', function(){
    let inp = parseInt(document.getElementById('inp').value);
    let inp2 = parseInt(document.getElementById('inp2').value);

    h1.innerHTML = Math.floor(inp +Math.random() * (inp2 - inp + 1));
    
});