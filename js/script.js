//Burger menu
let burger = document.querySelector('.header__burger-menu');
let menu = document.querySelector('.header__menu');
let body = document.body;
burger.addEventListener("click", function(e){
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
})

// search
let searсButton = document.querySelector('.header__search');
let searchInput = document.querySelector('.header__search-input');

searсButton.addEventListener("click", function(e){
   searchInput.classList.toggle("_active");
   e.preventDefault;
})

//footer menu

let buttons = document.querySelectorAll('.footer__menu-button');
let menus = [];
for (i=0; i<buttons.length; ++i){
   menus[i]=buttons[i].nextElementSibling;
}
buttons.forEach(function(item){
   let button = item;
   button.addEventListener("click", function(e){
      if(button.classList.contains('_active')){
         button.classList.remove('_active');
         button.nextElementSibling.classList.remove('_active');
      }else{buttons.forEach((item)=>{item.classList.remove('_active')});
      button.classList.add('_active');
      menus.forEach((item)=>{item.classList.remove('_active')});
      button.nextElementSibling.classList.add('_active');}
})
})

// Validation

document.addEventListener('DOMContentLoaded', function(){
   const form = document.getElementById('form');
   form.addEventListener('submit', formsend);
   
   async function formsend(e) {
      e.preventDefault();
      
      let error = formValidate(form);
      if (error==0){
         // отправка формы
      }else{
         alert('Заполните обязательные поля!');
      }
   }

   function formValidate(form){
   let error = 0;
   let formReq = document.querySelectorAll('._req');//дабавить класс в input которые надо проверять
   for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
         if (emailTest(input)){
            formAddError(input);
            error++;
         }
         // проверка checkbox типа "я согласен"
      }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
         formAddError(input);
         error++;
      } else {
         // проверка ввода имени и т.д.
         if (input.value === '') {
            formAddError(input);
            error++;
         }
      }
   }
   return error;
}
function formAddError(input) {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
}
function formRemoveError(input) {
   input.parentElement.classList.remove('_error');
   input.classList.remove('_error');
}
// тест email
function emailTest(input){
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
});

