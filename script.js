//Sum of two Numbers

var num1, num2, sum; //Declaring three variables to store numbers 

//num1->1st number, num2->2nd number, Sum-> Total of two numbers  

num1 = num2 = 10; // initialize both value to 10

// + is a binary operator, takes two operands

sum = num1 + num2; // JavaScript engine evaluate this expression as this is assignment operation '=' first evaluate right side where an + operation.
                   // JavaScript engine perform addition and store the result to sum variable.


document.write("Sum = ", sum ,"<br/>"); // separated by comma each value diplay independently Output is Sum = 20

document.write("Sum = " + sum,"<br/>"); // separated by + sign value diplay by string concatination Output is Sum =20, you have to add space between = and 20





// Difference between two numbers

var difference;

document.write(difference,"<br/>"); //Output is undefined 

difference = null; //variable initialize to null

document.write(difference,"<br/>"); //Output is null

//update the values of num1 and num2 

num1 = 27; // just updating the values there is no declaration
num2 = 4.4;

document.write("Type Of Num1 = 27 =>", typeof num1,"<br/>"); //this number is an integer

//javaScripts show both type of variables as a number 

document.write("Type Of Num2 = 4.4 =>",typeof num2,"<br/>"); //this number is an flaot

// - is a binary operator, takes two operands

difference = num1 - num2; // result is alsoin float 22.6 but the typeof diff is number

document.write("Difference = ", difference,"<br/>");



// Product of two number

var product;

// * is a binary operator, takes two operands

product = num1 * num2;

document.write("Product = ", product,"<br/>"); // same as java javascript not round off the results automatically



// Divison of Numbers

var divison;

divison = num1 / num2;

document.write("Division = ", divison,"<br/>");



/*
 in this programe we use num1, num2, sum, product, difference and division these variables are 
 global variable and scope/lifeTime of these variables is throughout the program execution

 let's try some example of local scope and see what happen

*/

{
    var number1 = number2 = 30; // declare and initialize at the same time 

    // let number1 = number2 = 30; //skip this line right now and again read this line when you are reading the 2nd block 

    document.write("Sum = ", number1 + number2,"<br/>");
    // now access the globale varibales
    
    document.write("Sum of three numbers; \nSum + Number1 + number2 =>", sum + number1 + number2,"<br/>")
    /*
     Above we used sum global varible which is accessible any block of code now
     Let's creat another block and access the variables number1, number2 which is in this block
    */
}


document.write(number1,"<br/>")
{
    var newNumber1 = newNumber2 = sum + difference + product + divison;

    document.write("newNumber1 = ", newNumber1, "<br/>" ,"newNumber2 = ", newNumber2,"<br/>");

    // now access the upper bloack variables number1 and number2

    var result = newNumber1 + newNumber2 + number1 + number2; 

    /*
     Still accessible these upper bloack variable 
     because the variables declare as var if we change it to let or const then you can see the error
     uncoment the the line 
     */
    document.write("Result =",result,"<br/>");
}


// let's check the precedence of the operators, which operator operate first 

{
    var x = 2 + 3 ** 2 - 4;
    document.write(x,"<br/>"); // expected result is 7 it is same as 2 + (3 ** 2) - 4

    var y = (2 + 3) ** 2 - 4;
    document.write(y,"<br/>"); // result = 21, () higest presedence then ** and then other

    x = 10 + 20 / 5 * 2 - 4;
    document.write(x,"<br/>"); // result = 14 as the division and multiplication has same precedence so javaScript manuplates it left to right 

    y = 2 + 3 ** 2 - 4 ** 2;
    document.write(y,"<br/>"); // result = -5 now ** same precedence ** but Java Script manuplate it right to left 

    // uniary operators have high precedence than binary operator 
    var flag = 3;
    x = ++flag - 4 * 3 + --flag;
    document.write(x,"<br/>");// -5, first ++flag now flag is 4 then --flag the flag is again 3 now 4 * 3 = 12 and the expression is now 4 - 12 + 3 = -5

}

// Assignment Operator 
{
    var u = 5;
    u = u + 5;
    u += 5; // same as u = u + 5; // but u = 15 as already u = 10

    // we use -=, *=, /=, +=, also **= 
}


{
    var flag = 1;

    document.write("Post Increment = ", flag++,"<br/>"); // if we will get the ouput at console the value is 1 but after this line executed then flag = 2

    document.write("Per Increment = ", ++flag,"<br/>");// here first the value of the flag increment means flag = 2 at this line the out is 3  

}
