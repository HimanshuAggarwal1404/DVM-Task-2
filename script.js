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
function validateform(){
    var returnval=true;
    clearerrors();
    var phone=document.forms['Myform']["fphone"].value;
    if (phone.length!=10)
    {
        seterror("phone", " *Enter a valid 10-digit phone number");
        returnval=false;    
    }
    var bitsid=document.forms['Myform']['fbitsid'].value;
    var regexid=/20\d\d[AB].[A-P][A-S]\d\d\d\dP/;
    var idcheck= regexid.test(bitsid);
    if (idcheck == false)
    {
        returnval=false;
        seterror("bitsid", " *Enter a valid BITS ID");
    }
    var bitsmail=document.forms['Myform']['fmail'].value;
    var regexmail= /[a-z]20[1-2]\d\d\d\d\d@pilani.bits-pilani.ac.in/
    var mailcheck=regexmail.test(bitsmail);
    if (bitsid.length!=13){
        returnval=false;
        seterror("bitsid"," *Enter a valid BITS ID")
    }
    if (mailcheck == false)
    {
        returnval=false;
        seterror("mail"," *Enter a valid BITS E-mail")

    }
    var sdate=document.forms['Myform']['fsdatetime'].value;
    var edate=document.forms['Myform']['fedatetime'].value;
    if (sdate>edate){
        returnval=false;
        seterror("edatetime"," *Ending date-time should be after the starting date-time")
        seterror("sdatetime"," *Starting date-time should be before the ending date-time")

    }
    

    
    
    return returnval;
    


}
