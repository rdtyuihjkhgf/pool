friendsname=[];

function submit(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var name4=document.getElementById("name4").value;
    
    friendsname.push(name1);
    friendsname.push(name2);
    friendsname.push(name3);
    friendsname.push(name4);
    console.log(friendsname);
    document.getElementById("displayname").innerHTML=friendsname;
    document.getElementById("submit").style.display="none"
    document.getElementById("sort").style.display="inline-block"
}
function sort(){
    friendsname.sort();
console.log(friendsname)
document.getElementById("displayname").innerHTML=friendsname;
}