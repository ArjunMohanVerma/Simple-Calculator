
var inp=document.getElementById("input");
buttons=document.querySelectorAll("button");
var sv="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let bt=e.target.innerText;
            if(bt=="C"){
                sv="";
                inp.value=sv;
            }
            else if(bt=="="){
                inp.value=eval(sv);
            }
            else{
            sv+=bt;
            inp.value=sv;
            }
        });
        }

    