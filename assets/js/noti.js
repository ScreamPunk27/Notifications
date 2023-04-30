const counter=document.querySelector('.counter');
const allRead=document.getElementById('a-read');
const spots=document.getElementsByClassName('not-read');

let myCount=3;
let switchNoti1=false;
let switchNoti2=false;
let switchNoti3=false;

document.body.onload = function() {
    counter.textContent=myCount;
}

allRead.addEventListener('click',()=>{
    counter.textContent=0;
    myCount=0;
    for(let i=0;i<spots.length;i++){
        spots[i].style.display="none";
    }
});


document.getElementById('noti1').addEventListener('click',()=>{
    if(switchNoti1==false){
        if(myCount>0){
            spots[0].style.display="none";
            counter.textContent=myCount=myCount-1;
        }
        switchNoti1=true;
    }
});

document.getElementById('noti2').addEventListener('click',()=>{
    if(switchNoti2==false){
        if(myCount>0){
            spots[1].style.display="none";
            counter.textContent=myCount=myCount-1;
        }
        switchNoti2=true;
    }
});

document.getElementById('noti3').addEventListener('click',()=>{
    if(switchNoti3==false){
        if(myCount>0){
            spots[2].style.display="none";
            counter.textContent=myCount=myCount-1;
        }
        switchNoti3=true;
    }
});


