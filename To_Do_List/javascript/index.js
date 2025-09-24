let input=document.querySelector("#textinput")
let addTask=document.querySelector("#addTask")
let logoutBtn=document.querySelector("#logoutBtn")
let taskList=document.querySelector("#taskList")
let arrayOftasks=[]
let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
let userKey = "tasks_" + currentUser.email; 

getDatafromlocal();



if(localStorage.getItem(userKey)){
    arrayOftasks=JSON.parse(localStorage.getItem(userKey))
}


addTask.addEventListener("click",function(){
if(input.value!=""){
   
    taskList.innerHTML = "";
    arrayOftasks.push({
    id: Date.now(),     
    task: input.value,  
    done: false        
});

    input.value="";
    console.log(arrayOftasks)
    addTasktolist(arrayOftasks)
    addDatatolocalsrorge(arrayOftasks)


}

})
function addTasktolist(arrayOftasks){
    taskList.innerHTML = "";
    for(let i=0;i<arrayOftasks.length;i++){
    let li = document.createElement("li");
    li.textContent = arrayOftasks[i].task;
    taskList.appendChild(li); 
    let id=arrayOftasks[i].id;
    if(arrayOftasks[i].done === true){
    li.style.textDecoration = "line-through";
}

    


    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.textContent = texts[currentLang].buttons.delBtn;
    
    let doneBtn = document.createElement("button");
    doneBtn.classList.add("done");
    doneBtn.textContent = texts[currentLang].buttons.doneBtn;

        
        doneBtn.addEventListener("click", function () {
         li.style.textDecoration = "line-through"; 
         arrayOftasks[i].done = true;
         addDatatolocalsrorge(arrayOftasks); // حفظ التغيير
     
         const allDone = arrayOftasks.every(task => task.done === true);
         if (allDone && arrayOftasks.length > 0) {
             showCelebration();
    }

});
        delBtn.addEventListener("click", function () {
         removefromlocal(id);
    
        });
         li.appendChild(delBtn);
         li.appendChild(doneBtn); 
         
}


}
function removefromlocal(id){
   for(let i=0;i<arrayOftasks.length;i++){
    if(arrayOftasks[i].id===id){
        arrayOftasks.splice(i, 1);
        break;
    }
     
        
   }
   taskList.innerHTML = "";
    addDatatolocalsrorge(arrayOftasks); 
             
   addTasktolist(arrayOftasks)
   
}
 function addDatatolocalsrorge(arrayOftasks){
    window.localStorage.setItem(userKey, JSON.stringify(arrayOftasks))}
function getDatafromlocal(){
     
    let data=window.localStorage.getItem(userKey)
    if(data){
    arrayOftasks = JSON.parse(data);
     addTasktolist(arrayOftasks);

    }

   
}

function showCelebration() {
    const celebrationDiv = document.createElement("div");
    celebrationDiv.style.position = "fixed";
    celebrationDiv.style.top = "0";
    celebrationDiv.style.left = "0";
    celebrationDiv.style.width = "100%";
    celebrationDiv.style.height = "100%";
    celebrationDiv.style.display = "flex";
    celebrationDiv.style.justifyContent = "center";
    celebrationDiv.style.alignItems = "center";
    celebrationDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    celebrationDiv.style.zIndex = "9999";
    celebrationDiv.style.flexDirection = "column";
    celebrationDiv.style.color = "white";
    celebrationDiv.style.fontSize = "2em";
    celebrationDiv.style.fontWeight = "bold";
    celebrationDiv.style.textAlign = "center";
    celebrationDiv.innerHTML = texts[currentLang].messages. celebrate;
    document.body.appendChild(celebrationDiv);

    // تشغيل confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.2 }
    });

    // إزالة الاحتفال بعد 3 ثواني
    setTimeout(() => {
        celebrationDiv.remove();
    }, 3000);
}

logoutBtn.addEventListener("click",function(){
    window.location.href = "login.html";
})
