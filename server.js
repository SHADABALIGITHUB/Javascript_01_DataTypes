const input=document.getElementById("inputbox");

const divmain=document.getElementById('content');



const Btn1=document.getElementById('btn1');

Btn1.addEventListener("click",()=>{
     
        const data=input.value;
        const regex = /^[0-9]+n$/;
        const regex2=/^".*"$/; 
        let result;
       if(input.value==''){
          result="undefine";
       }

       else if(data.toLowerCase()==='true' || data.toLowerCase()==='false'){
                   result="Boolean";
        }
        else if(!isNaN(data)){
               result="Number";
        }
        else if(data.toLowerCase()==='null'){
               result="null(object)";
        }
        else if(regex.test(data)){


                       result="BIG INT";
            

        }
        else if(regex2.test(data)){

               result="String";

        }
        else{
                 result="undefine";
        }

        

        

        

        let a=document.createElement('li');
        
        a.textContent=result;
         divmain.removeChild(divmain.firstChild);
         divmain.appendChild(a);

        

});