//Menu
/*let iconMenu = document.querySelector('.icon-menu');
if (iconMenu != null) {
	
	
	let menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener('click', (e) => {
		
			
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		
	});
};*/


	$('.icon-menu').on('click',function(){
        $('.menu__body').toggleClass('_active');
    });

    $('.icon-menu').on('click',function(){
    	$('.icon-menu').toggleClass('_active');
    });



//Menu region
let user_icon = document.querySelector('.actions-header__icon');
user_icon.addEventListener('click',function(e){

	
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});

document.documentElement.addEventListener('click',  function(e)  {
	//console.log(e);
	if (!e.target.closest('.user-header')){
		let user_menu = document.querySelector('.user-header__menu');
		user_menu.classList.remove('_active');
	}
});