
let counter = 0 
let welcome = " Previous entries : "
function increment() { 
    counter += 1
    document.getElementById("count-el").innerText = counter
}
function reset() {
    counter = 0
    document.getElementById("count-el").textContent = 0
}
function save() {
    welcome+=counter + " - "
    document.getElementById("welcome-el").textContent = welcome
}




    

