(function (){

    afficherOnglet = function(a){
        let li = a.parentNode
        let div = a.parentNode.parentNode.parentNode

        if(li.parentNode.classList.contains('active')){
            return false
        }
        // remove active class on the acitve ongles
        div.querySelector('.tabs .active').classList.remove('active')
        // add class active to onglet active
        li.classList.add('active')
        // remove class active on the active content
        div.querySelector('.tab-content.active').classList.remove('active')
        // add class active active on the active content corresponding to my click
        div.querySelector(a.getAttribute('href')).classList.add('active')
    }

    let tabs = document.querySelectorAll('.tabs a')
    for (let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener('click', function(e){
            afficherOnglet(this)
        })
    }

    let hash = window.location.hash
    let a = document.querySelector('a[href="' + hash + '"]')
    if(a !== null && !a.classList.contains('active')){
        afficherOnglet(a)
    }
})()