const paras = document.querySelectorAll('p')

paras.forEach(p=>{
    if(p.innerText.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }

})

const title = document.querySelector('.title')
