setTimeout(()=>{
         document.getElementById('loader-container').style.display="none";
} , 4000);
const hideLog = () =>{
    document.getElementById('login-form').style.display="none";
};
const seeLog = () =>{
    document.getElementById('login-form').style.display="flex";
    document.getElementById('signup-form').style.display="none";
    
}
const hideSign = () =>{
    document.getElementById('signup-form').style.display="none";
};
const showSign = () =>{
    alert('Create An account before use')
    document.getElementById('signup-form').style.display="flex";
    document.getElementById('login-form').style.display="none";
}

function next(){
    document.getElementById('loader-container').style.display="flex";
};
setTimeout(()=>{
    document.getElementById('loader-container').style.display="none";
} , 5000);
 function navs(){
    document.getElementById('nav').style.display="flex";
}

const hiSing = () =>{
    document.getElementById('nav').style.display="none";
};

function addWork(){
    let notes = document.getElementById("first").value;

    if(notes == ""){
      document.getElementById("kall").style.display ="block";
        setTimeout( function empty(){
          document.getElementById("kall").style.display ="none";
        }, 2000);
        return false;
    }
  
    var mostList = document.createElement("li");
      mostList.innerHTML = notes;
      document.getElementById("all-list").appendChild(mostList);
      mostList.addEventListener("click",  function hide(){
          mostList.style.display ="none";
      });
       
}

function pass(){
    let prev = document.getElementById("second").value;

    if(prev == ""){
      document.getElementById("kall1").style.display ="block";
        setTimeout( function empty(){
          document.getElementById("kall1").style.display ="none";
        }, 2000);
        return false;
    }
  
    var mostList1 = document.createElement("input");
      mostList1.innerHTML = prev;
      document.getElementById("all-list1").appendChild(mostList1);
       return false;
      mostList1.addEventListener("click",  function hide1(){
          mostList.style.display ="none";
      });
       
}

let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");

function preview(){
    imageContainer.innerHTML = "";
    numOfFiles.style.display = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for(i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
}

function Best(){
    document.getElementById("ccc").style.display ="flex";
    document.getElementById("clear").style.display ="none";
}
function Best1(){
    document.getElementById("ddd").style.display ="flex";
    document.getElementById("clear1").style.display ="none";
}
function Best2(){
    document.getElementById("eee").style.display ="flex";
    document.getElementById("clear2").style.display ="none";
}

function ShowS(){
    document.getElementById("acide").style.display="flex";
    document.getElementById("acide").style.width=200;
}
function hideS(){
    document.getElementById("acide").style.display="none";
    document.getElementById("acide").style.width=200;
}