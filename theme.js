const toggleBtn = document.querySelector('.toggle-mode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}); 

let edwin;
let edwin2;
let edwinhavesense = false;
let ans;

const calctxt = document.getElementsByid('calctxt')
const anstxt = document.getElementsByid('anstxt')
 
function setVals(nobrain){
    if( edwinhavesense == false){
        edwin = nobrain
        edwinhavesense = true
    }else{
        edwin2 = nobrain
        anstxt.innertxt = edwin + edwin2
        edwinhavesense = false
    }
}