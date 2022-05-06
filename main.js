array1=[];

function submit(){
    var n1=document.getElementById("s1").value;
    var n2=document.getElementById("s2").value;
    var n3=document.getElementById("s3").value;
    var n4=document.getElementById("s4").value;

    array1.push(n1);
    array1.push(n2);
    array1.push(n3);
    array1.push(n4);

    console.log(array1);

    document.getElementById("display-name").innerHTML=array1;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="inline-block";
}


function sort(){

    array1.sort();
    console.log(array1);
    document.getElementById("display-name").innerHTML=array1;

}

