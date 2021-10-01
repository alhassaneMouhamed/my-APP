  
  function clc(){
    var rand ,reng, ens , number,count=0;
 
  
    number=prompt("enter number");
    if(!(number<20 && number>0) || number== NaN)
    {
    number=prompt("enter correct number");
    if(!(number<20 && number>0) || number== NaN)
     ;
    }
    reng=prompt("enter the range of numbers from 1 to 20 ");
    if(!(reng>=1 && reng<=20)){
    reng=prompt("enter the range of numbers from 1 to 20 ");
     ;
    }
     else
        do {

            rand=Math.floor( Math.random()*reng);
          console.log("--- " + "x "+number + " = "  + rand*number);
                 ens=prompt("enter the enswer | enter -1 for change last number");
               if(ens==rand){
               console.log("great !");
               var count =count+1;
               }
               else if(ens==-1){
                   count=0;
               number=prompt("enter number");
               }
       
               else{
                  console.log("you get "+ count+" $ ")
                  document.getElementById("btn").innerHTML="Start New Game";
   
                 break
                   }
                     
       }while(true);
      }
     