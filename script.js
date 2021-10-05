

function clck1() {

    let val2 = document.getElementById('inp2').value;

    let val1 = document.getElementById('inp1').value;
   
    if (val1 >= 0 ) {
        
    }
    else {
         document.getElementById('result').innerHTML='numbers only';

    }

    if (val1 >= 0 && val2.indexOf('EUR') != -1 ) {
       //  (val1 / '3.9' ); 
        document.getElementById('result').innerHTML= val1 / '3.9'; 
    }

    else if (val1 >= 0 && val2.indexOf('USD') != -1 ) {
        //  (val1 / '3.5' ); 
        document.getElementById('result').innerHTML= val1 / '3.5';
    }

    else if (val1 >= 0 && val2.indexOf('GBT') != -1) {
        //  (val1 / '4.4' );
        document.getElementById('result').innerHTML= val1 / '4.4';
    }

   

}

