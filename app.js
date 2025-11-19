
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
        if ("aeiouAEIOU".indexOf(lastvow) !== -1){rVow = letter}
        else{
            rVow = "aeiouAEIOU".indexOf(letter) === -1 ? letter : "aaaaoooouuuuuu" + letter;
        }
            blork = blork + rVow;}
    return blork;
}



function createAlbement(e,val){
    const newName = document.createElement("div");
    e.preventDefault();
    newName.append(albeeAte(val));
    newName.classList.add("nametext");
    jPunt.append(newName);
    jForm.reset();
}

jButton.addEventListener("click", function(e){
    createAlbement(e,jName.value)
})

jStoned.addEventListener("click", function(e){
    let starter = jName.value;
    let starter2 = albeeAte(starter);
    let starter3 = albeeAte(starter2);
    let starter4 = albeeAte(starter3);
    let starter5 = albeeAte(starter4);
    createAlbement(e,starter);
    setTimeout(function(){
        delayAlbement(starter2)},"2000")
    setTimeout(function(){
        delayAlbement(starter3)},"4000")
    setTimeout(function(){
        delayAlbement(starter4)},"6000")
    setTimeout(function(){
        delayAlbement(starter5)},"8000")
    })

function delayAlbement(val){
    const newName = document.createElement("div");
    newName.append(albeeAte(val));
    newName.classList.add("nametext");
    jPunt.append(newName);
}

