function clearerrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML="";

    }

}
function seterror(id, error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;


}
function validateforma(){
    var returnval=true;
    clearerrors();

    var phone=document.forms['Myform2']["number"].value;
    if (phone.length!=10)
    {
        seterror("contact", " *Enter a valid 10-digit phone number");
        returnval=false;    
    }
    var bitsid=document.forms['Myform2']['id'].value;
    var regexid=/20\d\d[AB].[A-P][A-S]\d\d\d\dP/;
    var idcheck= regexid.test(bitsid);
    if (idcheck == false)
    {
        returnval=false;
        seterror("bitsid", " *Enter a valid BITS ID");
    }
    if (bitsid.length!=13){
        returnval=false;
        seterror("bitsid"," *Enter a valid BITS ID");
    }
    return returnval;
}