let pushAnswer = document.getElementById('answer');
let buttonAC = document.getElementById('AC');
let buttonAdd = document.getElementById('+');
let buttonSubtract = document.getElementById('-');
let buttonNegative = document.getElementById('+/-');
let buttonPercent = document.getElementById('%');
let buttonDivide = document.getElementById('/');
let buttonMultiply = document.getElementById('X');
let buttonDot = document.getElementById('.');
let buttonEqual = document.getElementById('=');
let buttonDotValue = ".";
let button0Value = "0";
let button0 = document.getElementById('0');
let button1Value = "1";
let button1 = document.getElementById('1');
let button2Value = "2";
let button2 = document.getElementById('2');
let button3Value = "3";
let button3 = document.getElementById('3');
let button4Value = "4";
let button4 = document.getElementById('4');
let button5Value = "5";
let button5 = document.getElementById('5');
let button6Value = "6";
let button6 = document.getElementById('6');
let button7Value = "7";
let button7 = document.getElementById('7');
let button8Value = "8";
let button8 = document.getElementById('8');
let button9Value = "9";
let button9 = document.getElementById('9');
let Answer = '';
let answer = '';
let par;
let Par1 = ''; // first set of numbers
let Par2 = '';// second set of numbers
let functionType = '';
// window.addEventListener('load', function(){

// })

document.addEventListener('click', function(){
    if (functionType === ''){
        pushAnswer.innerText = Par1;
    } else if (functionType === 'add'){
        pushAnswer.innerText = Par2;

    }else if (functionType === 'equal'){
        pushAnswer.innerText = answer;

    }
    else if (functionType === 'subtract'){
        pushAnswer.innerText = Par2;

    }
    else if (functionType === 'hell'){
        pushAnswer.innerText = answer + ' Yikes this sure is creepy... ';

    }
    else if (functionType === 'multiply'){
        pushAnswer.innerText = Par2;

    }
    else if (functionType === 'divide'){
        pushAnswer.innerText = Par2;

    }
})
function buttonType1(){

    button0.addEventListener('click',function(){ 
        Par1 += (button0Value)
        //console.log(Par1)
        
    })
    button1.addEventListener('click',function pushToPar1(){ 
        Par1+=(button1Value);
        //console.log(Par1)
    })
    button2.addEventListener('click',function pushToPar1(){ 
        Par1 += button2Value;
        //console.log(Par1)
    })
    button3.addEventListener('click',function pushToPar1(){ 
        Par1+=button3Value
        //console.log(Par1)
    })
    button4.addEventListener('click',function pushToPar1(){ 
        Par1+=button4Value
        //console.log(Par1)
    })
    button5.addEventListener('click',function pushToPar1(){ 
        Par1+=button5Value
        //console.log(Par1)
    })
    button6.addEventListener('click',function pushToPar1(){ 
        Par1+=button6Value
        //console.log(Par1)
    })
    button7.addEventListener('click',function pushToPar1(){ 
        Par1+=button7Value
        //console.log(Par1)
    })
    button8.addEventListener('click',function pushToPar1(){ 
        Par1+=button8Value
        //console.log(Par1)
    })
    button9.addEventListener('click',function pushToPar1(){ 
        Par1+=button9Value
        //console.log(Par1)
    })
    buttonDot.addEventListener('click',function pushToPar1(){ 
        Par1+=buttonDotValue
        //console.log(Par1)
    })
}
buttonType1()


function buttonType2(){
    

    button0.addEventListener('click',function pushToAnswer(){
        Par2 += (button0Value)
        //console.log(Par2)
    })
    button1.addEventListener('click',function pushToPar2(){
        Par2+=(button1Value);
        //console.log(Par2)
    })
    button2.addEventListener('click',function pushToPar2(){
        Par2 += button2Value;
        //console.log(Par2)
    })
    button3.addEventListener('click',function pushToPar2(){
        Par2+=button3Value
        //console.log(Par2)
    })
    button4.addEventListener('click',function pushToPar2(){
        Par2+=button4Value
        //console.log(Par2)
    })
    button5.addEventListener('click',function pushToPar2(){
        Par2+=button5Value
        //console.log(Par2)
    })
    button6.addEventListener('click',function pushToPar2(){
        Par2+=button6Value
        //console.log(Par2)
    })
    button7.addEventListener('click',function pushToPar2(){
        Par2+=button7Value
        //console.log(Par2)
    })
    button8.addEventListener('click',function pushToPar2(){
        Par2+=button8Value
        //console.log(Par2)
    })
    button9.addEventListener('click',function pushToPar2(){
        Par2+=button9Value
        //console.log(Par2)
    })
    buttonDot.addEventListener('click',function pushToPar1(){ 
        Par2+=buttonDotValue
        //console.log(Par1)
    })
};




buttonAdd.addEventListener('click', function(){
    if(buttonAdd){
       buttonAdd.classList.add('clicked')
    }
    if(answer === ''){
        par = Par1; // fixes the huge button problem that caused lots of stress
        //console.log('par = Par1')
        buttonType2()
     }else{
         Par2 = undefined;
         delete(Par2);
         Par2 = '';
         par = answer;
         //console.log('par = answer'+ par)
     }
   
    //console.log('par set')
    functionType = 'add';// allows the buttonEqual function to be abel to tell which function to call
     // calls second set of key board
});
function add(a,b){
    functionType = 'equal';
    //console.log(a)
    //console.log(b)
   answer = a+b;
    //console.log(answer + 'added')
    // return //console.log( answer + 'answer')
}

buttonSubtract.addEventListener('click', function(){
    if(buttonSubtract){
        buttonSubtract.classList.add('clicked')
     }
     if(answer === ''){
        par = Par1; // fixes the huge button problem that caused lots of stress
        //console.log('par = Par1')
        buttonType2()
     }else{
         Par2 = undefined;
         delete(Par2);
         Par2 = '';
         par = answer;
         //console.log('par = answer'+ par)
     }
    
    //console.log('par set')
    functionType = 'subtract';// allows the buttonEqual function to be abel to tell which function to call
     // calls second set of key board
    return
});
function subtract(a,b){ 
   
    functionType = 'equal';
    //console.log(a)
    //console.log(b)
    answer = a-b;
    if(answer==666){
        functionType = 'hell'
        //console.log('works like a charm')
        // redirectToYoutube()
        setTimeout(function redirectToYoutube() {
            let url = "https://www.youtube.com/watch?v=l482T0yNkeo"
            window.open(url,'_blank')
            // location.replace(url)
          },1000);
    } 
    //console.log(answer+' subtracted');
    return
}


    buttonMultiply.addEventListener('click', function(){
        if(buttonMultiply){
           buttonMultiply.classList.add('clicked')
        }
        if(answer === ''){
            par = Par1; // fixes the huge button problem that caused lots of stress
            //console.log('par = Par1')
            buttonType2()
         }else{
             Par2 = undefined;
             delete(Par2);
             Par2 = '';
             par = answer;
             //console.log('par = answer'+ par)
         }
     
        functionType = 'multiply';// allows the buttonEqual function to be abel to tell which function to call
         // calls second set of key board
    });

    function multiply(a,b){
        functionType = 'equal';
        //console.log(a)
        //console.log(b)
       answer = a*b;
        //console.log(answer + 'multiplied')
        // return //console.log( answer + 'answer')
    }

    buttonDivide.addEventListener('click', function(){
        if(buttonDivide){
           buttonDivide.classList.add('clicked')
        }
        if(answer === ''){
            par = Par1; // fixes the huge button problem that caused lots of stress
            //console.log('par = Par1')
            buttonType2()
         }else{
             Par2 = undefined;
             delete(Par2);
             Par2 = '';
             par = answer;
             //console.log('par = answer'+ par)
         }
        
        //console.log('par set')
        functionType = 'divide';// allows the buttonEqual function to be abel to tell which function to call
         // calls second set of key board
    });

    function divide(a,b){
        functionType = 'equal';
        //console.log(a)
        //console.log(b)
       answer = a/b;
        //console.log(answer + 'divided')
        // return //console.log( answer + 'answer')
    }
    
    
    // return //console.log( answer + 'answer')


buttonEqual.addEventListener('click', function(){
  

    //console.log('equal was just pressed');
    if(functionType === 'add'){
        //console.log('inside equal function');
       let firstPar = parseFloat(par) // turns string to number
        let secondPar = parseFloat(Par2)// same as above
        functionType = undefined;
        delete(functionType);
        functionType ='';
        buttonAdd.classList.remove('clicked')
        add(firstPar,secondPar);// calls the function of add
        return 
    }
    else if(functionType === 'subtract'){
        //console.log('subtract equal function');
       let firstPar = parseFloat(par) // turns string to number
        let secondPar = parseFloat(Par2)// same as above
        delete(functionType);
        functionType ='';
        buttonSubtract.classList.remove('clicked')
        subtract(firstPar,secondPar);// calls the function of add
        return 
    }
    else if(functionType === 'multiply'){
        //console.log('multiply equal function');
       let firstPar = parseFloat(par) // turns string to number
        let secondPar = parseFloat(Par2)// same as above
        delete(functionType);
        functionType ='';
        buttonMultiply.classList.remove('clicked')
        multiply(firstPar,secondPar);// calls the function of add
        return 
    }
    else if(functionType === 'divide'){
        //console.log('divide equal function');
       let firstPar = parseFloat(par) // turns string to number
        let secondPar = parseFloat(Par2)// same as above
        delete(functionType);
        functionType ='';
        buttonDivide.classList.remove('clicked')
        divide(firstPar,secondPar);// calls the function of add
        return 
    }
    
});









//operators
buttonAC.addEventListener('click',function pushToAnswer(){
    Par1 = undefined;
    delete(Par1);
    Par1 ='';
    //console.log(Par1)
    Par2 = undefined;
    delete(Par2);
    Par2 ='';
    //console.log(Par2)
    document.location.reload()
    return
})
buttonNegative.addEventListener('click',function pushToAnswer(){
    let newAnswer;
  newAnswer = parseFloat(answer)
  newAnswer = newAnswer*-1.0
 answer=newAnswer
    //console.log(answer)
})
