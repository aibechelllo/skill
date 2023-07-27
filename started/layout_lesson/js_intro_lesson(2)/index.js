window.addEventListener('DOMContentLoaded', function(){
    this.document.querySelector('#burger').addEventListener('click', function(){
      document.querySelector('#menu').classList.toggle('is-active')  
    })

    this.document.querySelectorAll('.text').forEach(function(el){
        el.addEventListener('click', function(event){
            event.target.classList.toggle('alert')
        })
    })
})