let sbpPay = document.querySelector('.paymants__sbp');
let bankCard = document.querySelector('.paymants__bank-card');
let button = document.querySelector('.paymants__submit');
let mainBlock = document.querySelector('.paymants__wrapper-sbp');
let hidenSbpBlock = document.querySelector('.paymants__hiden-sbp-block');
let bankCardBlock = document.querySelector('.paymants__hiden-bank-card-block');


let helper;

sbpPay.addEventListener('click', function(){



        sbpPay.style.cssText = `border: 2px solid rgba(14, 0, 143, 1);`;
        bankCard.style.cssText = `border: 2px solid rgba(14, 0, 143, .3);`;

        helper = true;



    
});

bankCard.addEventListener('click', function(){

 
        mainBlock.style.display = 'none';
        bankCardBlock.style.display = 'flex';
        


});

button.addEventListener('click', function(){

    if( helper ){

        mainBlock.style.display = 'none';
        hidenSbpBlock.style.display = 'flex';

    }
    
})