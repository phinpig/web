const form = document.querySelector('#login-form');
const loginname = document.querySelector('#login-form input');
const loginresult = document.querySelector('#login-result');
const NAME_KEY = 'name_key';


function saveName(e){
    e.preventDefault();
    localStorage.setItem(NAME_KEY, loginname.value);
    loadName()
}
function nameOk(obj){ 
    const body=document.querySelector('#wrapper'); 
    body.className='logout';
    loginresult.innerHTML = `${obj}님 반갑습니다.`;
}
function loadName(){
    const loadname = localStorage.getItem(NAME_KEY); 
    if(loadname !== null){
        form.style.display='none';
        loginresult.style.display='block';
        nameOk(loadname);
    }else{
        form.style.display='block';
        loginresult.style.display='none';
    }
    
}
form.addEventListener('submit',saveName)
loadName()