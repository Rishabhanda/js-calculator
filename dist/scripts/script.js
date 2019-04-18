"use strict";

(function(){
    //setting the variables
    // var  buttonList = document.querySelectorAll('.container-fluid .row div>button');
    var input = document.querySelector('[type="text"]');
    var buttonMinus = document.querySelector('#minus');
    var buttonPlus = document.querySelector('#plus');
    var buttonEqual = document.querySelector('#equal');
    var buttonPercent = document.querySelector('#percent');
    var buttonDivide = document.querySelector('#divide');
    var buttonBackspace= document.querySelector('#backspace');
    var buttonRefresh= document.querySelector('#refresh');
    var buttonMultiply = document.querySelector('#multiply');
    var buttonNum5 = document.querySelector('#num5');
    var buttonNum0= document.querySelector('#num0');
    var buttonNum1 = document.querySelector('#num1');
    var buttonNum2 = document.querySelector('#num2');
    var buttonNum3 = document.querySelector('#num3');
    var buttonNum4 = document.querySelector('#num4');
    var buttonNum6 = document.querySelector('#num6');
    var buttonNum7 = document.querySelector('#num7');
    var buttonNum8 = document.querySelector('#num8');
    var buttonNum9 = document.querySelector('#num9');
    var ulList = document.querySelector('#ul-answers'); 
    //setting the state of the calculator
    var isResultDemanded = false;
    var answerHistory = 0;



    //focusing the input on load event
    window.addEventListener('load',()=>{
        input.focus();
    })

    //preventing alphabets and other useless stuff from entring in input
    input.addEventListener('keydown',function(event){
        if(event.shiftKey){
            switch(event.keyCode){
                // case 48://for )
                case 187://for +
                    buttonPlus.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonPlus.classList.remove('color-button-setter');
                    },200)
                    if(/[\+]|[^\d+]/.test(input.value[(input.value.length - 1)])){
                        event.preventDefault();
                        let newResult = input.value.replace(/[\+]$|[^\d+]$/,'+');
                        input.value = newResult;
                        return;
                    }
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                        event.preventDefault();
                    }
                break;
                case 56://for *
                    buttonMultiply.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonMultiply.classList.remove('color-button-setter');
                    },200)
                    if(/[\+]|[^\d+]/.test(input.value[(input.value.length - 1)])){
                        event.preventDefault();
                        let newResult = input.value.replace(/[\+]$|[^\d+]$/,'*');
                        input.value = newResult;
                        return;
                    }
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                        event.preventDefault();
                    }

                    break;
                case 53://for %
                    buttonPercent.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonPercent.classList.remove('color-button-setter');
                    },200)
                    if(/[\+]|[^\d+]/.test(input.value[(input.value.length - 1)])){
                        event.preventDefault();
                        let newResult = input.value.replace(/[\+]$|[^\d+]$/,'%');
                        input.value = newResult;
                        return;
                    }
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                        event.preventDefault();
                    }
                    break;
                // case 57://for (
                default:
                    event.preventDefault();
                break;
            }
        }else{
            switch(event.keyCode){
                case 48://for 0
                    buttonNum0.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum0.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 49://for 1
                    buttonNum1.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum1.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 189:// for -
                    buttonMinus.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonMinus.classList.remove('color-button-setter');
                    },200)
                    if(/[\+]|[^\d+]/.test(input.value[(input.value.length - 1)])){
                        event.preventDefault();
                        let newResult = input.value.replace(/[\+]$|[^\d+]$/,'-');
                        input.value = newResult;
                        return;
                    }
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                        event.preventDefault();
                    }
                    break;
                case 191:// for /
                    buttonDivide.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonDivide.classList.remove('color-button-setter');
                    },200)
                    if(/[\+]|[^\d+]/.test(input.value[(input.value.length - 1)])){
                        event.preventDefault();
                        let newResult = input.value.replace(/[\+]$|[^\d+]$/,'/');
                        input.value = newResult;
                        return;
                    }
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                        event.preventDefault();
                    }
                    break;
                case 50://for 2
                    buttonNum2.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum2.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 51://for 3
                    buttonNum3.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum3.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 52://for 4
                    buttonNum4.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum4.classList.remove('color-button-setter');
                    },200)
                    break;
                case 53://for 5
                    buttonNum5.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum5.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 54://for 6
                    buttonNum6.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum6.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 55://for 7
                    buttonNum7.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum7.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 56://for 8
                    buttonNum8.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum8.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 57://for 9
                    buttonNum9.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonNum9.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 8: //for backspace
                    buttonBackspace.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonBackspace.classList.remove('color-button-setter');
                    },200)
                    if(isResultDemanded){
                        input.value = '';
                        isResultDemanded = false;
                    }
                    break;
                case 13://for enter 
                    buttonEqual.classList.add('color-button-setter');
                    setTimeout(()=>{
                        buttonEqual.classList.remove('color-button-setter');
                    },200)       
                        isResultDemanded = true;
                        var expresion = input.value !='' ? eval(input.value): '';
                        input.value = expresion;
                        //storing the values in sessionStorage so that it will automatically deletes when tab is closed;
                        if(input.value !=''){
                            sessionStorage.setItem("value".concat(answerHistory),expresion);
                            ulList.style.display = 'block';
                            let li = document.createElement('li');
                            li.className = 'list-group-item';
                            li.innerText = sessionStorage.getItem("value".concat(answerHistory));
                            ulList.appendChild(li);
                            answerHistory++;
                        }
                    break;
                default:
                    event.preventDefault();
                break;
            }
        }

    }) 

        buttonNum0.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            input.value += this.innerText;
        });
        buttonNum1.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            input.value += this.innerText;
        });
        buttonNum2.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            input.value += this.innerText;
        });
        buttonNum3.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
            }
            input.value += this.innerText;
        });
        buttonNum4.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            input.value += this.innerText;
        });
        buttonNum5.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            input.value += this.innerText;
        });
        buttonNum6.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            input.value += this.innerText;
        });
        buttonNum7.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            input.value += this.innerText;
        });
        buttonNum8.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;
            }
            input.value += this.innerText;
        });
        buttonNum9.addEventListener('click',function(){
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            input.value += this.innerText;
        });
        //operators 

        buttonMultiply.addEventListener('click',function(){
            //using validation ythat if there is a precding operator than no new operator is added
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            if(/[\+]|[^\d+]/.test(input.value[(input.value.length - 1)])){
                let newResult = input.value.replace(/[\+]$|[^\d+]$/,'*');
                input.value = newResult;
                return;
            }else{
                input.value += this.innerText;
            }
        });
        buttonPlus.addEventListener('click',function(){
            //using validation ythat if there is a precding operator than no new operator is added
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            if(/[\+]$|[^\d+]/.test(input.value[(input.value.length - 1)])){
                let newResult = input.value.replace(/[\+]$|[^\d+]$/,'+');
                input.value = newResult;
            }else{
                input.value += this.innerText;
            }
        });
        buttonMinus.addEventListener('click',function(){
            //using validation ythat if there is a precding operator than no new operator is added
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            if(/[\+]$|[^\d+]/.test(input.value[(input.value.length - 1)])){
                let newResult = input.value.replace(/[\+]$|[^\d+]$/,'-');
                input.value = newResult;
            }else{
                input.value += this.innerText;
            }
        });
        buttonPercent.addEventListener('click',function(){
            //using validation ythat if there is a precding operator than no new operator is added
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            if(/[\+]$|[^\d+]$/.test(input.value[(input.value.length - 1)])){
                let newResult = input.value.replace(/[\+]$|[^\d+]$/,'%');
                input.value = newResult;
            }else{
                input.value += this.innerText;
            }
        });
        buttonDivide.addEventListener('click',function(){
            //using validation ythat if there is a precding operator than no new operator is added
            if(isResultDemanded){
                input.value = '';
                isResultDemanded = false;

            }
            if(/[\+]$|[^\d+]$/.test(input.value[(input.value.length - 1)])){
                let newResult = input.value.replace(/[\+]$|[^\d+]$/,'/');
                input.value = newResult;
            }else{
                input.value += this.innerText;
            }
        });

        //clearing input value on pressing CE
        buttonRefresh.addEventListener('click',function(){
            input.value = '';
        })

        //deleting the number or operator on pressing backspace
        buttonBackspace.addEventListener('click',function(){
            var newOutput = input.value.substring(0, (input.value.length - 1));
            input.value = newOutput;
        })

        //fetching the output on enter or on click on =
        buttonEqual.addEventListener('click',function(){
            //setting the state of the calculator        
            isResultDemanded = true;
            var expresion = input.value !='' ? eval(input.value): '';
            input.value = expresion;
            //storing the values in sessionStorage so that it will automatically deletes when tab is closed;
            if(input.value !=''){
                sessionStorage.setItem("value".concat(answerHistory),expresion);
                ulList.style.display = 'block';
                let li = document.createElement('li');
                li.className = 'list-group-item';
                li.innerText = sessionStorage.getItem("value".concat(answerHistory));
                ulList.appendChild(li);
                answerHistory++;
            }
        })
}())
    