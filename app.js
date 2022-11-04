
const jButton = document.querySelector("#rButton")
const jStoned = document.querySelector("#rStoned")
const jName = document.querySelector('input[name="jName"]')
const jForm = document.querySelector("form")
const jPunt = document.querySelector("#jPut")

function albeeAte(str){
    let nArray = Array.from(str);
    let blork = ""
    for (let i = 0; i < nArray.length; i++){
        let letter = nArray[i];
        let endo = i - 1;
        let lastvow = nArray[endo];
        console.log(lastvow);
        let rVow = ""
        if ("aeiou".indexOf(lastvow) !== -1){rVow = letter}
        else{
            rVow = "aeiou".indexOf(letter) === -1 ? letter : "alb" + letter;
        }
            blork = blork + rVow;}
    return blork;
}

jButton.addEventListener("click", function(e){
    createAlbement(e,jName.value)
})

function createAlbement(e,val){
    const newName = document.createElement("div");
    e.preventDefault();
    newName.append(albeeAte(val));
    newName.classList.add("nametext");
    jPunt.append(newName);
    jForm.reset();
}

jStoned.addEventListener("click", function(e){
    setTimeout(createAlbement(e,jName.value),3000);
    setTimeout(createAlbement(e,albeeAte(jName.value)),2000);
})


