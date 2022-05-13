function randomizeHelm() {
    fetch("equipmentResources/helms.json").then(response => response.json())
        .then(json => {
            let possibleOption=[];
            for(var i in json){
                possibleOption.push(i);
            }
            let equipment = possibleOption[Math.floor(Math.random()*possibleOption.length)];
            document.getElementById("Helm").innerHTML="Helm : "+equipment;
        });
}

function randomizeChest() {
    fetch("equipmentResources/chests.json").then(response => response.json())
        .then(json => {
            let possibleOption=[];
            for(var i in json){
                possibleOption.push(i);
            }
            let equipment = possibleOption[Math.floor(Math.random()*possibleOption.length)];
            document.getElementById("Chest").innerHTML="Chest : "+equipment;
        });
}

function randomizeLegs() {
    fetch("equipmentResources/legs.json").then(response => response.json())
        .then(json => {
            let possibleOption=[];
            for(var i in json){
                possibleOption.push(i);
            }
            let equipment = possibleOption[Math.floor(Math.random()*possibleOption.length)];
            document.getElementById("Legs").innerHTML="Legs : "+equipment;
        });
}

function randomizeGauntlets() {
    fetch("equipmentResources/gauntlets.json").then(response => response.json())
        .then(json => {
            let possibleOption=[];
            for(var i in json){
                possibleOption.push(i);
            }
            let equipment = possibleOption[Math.floor(Math.random()*possibleOption.length)];
            document.getElementById("Gauntlets").innerHTML="Gauntlets : "+equipment;
        });
}

function randomizeArmor() {
    randomizeHelm();
    randomizeChest();
    randomizeLegs();
    randomizeGauntlets();
}

function randomizeTalismans() {
    fetch("equipmentResources/talismans.json").then(response => response.json())
        .then(json => {
            let possibleOption=[];
            for(var i in json){
                possibleOption.push(i);
            }
            for(let i=0;i<4;i++){
                document.getElementById("Talisman"+(i+1).toString()).innerHTML=possibleOption[Math.floor(Math.random()*possibleOption.length)];
            }
        });
}

function randomizeSummon() {
    fetch("equipmentResources/spirit-ashes.json").then(response => response.json())
        .then(json => {
            let possibleOption=[];
            for(var i in json){
                possibleOption.push(i);
            }
            document.getElementById("summon").innerHTML=possibleOption[Math.floor(Math.random()*possibleOption.length)];
        });
}

function globalRandomizer(){
    randomizeR1();
    randomizeL1();
    randomizeArmor();
    randomizeTalismans();
    randomizeSummon();

}

function randomizeR1(shield=false,sorceries=false,incatation=false,melee=true,range=false){

    fetch("equipmentResources/weapons.json").then(response => response.json())
        .then(json => {
            let possibleOption=[];
            for(var i in json){
                possibleOption.push(i);
            }
            let R1Weapon = possibleOption[Math.floor(Math.random()*possibleOption.length)];
            document.getElementById("R1").innerHTML="R1 : "+R1Weapon;
        });
}

function randomizeL1(shield=true,sorceries=true,incatation=true,melee=false,range=false){
    console.log(shield)
    fetch("equipmentResources/weapons.json").then(response => response.json())
        .then(json => {
            let possibleOption=[];
            for(var i in json){
                possibleOption.push(i);
            }
            let L1Weapon = possibleOption[Math.floor(Math.random()*possibleOption.length)];
            document.getElementById("L1").innerHTML="L1 : "+L1Weapon;
        });
}

