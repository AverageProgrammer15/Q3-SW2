function product(){
    a = document.getElementById('A').value;
    b = document.getElementById('B').value;

    a = parseFloat(a);
    b = parseFloat(b);

    window.alert("a x b = "+ a*b);
}

function raiseto(){
    a = document.getElementById('A').value;
    b = document.getElementById('B'). value;

    a = parseFloat(a);
    b = parseFloat(b);

    window.alert("a raised to b is...." + a**b)
}

function getremainder(){
    a = document.getElementById('A').value;
    b = document.getElementById('B'). value;

    a = parseFloat(a);
    b = parseFloat(b);

    window.alert("Remainder is..." + a%b)
}

function IsEqual(){
    a = document.getElementById('A').value;
    b = document.getElementById('B'). value;

    a = parseFloat(a);
    b = parseFloat(b);

    window.alert("Is a == b?" + a==b);
}

function onload(){
    document.getElementById('A').value = 1;
    document.getElementById('B').value = 1;
}