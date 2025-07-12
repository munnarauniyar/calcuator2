var output=document.getElementById("inptxt");
var calculate=(num)=>
    {
        output.value=output.value+num;
    }
var result=()=>
{
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Pleaee Enter Valid Number.");
    }
}
function clr(){
    output.value=" ";
}
function del(){
    output.value=output.value.slice(0,-1);
}
