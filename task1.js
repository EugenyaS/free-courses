/* Task 1 */
var input=process.argv[2];
var upperInput= input.toUpperCase();
var output = "";
for (var i = 0; i < input.length; i++)
{
    var outputSign = upperInput.charAt(i);  
    if ((outputSign != "Р")&&(outputSign != "К")&&(outputSign != "Н")) 
	{
        output += input.charAt(i);
    } ;
};       
process.stdout.write(output);
