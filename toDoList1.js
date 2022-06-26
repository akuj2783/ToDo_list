
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

    editBtn.onclick=editItem=()=>{
        newLi.setAttribute('contenteditable','true');
        editBtn.setAttribute('contenteditable','false');
        delBtn.setAttribute('contenteditable','false');
        editBtn.innerText="save";
        let saveBtn=editBtn;

        saveBtn.onclick=saveItem=()=>{
            newLi.setAttribute('contenteditable','false');
            saveBtn.innerText="edit";
            saveBtn=editBtn;
            editBtn.onclick=callEdit=()=>{
                editItem();
            };
        };
        //newLi.isContentEditable=true;
       // newLi.style.backgroundColor="yellow";
        //console.log("edit triggered")
    };
    delBtn.onclick=deleteItem=()=>{
            ul.removeChild(newLi)
    }
    document.getElementById('newTask').value="";
    
   }
//console.log(task)
}