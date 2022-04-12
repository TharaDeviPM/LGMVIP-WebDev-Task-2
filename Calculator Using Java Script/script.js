$(document).ready(function(){
    $('#one').click(function(){
        document.forms.show.value += 1;
    });
    $('#two').click(function(){
        document.forms.show.value += 2;
    });
    $('#three').click(function(){
        document.forms.show.value += 3;
    });
    $('#four').click(function(){
        document.forms.show.value += 4;
    });
    $('#five').click(function(){
        document.forms.show.value += 5;
    });
    $('#six').click(function(){
        document.forms.show.value += 6;
    });
    $('#seven').click(function(){
        document.forms.show.value += 7;
    });
    $('#eight').click(function(){
        document.forms.show.value += 8;
    });
    $('#nine').click(function(){
        document.forms.show.value += 9;
    });
    $('#zero').click(function(){
        document.forms.show.value += 0;
    });
    $('#addition').click(function(){
        document.forms.show.value += '+';
    });
    $('#subtraction').click(function(){
        document.forms.show.value += '-';
    });
    $('#multiply').click(function(){
        document.forms.show.value += '*';
    });
    $('#divide').click(function(){
        document.forms.show.value += '/';
    });
    $('#decimal').click(function(){
        document.forms.show.value += '.';
    });
    $('#Equals').click(function(){
        if (show.value == "")
        {
            alert("Please Enter Any Number To Calculate!!!");
        }
        else
        {
            document.forms.show.value =
                eval(document.forms.show.value);
        }
    });
    $('#Clear').click(function(){
        document.forms.show.value = '';
    });
})