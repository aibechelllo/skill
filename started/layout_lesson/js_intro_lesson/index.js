// window.addEventListener('DOMContentLoaded', function(){
//     console.log(document.querySelector('.block'))
// })

// window.addEventListener('DOMContentLoaded', function(){
//     console.log(document.querySelectorAll('.text'))
// })

// window.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('.text').style.color = 'blue'; 
// })

// window.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('#text').classList.add('alert')
//     document.querySelector('#text').classList.remove('alert')
// })

window.addEventListener('DOMContentLoaded', function(){
    this.document.querySelectorAll('.text').forEach(function(element){
        element.classList.add('alert')
    })
})