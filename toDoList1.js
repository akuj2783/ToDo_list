
addTask=()=>{
    let task=document.getElementById('newTask').value;
    if(task=="")
    {
        alert("please enter something")
    }
   else{
    let ul=document.createElement('ul')
    let newLi= document.createElement('li');
    let delBtn=document.createElement('button');
    let editBtn=document.createElement('button');
    delBtn.innerText="delete";
    editBtn.innerText="edit";
    newLi.innerHTML+=task;
    newLi.appendChild(editBtn);
    newLi.appendChild(delBtn);
    ul.appendChild(newLi);
    document.getElementById('taskList').appendChild(ul);
    delBtn.onclick=deleteItem=()=>{
            ul.removeChild(newLi)
    }
    editBtn.onclick=editItem=()=>{
        let saveBtn=document.createElement('button');
        newLi.appendChild(saveBtn);
        newLi.setAttribute('contenteditable','true');
        editBtn.setAttribute('contenteditable','false');
        delBtn.setAttribute('contenteditable','false');
        saveBtn.setAttribute('contenteditable','false');
        editBtn.style.display='none';
       
        saveBtn.innerText='save change';
        saveBtn.onclick=saveItem=()=>{
            saveBtn.style.display='none';
            newLi.setAttribute('contenteditable','false');
            editBtn.style.display='';
        }
        
    };
    document.getElementById('newTask').value="";
    
   }
   
//console.log(task)
}
