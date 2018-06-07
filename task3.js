/* Task 3 */
function TestTime(input1, input2) {
    var total=input1+input2;
    var strTotal="";
	// секунды
    if ( (total%60<20)&&(total%60>10) || (total%60!=0)&&(total%60%10==0) ) 
	{
        strTotal=String(total%60)+' секунд'; 
    }
    else if (total%60%10==1) 
		 {
			strTotal=String(total%60)+' секунда'+strTotal; 
		 }
        else if ( (total%60%10>1)&&(total%60%10<5) ) 
			 {
				strTotal=String(total%60)+' секунды'+strTotal; 
			 } else if ( (total%60%10>4)&&(total%60%10<=9) )
					{
						strTotal=String(total%60)+' секунд'+strTotal; 
                    };
    total-=total%60;
    total/=60;
	// минуты
    if ( (total%60<20)&&(total%60>10) || (total%60!=0)&&(total%60%10==0) ) 
	{
        strTotal=String(total%60)+' минут '+strTotal; 
    }
    else if ((total%60)%10==1) 
	     {
			strTotal=String(total%60)+' минута '+strTotal; 
		 }
        else if ( ((total%60)%10>1)&&(total%60%10<5) ) 
			 {
				strTotal=String(total%60)+' минуты '+strTotal; 
			 } else if ( (total%60%10>4)&&(total%60%10<=9) ) 
			        {
						strTotal=String(total%60)+' минут '+strTotal; 
                    };
    total-=total%60;
    total/=60;
    // часы  
    if ( (total%24<=20)&&(total%24>4) ) 
	{
        strTotal=String(total%24)+' часов '+strTotal; 
    }
    else if ( (total%24%10==1)) 
	     {
            strTotal=String(total%24)+' час '+strTotal; 
         }
        else if ( (total%24%10>1)&&(total%24%10<5)) 
			 {
				strTotal=String(total%24)+' часа '+strTotal; 
			 };
    total-=total%24;
    total/=24;
    //дни
    if (total==1) 
	{
        strTotal='1 день '+strTotal;
    };
    if (total==2) 
	{
        strTotal='2 дня '+strTotal;
    };
    return strTotal;
}

process.stdout.write(TestTime(process.argv[2],process.argv[3]);