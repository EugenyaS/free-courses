/* Task 2 */
var input1=process.argv[2];
var input2=process.argv[3];
var fl=-1;
if (input1.length==input2.length)
{ 
    if (~input1.indexOf(input2)) 
    {
       fl=0;
    } 
    else
    {
	for (var i=0; i<input1.length;i++)
        {
            input2=input2.concat(input2[0]).substring(1);
            if (~input1.indexOf(input2))
            { 
		fl=i+1;
                break;
	    }          
         }          
     }
};  
  
process.stdout.write(fl);
