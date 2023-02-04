var formsubmitbutton=document.getElementById("formId");
function submitForm(event){

   event.preventDefault();
}

formsubmitbutton.addEventListener('submit', submitForm);
function clearerrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML="";

    }

}

function seterror(id, error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML+=error;


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
    var regexid=/20\d\d[AB].[APT][A-S]\d\d\d\dP/;
    var idcheck= regexid.test(bitsid);
    if (idcheck == false)
    {
        returnval=false;
        seterror("bitsid", " *Enter a valid BITS ID");
    }
    var bitsmail=document.forms['Myform']['fmail'].value;
    var regexmail= /[fph]20[1-2]\d\d\d\d\d@pilani.bits-pilani.ac.in/
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
    var amount=document.forms['Myform']["famount"].value;
    if (amount<0){
        returnval=false;
        seterror("amount","Enter a valid amount ID")
    }

    if (returnval==true){
        collectdata();
    }

    return returnval;
    
}

function collectdata(){
    var rate_value; 
    var amount=document.forms['Myform']["famount"].value;
    if (document.getElementById('ffree').checked) {
        rate_value = document.getElementById('ffree').value
        amount = "0(Free)"
    }
    else if(document.getElementById('fpaid').checked){
        rate_value = document.getElementById('fpaid').value
    }
    var formvalues= document.forms['Myform'];
    var name=document.forms['Myform']["fname"].value;
    var dept=document.forms['Myform']["fdept"].value;
    var desc=document.forms['Myform']["fdesc"].value;
    var venue=document.forms['Myform']["fvenue"].value;
    var personname=document.forms['Myform']["fpersonname"].value;
    var bitsid=document.forms['Myform']["fbitsid"].value;
    var mail=document.forms['Myform']["fmail"].value;
    var phone=document.forms['Myform']["fphone"].value;
    var sdate=document.forms['Myform']["fsdatetime"].value;
    var edate=document.forms['Myform']["fedatetime"].value;
    var list= document.getElementById("list");
    var html="";
    for (var i=0; i<2; i++){
        html="<div><div><b>Name:  </b>"+name+"</div><div><b>Department:  </b>"+dept+"</div><div><b>Description of Event:  </b>"+desc+"</div><div><b>Veue:  </b>"+venue+"</div><div><b>Name of Person:  </b>"+personname+"</div><div><b>BITS ID:  </b>"+bitsid+"</div><div><b>BITS E-mail:  </b>"+mail+"</div><div><b>Phone Number:  </b>"+phone+"</div><div><b>Is event paid of free:  </b>"+rate_value+"</div><div><b>Registrations Amount:  </b>"+amount+"</div><div><b>Starting Date:  </b>"+sdate+"</div><div><b>Ending Date:  </b>"+edate+"</div></div>"
    }
    list.innerHTML+=html;
    // document.writeln("<b>Your Entered Data</b>"+"<br>"+"<b>Event's Name: </b>"+ name + "<br>");    
    // document.writeln("<b>Organising Department: </b>"+ dept + "<br>");    
    // document.writeln("<b>Event Description: </b>"+ desc + "<br>");    
    // document.writeln("<b>Venue: </b>"+ venue + "<br>");    
    // document.writeln("<b>Person to be contacted: </b>"+ personname + "<br>");    
    // document.writeln("<b>BITS ID: </b>"+ bitsid + "<br>");    
    // document.writeln("<b>BITS E-Mail: </b>"+ mail + "<br>");    
    // document.writeln("<b>Contact No.: </b>"+ phone + "<br>");    
    // document.writeln("<b>Starting Date and time: </b>"+ sdate + "<br>");    
    // document.writeln("<b>Ending Date and time: </b>"+ edate + "<br>");   
    // document.writeln("<b>Registrations Amount: </b>"+ amount + "<br>");  
    // document.writeln("<b>Is event paid of free:  </b>"+ rate_value + "<br>");  

 

}

