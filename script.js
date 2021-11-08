let name_check = false
let price_check = false
let link_check = false


let name = document.getElementById('name');
name.addEventListener('input', () => {
  if(name.value==""){
    name.style.border="1px solid #FF8484"
    document.getElementById('name_undertext').style.visibility="visible"
  }
  else{
    name.style.border="1px"
    document.getElementById('name_undertext').style.visibility="hidden"
    name_check = true
  }
});

let price = document.getElementById('price');
price.addEventListener('input', () => {
  if(price.value==""){
    price.style.border="1px solid #FF8484"
    document.getElementById('price_undertext').style.visibility="visible"
  }
  else{
    price.style.border="1px"
    document.getElementById('price_undertext').style.visibility="hidden"
    price_check = true
  }
});

let link = document.getElementById('link');
link.addEventListener('input', () => {
  if(link.value==""){
    link.style.border="1px solid #FF8484"
    document.getElementById('link_undertext').style.visibility="visible"
  }
  else{
    link.style.border="1px"
    document.getElementById('link_undertext').style.visibility="hidden"
    let link_check = true
    console.log(123)
  }
});


if (link_check == true && name_check == true && price_check == true){
  console.log(1)
}
