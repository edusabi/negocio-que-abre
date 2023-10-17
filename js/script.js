let div1 = document.getElementById('sub-div-1')
let div2 = document.getElementById('sub-div-2')
let div3 = document.getElementById('sub-div-3')

let subDiv1 = document.querySelector('.sub-div-1')
let subDiv2 = document.querySelector('.sub-div-2')
let subDiv3 = document.querySelector('.sub-div-3')

div1.addEventListener('click', ()=>{
    subDiv1.classList.toggle('active')
    if(subDiv1.classList.contains('active')){
        subDiv2.classList.remove('active')
        subDiv3.classList.remove('active')
    }
    
})

div2.addEventListener('click', ()=>{
    subDiv2.classList.toggle('active') 

    if(subDiv2.classList.contains('active')){
        subDiv1.classList.remove('active')
        subDiv3.classList.remove('active')
    }
    
})

div3.addEventListener('click', ()=>{
    subDiv3.classList.toggle('active')

    if(subDiv3.classList.contains('active')){
        subDiv1.classList.remove('active')
        subDiv2.classList.remove('active')
    }
})
