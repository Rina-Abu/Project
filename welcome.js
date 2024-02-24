firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }else{
        document.getElementById("user").innerHTML = `Hello ${UserInfo.firstname + " " + UserInfo.lastname}!`;
    }
})


function logout(){
    window.location.href = 'login.html';
    firebase.auth().signOut()
    
}