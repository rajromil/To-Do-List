
function addtodo() {
      const newtask = document.createElement('li');
      const tasklist = document.getElementById('tasklist');
      newtask.textContent = document.querySelector("#inputtask").value;

         if(newtask.textContent==="") {
             const message = document.createElement('span');
        message.textContent = "Empty task cannot be empty!";
        message.style.color = "red";
        message.style.padding = "15px";
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 2000);
         }
         else {
      tasklist.appendChild(newtask);
      document.querySelector("#inputtask").value="";
      deletetask(newtask);
         }
    
}

function  deletetask(newtask) {
  const delebtn = document.createElement("button");
  delebtn.textContent = "delete";
  newtask.appendChild(delebtn);
  delebtn.onclick = function(){
    newtask.remove();
  }  
}
