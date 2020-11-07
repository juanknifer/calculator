const buttonNumber = document.getElementsByName('data-number');
const buttonOperation = document.getElementsByName('data-operation');
const buttonEqual = document.getElementsByName('data-equal')[0];
const buttonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeAct ='';
var opePre ='';
var operation =undefined;

buttonNumber.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    })
});

buttonOperation.forEach(function(button) {
    button.addEventListener('click', function(){
        selectOperation(button.innerText);
    })
});

buttonEqual.addEventListener('click', function(){
    calculate();
    updateDispley();
})

buttonDelete.addEventListener('click', function(){
    clear();
    updateDispley();
});

function selectOperation(op){
    if(opeAct==='')return;
    if(opePre !== ''){
        calculate();
    }
operation = op.toString();
opePre = opeAct;
opeAct = '';
}

function calculate(){

    var calc;
    const previus = parseFloat(opePre);
    const actual = parseFloat(opeAct);
    if (isNaN(previus) || isNaN(actual)) return;
    switch(operation) {
        case'+':
            calc = previus + actual;
            break;
        case'-':
            calc = previus - actual;
            break;
        case'/':
            calc = previus / actual;
            break;
        case'*':
            calc= previus * actual;
            break;
        default:
            return;               
    }
    opeAct = calc;
    operation = undefined;
    opePre ='';
}

function addNumber(num) {
    opeAct = opeAct.toString() + num.toString();
    updateDispley();
}

function clear(){
    opeAct ='';
    opePre ='';
    operation = undefined;
}

function updateDispley() {
    result.value =opeAct;
}

clear();   
