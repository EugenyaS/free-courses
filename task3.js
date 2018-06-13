/* Task 3 */
var total=Number(process.argv[2])+Number(process.argv[3]);
var strTotal="";
// секунды
if ( (total%60<20)&&(total%60>10) || (total%60!=0)&&(total%60%10==0) ) {
    strTotal=String(total%60)+' секунд'; 
}
else if (total%60%10==1) {
	strTotal=String(total%60)+' секунда'+strTotal; 
     }
     else if ( (total%60%10>1)&&(total%60%10<5) ) {
	     strTotal=String(total%60)+' секунды'+strTotal; 
	  } 
          else if ( (total%60%10>4)&&(total%60%10<=9) ) {
		     strTotal=String(total%60)+' секунд'+strTotal; 
                 };
total-=total%60;
total/=60;
// минуты
if ( (total%60<20)&&(total%60>10) || (total%60!=0)&&(total%60%10==0) ) {
    strTotal=String(total%60)+' минут '+strTotal; 
}
else if ((total%60)%10==1) {
	strTotal=String(total%60)+' минута '+strTotal; 
     }
     else if ( ((total%60)%10>1)&&(total%60%10<5) ) {
	     strTotal=String(total%60)+' минуты '+strTotal; 
          } else if ( (total%60%10>4)&&(total%60%10<=9) ) {
		     strTotal=String(total%60)+' минут '+strTotal; 
                 };
total-=total%60;
total/=60;
// часы  
    
if (( (total<=20)&&(total>4) || (total%10>4)&&(total%10<=9)||(total%10==0)) && (total>0)) {
   strTotal=String(total)+' часов '+strTotal; 
}
else if ( (total%10==1)) {
         strTotal=String(total)+' час '+strTotal; 
      }
      else if ( (total%10>1)&&(total%10<5)) {
	      strTotal=String(total)+' часа '+strTotal; 
	   };
process.stdout.write(strTotal.trim());
