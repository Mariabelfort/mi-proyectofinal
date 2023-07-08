const menuprincipal = document.querySelectorAll('.anclas');

menuprincipal.forEach(function(item){
    item.addEventListener('click', function(e){
    const actualItem = document.querySelector('.active');  
    actualItem.classList.remove('active'); 
    e.target.classList.add('active'); 
    });
});



