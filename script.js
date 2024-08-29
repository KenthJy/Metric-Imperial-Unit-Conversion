let inputEl = document.getElementById("inputs");
let converter = document.getElementById("convert");
const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEL = document.getElementById('mass'); 

converter.addEventListener('click', function(){
    let input = inputEl.value
    lengthEl.innerHTML = `${input} meters = ${(input * 3.281).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)
    } meters`


    document.body.classList.toggle('night-mode')
    
    vulume(input)
    massEl(input)
})

function vulume(doma){
    volumeEl.innerHTML = `${doma} liters = ${(doma / 3.785).toFixed(3)} gallons | ${doma} gallons = ${(doma * 3.785).toFixed(3)} liters`
}

function massEl(maruko){
    massEL.innerHTML = `${maruko} kilos = ${(maruko * 2.205
    ).toFixed(3)} pounds | ${maruko} pounds = ${(maruko / 2.205
    ).toFixed(3)} kilos`
}