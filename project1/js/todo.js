const todoform = document.querySelector('#todo-form form');
const todoinput = document.querySelector('#todo-form input');
const todolist = document.querySelector('#todo-list'); 
const TODOS_KEY = "TODOS_KEY";
let todos = [];

function setTodo(val){ 
    /* 이름,초,문자,해결유무 */    
    const todo ={
        id:String(Date.now()),
        text:val,
        ok:'N'   
    }
    return todo;
}
function todoPush(obj){ 
    todos.push(obj);
}
function todoSave(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function htmlView(obj){        
    const li = document.createElement("li"); 
    const span = document.createElement("span"); 
    const div = document.createElement("div");
    const btnOK = document.createElement("button"); 
    const btnDel = document.createElement("button"); 
    btnOK.innerText = '처리함';
    btnOK.addEventListener("click", todoOk);
    if(obj.ok === 'Y'){
        btnOK.setAttribute('disabled','disabled');
    }
    span.innerText = obj.text;    
    btnDel.innerText = '지우기';        
    btnDel.addEventListener("click", todoDel);
    div.append(btnOK);
    div.append(btnDel);
    li.append(span); 
    li.append(div);
    li.id=obj.id; 
    todolist.appendChild(li)
}
function todoSubmit(e){
    e.preventDefault(); 
    if(todoinput.length===0 || todoinput.value ===''){
        alert('할일을 적어주세요');
    }    
    
    const todo = setTodo(todoinput.value);
    todoPush(todo); 
    htmlView(todo);
    todoSave();
    todoinput.value='';
}
function todoList(){
    todos = JSON.parse(localStorage.getItem(TODOS_KEY)) ?? [];
    todos = todos.sort(function(a,b){
        if(a.ok < b.ok){
            return -1;
        }
        if(a.ok > b.ok){
            return 1;
        }
        return 0;
    })
    todos.forEach(function(obj){
        htmlView(obj);
    });
    
}
 
function todoDel(e){
    const li = e.target.parentNode.parentNode;  
    li.parentNode.removeChild(li);    
    todos= todos.filter(function(obj){
        obj == todos.id;
    })
    todoSave();
}
function todoOk(e){
    const li = e.target.parentNode.parentNode;  
    const index =todos.findIndex(function(obj){
        return obj.id == li.id  
    });
    todos[index].ok='Y'; 
    todolist.innerHTML=''
    todoSave(); 
    todoList()
}
todoform.addEventListener('submit',todoSubmit)
 
todoList();

