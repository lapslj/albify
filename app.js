
const jButton = document.querySelector("button")
const jName = document.querySelector('input[name="jName"]')
const jForm = document.querySelector("form")
const jPunt = document.querySelector("#jPut")

function albeeAte(str){
    let nArray = Array.from(str);
    let blork = ""
    for (let letter of nArray){ 
        let rVow = "aeiou".indexOf(letter) === -1 ? letter : "alb" + letter;
        blork = blork + rVow;}
    return blork;
}

jButton.addEventListener("click", function(e){
    const newName = document.createElement("div");
    e.preventDefault();
    newName.append(albeeAte(jName.value));
    jPunt.append(newName);
    jForm.reset();
})

