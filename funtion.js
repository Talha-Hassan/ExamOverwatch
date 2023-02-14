async function clicked(){
//     console.log("clicked")
//    fetch('http://192.168.0.106:5000/predict',{method : POST, headers: {
//     "Content-type": "application/json; charset=UTF-8"
//     }}).then(x=>{
//     console.log("work")
//    }).catch(x=>{
//     console.log("error")
//    })
    document.getElementById('btn-alert').text = "Turning On..."
const options = {
	method: 'POST'
};

fetch('http://192.168.0.106:5000/predict', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
function login(){
    let username = 'admin'
    let password = 'admin'
    if(document.getElementById('username').value == username){
        if(document.getElementById('password').value == password){
            localStorage.setItem('logged',true)
            window.location.replace('/index.html')
        }
        else{
            alert("Incorrect Username/Password!")
        }
    }
    else{
        alert("Incorrect Username/Password!")
    }
    console.log("helo")

}
