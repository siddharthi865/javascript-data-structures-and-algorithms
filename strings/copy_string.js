/*Javascript program to copy one String to another using Recursion*/	

// Function to copy one string in to other using recursion
function copyString(s1, s2, index)
{
	
	// Copying each character from s1 to s2
	s2[index] = s1[index];

	// If string reach to end then stop
	if (index == s1.length - 1)
	{
		return;
	}
	
	// Increase character index by one
	copyString(s1, s2, index + 1);
}

var s1 = "GEEKSFORGEEKS";
var s2 = [];
var index = 0;

copyString(s1, s2, index);

console.log(s2.join(""));


// Function to copy one string to other assuming that other string has enough space.
function myCopy(s3, s4){

	for(let i=0; i < s3.length; i++){
    s4[i] = s3[i];
  }
  return s4;
}


var s3 = "GEEKSFORGEEKS";
var s4 = [];
console.log(myCopy(s3, s4).join(""));

