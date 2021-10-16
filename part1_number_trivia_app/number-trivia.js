let numForm = document.querySelector('#numForm');
numForm.addEventListener("submit", event => {
    event.preventDefault();
    
    let faveNum = document.querySelector('#faveNumber').value;
    console.log(faveNum);

    document.querySelector("#displayArea h2").innerText=faveNum
})

