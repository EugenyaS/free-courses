/* Task 2 */
var input1=process.argv[2];
var input2=process.argv[3];
var fl=-1;
if (input1.length==input2.length) { 
    if (~input1.indexOf(input2)) {
       fl=0;
    } 
    else  {
      var fl1=-1;
	  for (var i=0; i<=input1.length;i++) {
            input2=input2.concat(input2[0]).substring(1);
            if (~input1.indexOf(input2)) {              
	        	fl1=i+1;
                break;
	        }          
      }     
      input2=process.argv[3];
      var fl2=-1;
      for (var i=1; i<input1.length;i++) {
            input2=input2.substring(input1.length-1).concat(input2.substring(0,input1.length-1));
            if (~input1.indexOf(input2)) {       
		       fl2=i;
               break;
	        }                          
      }  
      if(fl1<fl2) {fl=fl1} else (fl=fl2)
   }
};
process.stdout.write(String(fl));
