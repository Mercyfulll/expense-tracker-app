const Message = document.querySelector('.error');

if(Message.innerHTML !== '' ){
    setTimeout(function(){
      Message.innerHTML = ''
    
    }, 3500);
}