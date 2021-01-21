document.querySelector('.date').innerHTML = new Date().toLocaleString();
let img = document.querySelector('.img-main');
var texto = document.getElementById('title-main')

function changeImg(){
    if(img.src.match('/semana-01/Projeto-semana-01/img/Aristotle.jpg')){
        img.src = '/semana-01/Projeto-semana-01/img/AristotleMain.jpg'
    }else {
        img.src = '/semana-01/Projeto-semana-01/img/Aristotle.jpg'
    }
}

function changeText(){
    if(texto.innerHTML ==  'ARISTÓTELES'){
        texto.innerHTML =  'o defensor da instrução para a virtude'
    } else{
        texto.innerHTML = 'ARISTÓTELES'
    }
}