// const modebutton =
let myBtn = document.getElementById("myMainBtn")

let isDark = false

function toggleMode(){
    if( isDark == false){
        body.classList.add("btnDark")
        body.classList.remove("btnLight")
        isDark = true
    }else{
        body.classList.remove("btnDark")
        body.classList.add("btnLight")
        isDark = false
    }
}

myBtn.classList.add("btnDark")
// alert("Got here")
// myBtn.classList.remove("btnDark")


