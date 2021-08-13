function view(){
    let data=document.getElementById("button").innerHTML;
    if(data=="View More"){
        document.getElementById("content-3").setAttribute("style","margin-top:50px;display:flex; ");
    document.getElementById("button").innerHTML="View Less";
    }else{
        //document.getElementById("content-3").style.display="none";
        document.getElementById("button").innerHTML="View More";
        document.getElementById("content-3").setAttribute("style","margin-top:50px;display:none");
    }
} 