var a = document.getElementsByTagName("input");
var Next_btn = document.getElementById("Next_btn");
var state = null;

var filled_values = [];

Next_btn.addEventListener("click", ()=>{
    for(var i = 0; i <= a.length - 1 ; i++){
        if (a[i].value == ""){
            alert("Please Enter The " + document.getElementsByTagName("p")[i].innerHTML);
            state = 0;
        }
        else{
            state = 1;
            filled_values[i] = a[i].value;
        }
    }

    if (state == 1){
        
    }
});
