const linkers = document.querySelectorAll('[data-tab]')

linkers.forEach(function(item){
    item.addEventListener('click',function(){
        const id = item.dataset.tab
        const text =  document.querySelectorAll('.info')
        text.forEach(function(item){
            item.classList.add('hidden')
        })
        document.querySelector('#' + id).classList.remove('hidden')
    })
})