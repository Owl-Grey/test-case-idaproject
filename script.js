
let name_check = false
let price_check = false
let link_check = false
let btn_check = false

let name = document.getElementById('name');
name.addEventListener('input', () => {
  if(name.value==""){
    name.style.border="1px solid #FF8484"
    document.getElementById('name_undertext').style.visibility="visible"
    link_check = false
    check(name_check,price_check,link_check)
  }
  else{
    name.style.border="1px"
    document.getElementById('name_undertext').style.visibility="hidden"
    name_check = true
    check(name_check,price_check,link_check)
  }
});

let price = document.getElementById('price');
price.addEventListener('input', () => {
  if(price.value==""){
    price.style.border="1px solid #FF8484"
    document.getElementById('price_undertext').style.visibility="visible"
    link_check = false
    check(name_check,price_check,link_check)
  }
  else{
    price.style.border="1px"
    document.getElementById('price_undertext').style.visibility="hidden"
    price_check = true
    check(name_check,price_check,link_check)
  }
});

let link = document.getElementById('link');
link.addEventListener('input', () => {
  if(link.value==""){
    link.style.border="1px solid #FF8484"
    document.getElementById('link_undertext').style.visibility="visible"
    link_check = false
    check(name_check,price_check,link_check)
  }
  else{
    link.style.border="1px"
    document.getElementById('link_undertext').style.visibility="hidden"
    link_check = true
    check(name_check,price_check,link_check)
  }
});


function check(a,b,c){
  if (a==true && b == true & c==true){
    btn_check = true
  }
  else {btn_check = false};
  button(btn_check)
}



function button(a){
  if (a==true){
    document.getElementById('button').classList.add('button_active');
  }
  else {document.getElementById('button').classList.remove('button_active');}
}
