const Secret = 'masterjake';

let guess=prompt("You are under attack please input the code....");

while (guess !==Secret)
    {
        guess= prompt("Wrong code hahaha try again")
    }
alert('Congratulation its a prank!!!!!!!')