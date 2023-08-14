document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.section-how__steps-btn').forEach(function(stepsBtn){
        stepsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            console.log(path)
        })
    })
});