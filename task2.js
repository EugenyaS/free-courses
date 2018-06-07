/* Task 2 */
function TestF(input1, input2) {
    if (input1.length==input2.length)
	{        
        for (var i=0; i<input1.length;i++)
        {
          input2=input2.concat(input2[0]).substring(1);
          if (~input1.indexOf(input2))
		  { 
			return i+1;
		  }
        }
        return -1;
	}
    else
    {  
	    return -1; 
	}
}

process.stdout.write(TestF(process.argv[2],process.argv[3]);