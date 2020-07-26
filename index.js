let expression = "";
let dot = 0;

let numbers = document.querySelectorAll('.nbr');
numbers.forEach(n => n.addEventListener('click', function(){
    if(n.innerHTML == ".") dot++;
    if(dot <= 1){
        expression += n.innerHTML;
        document.getElementById('bottom-result').innerText += n.innerHTML;
    }else{
        dot--;
    }
}));

let operators = document.querySelectorAll('.arithmetic-op');
operators.forEach(o => o.addEventListener('click', function(){
    dot = 0;
    document.getElementById('bottom-result').innerText = "";
    if(o.innerHTML == 'x'){
        expression += '*';
    }else{
        expression += o.innerHTML;
    }
}));

function clearExpression(){
    expression = "";
    dot = 0;
    document.getElementById('bottom-result').innerText = "";
}

let clearButton = document.getElementById('clear-b');
clearButton.addEventListener('click', function(){
    clearExpression();
});

function backtrackExpression(){
    expression = expression.slice(0, expression.length - 1);
    let inTxt = document.getElementById('bottom-result').innerHTML;
    inTxt = inTxt.slice(0,inTxt.length - 1);
    document.getElementById('bottom-result').innerText = inTxt;
}

let deleteButton = document.getElementById('delete-b');
deleteButton.addEventListener('click', function(){
    backtrackExpression();
});

function percentage(){
    if(document.getElementById('bottom-result').innerText != ""){
        document.getElementById('bottom-result').innerText /= 100;
        expression += "/100";
    }
}

let percentageButton = document.getElementById('percentage-b');
percentageButton.addEventListener('click', function(){
    percentage();
});

function operate(sign,first,second){
    if(sign == '/'){
        if(second == 0){
            return "Cannot Divide By 0";
        }else{
            return first/second;
        }
    }else if(sign == '+'){
        return first+second;
    }else if(sign == '-'){
        return first-second;
    }else if(sign == '*'){
        return first*second;
    }
}

function evaluateExpression(){
    
    let r = 0;
    let a = "";
    let op = "";
    let i = 0;
    
    while(i < expression.length){
        if(expression[i] == '+' | expression[i] == '-' | expression[i] == '/' | expression[i] == '*'){
            break;
        }
        a += expression[i];
        console.log(a);
        i++;
    }

    console.log(" a is :" + a)
    r += Number(a);
    a = "";
    for(let j = i; j < expression.length; j++){
        if(expression[j] == '+' | expression[j] == '-' | expression[j] == '/' | expression[j] == '*'){
            op = expression[j];
            console.log("operator is" + op);
        }else{
            while(j < expression.length){
                if(expression[j] == '+' | expression[j] == '-' | expression[j] == '/' | expression[j] == '*'){
                    break;
                }
                a += expression[j];
                console.log(a);
                j++;
            }
            r = operate(op, Number(r), Number(a));
            console.log("result is : "+ r)
            j--;
            a = "";
        }
    }
    document.getElementById('bottom-result').innerText = r;
    console.log("result is : "+ r)
    
}

let equalButton = document.getElementById('equal-b');
equalButton.addEventListener('click', function(){
    evaluateExpression();
});
