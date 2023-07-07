const menuprincipal = document.querySelectorAll('.anclas');

menuprincipal.forEach(function(item){
    item.addEventListener('click', function(e){
    const actualItem = document.querySelector('.active');  
    actualItem.classList.remove('active'); 
    e.target.classList.add('active'); 
    });
});

const iconoscontacto = document.querySelectorAll('.iconos');

iconoscontacto.forEach(function(item){
    item.addEventListener('mouseover', function(e){
    const actualItem = document.querySelector('.active');  
    actualItem.classList.remove('active'); 
    e.target.classList.add('active'); 
    });
});

