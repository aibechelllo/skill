document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.section-how__steps-btn').forEach(function(stepsBtn){
        stepsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.section-how__steps-info-item').forEach(function(stepsInfoItem){
                stepsInfoItem.classList.remove('section-how__steps-info-item-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-how__steps-info-item-active')
        })
    })
});