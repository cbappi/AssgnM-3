//Question number - 1
var x = 10,y = -1,z = 0;


if(x>-1){
    document.write("positive"+"<br>")
}
else{
    document.write("negative")
}


if(y<0){
    document.write("negative"+"<br>")
}
else{
    document.write("not negative")
}



if(z==0){
    document.write("number is zero"+"<br>")
}
else{
    document.write("not match condition")
}

document.write("-----------------"+"<br>")

//Question number - 2

var a = 18, b = 13;

if(a>=18){
    document.write("You are eligible to vote.."+"<br>")
}
else{
    document.write("condition not matched")
}



if(b<=13){
    document.write("Sorry ... you can't vote"+"<br>")
}
else{
    document.write("condition not matched")
}

document.write("-----------------"+"<br>")

//Question number - 4
var q = 5,w = "G",e = 9;

if(typeof(q)){
    document.write("digit"+"<br>")
}
else{
    document.write("condition not matched")
}


if(typeof(w)){
    document.write("is not digit"+"<br>")
}
else{
    document.write("condition not matched")
}



if(typeof(e)){
    document.write("digit"+"<br>")
}
else{
    document.write("condition not matched")
}

document.write("-----------------"+"<br>")

//Question number - 5

var j = 10, k = 20, l = 50;

if(j>k && j>l){
    document.write(j+" is biggest number"+"<br>")
}
else if(k>j && k>l){
    document.write(k+" is biggest number"+"<br>")
}

else if(l>k && l>k){
    document.write(l+" is biggest number"+"<br>")
}

else{"Should Check numbers"}




var f = 99, g = 102, h = 9;

if(f>g && f>h){
    document.write(f+" is biggest number"+"<br>")
}
else if(g>f && g>h){
    document.write(g+" is biggest number"+"<br>")
}

else if(h>f && h>f){
    document.write(h+" is biggest number"+"<br>")
}

else{"Should Check numbers"}
document.write("-----------------"+"<br>")

//QUESTION NO - 3
var sub1, sub2, sub3, sub4, sub5, avg;
sub1 = parseInt(prompt("Enter number one"));
sub2 = parseInt(prompt("Enter number two"));
sub3 = parseInt(prompt("Enter number three"));
sub4 = parseInt(prompt("Enter number four"));
sub5 = parseInt(prompt("Enter number five"));

avg = (sub1+sub2+sub3+sub4+sub5)/5

if(avg>80 && avg<=100){
    document.write("Got A+"+"<br>")
}

else if(avg>70 && avg<=80){
    document.write("Got A"+"<br>")
}
else if(avg>60 && avg<=70){
    document.write("Got B"+"<br>")
}

else if(avg>50 && avg<=60){
    document.write("Got C"+"<br>")
}
else if(avg>40 && avg<=50){
    document.write("Got D"+"<br>")
}
else{
    document.write("Got F"+"<br>")
}



