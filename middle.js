function middleOne(myStr){
    return (myStr.length%2 === 0 ? myStr[(myStr.length/2 - 1)] + myStr[(myStr.length/2)] : myStr[Math.floor(myStr.length/2)]); //Used to check if string length is Odd or Even. Then perform the check using ternary operator
  }
  
  console.log("The middle string is  : " + middleOne("qwerty"));