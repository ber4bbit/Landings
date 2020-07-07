let phoenix = {
    target: document.getElementById('targetPhoenix'),
    check: false,
    classes: document.getElementById('targetPhoenix').classList,
    nameClasses: document.getElementById('targetNamePhoenix').classList,
    iconsClass: document.getElementById('targetIconsFir').classList,
    existence: document.getElementById('existPhoenix').classList
}
let jett = {
    target: document.getElementById('targetJett'),
    check: false,
    classes: document.getElementById('targetJett').classList,
    nameClasses: document.getElementById('targetNameJett').classList,
    iconsClass: document.getElementById('targetIconsSec').classList,
    existence: document.getElementById('existJett').classList
}
let sova = {
    target: document.getElementById('targetSova'),
    check: false,
    classes: document.getElementById('targetSova').classList,
    nameClasses: document.getElementById('targetNameSova').classList,
    iconsClass: document.getElementById('targetIconsThi').classList,
    existence: document.getElementById('existSova').classList
}
let sage = {
    target: document.getElementById('targetSage'),
    check: false,
    classes: document.getElementById('targetSage').classList,
    nameClasses: document.getElementById('targetNameSage').classList,
    iconsClass: document.getElementById('targetIconsFou').classList,
    existence: document.getElementById('existSage').classList
}
const skillIcons = document.querySelectorAll('[data-src]');
// console.log(skillIcons);
const skillIconsArr = Array.prototype.slice.call(skillIcons);
skillIconsArr.map((icon, i)=>{
    const iconPath = icon.dataset.src;
    fetch(iconPath).then(async(response) => {
        const htmlPath = await response.text();
        skillIcons[i].innerHTML = htmlPath;
    });
})
console.log(skillIcons[0]);
targets = [phoenix,jett,sova,sage];
function flagCheck(){
    targets.map((agent)=>{
        if (agent.check){
            agent.check = false;
            agent.classes.remove('selectedAgent');
            agent.nameClasses.remove('selectedAgentName');
            agent.iconsClass.remove('selectedAgentSkills');
            agent.existence.remove('selectedFooter');
        }
    })
}
phoenix.target.addEventListener('click', () =>{
    if (!phoenix.check){
        flagCheck();
        phoenix.classes.add('selectedAgent');
        phoenix.nameClasses.add('selectedAgentName');
        phoenix.iconsClass.add('selectedAgentSkills');
        phoenix.existence.add('selectedFooter');
        phoenix.check = true;
    }
    else if (phoenix.check){
        phoenix.classes.remove('selectedAgent');
        phoenix.nameClasses.remove('selectedAgentName');
        phoenix.iconsClass.remove('selectedAgentSkills');
        phoenix.existence.remove('selectedFooter');
        phoenix.check = false;
    }
}) 
jett.target.addEventListener('click', () =>{
    if (!jett.check){
        flagCheck();
        jett.classes.add('selectedAgent');
        jett.nameClasses.add('selectedAgentName');
        jett.iconsClass.add('selectedAgentSkills');
        jett.existence.add('selectedFooter');
        jett.check = true;
    }
    else if (jett.check){
        jett.classes.remove('selectedAgent');
        jett.nameClasses.remove('selectedAgentName');
        jett.iconsClass.remove('selectedAgentSkills');
        jett.existence.remove('selectedFooter');
        jett.check = false;
    }
})
sova.target.addEventListener('click', () =>{
    if (!sova.check){
        flagCheck();
        sova.classes.add('selectedAgent');
        sova.nameClasses.add('selectedAgentName');
        sova.iconsClass.add('selectedAgentSkills');
        sova.existence.add('selectedFooter');
        sova.check = true;
    }
    else if (sova.check){
        sova.classes.remove('selectedAgent');
        sova.nameClasses.remove('selectedAgentName');
        sova.iconsClass.remove('selectedAgentSkills');
        sova.existence.remove('selectedFooter');
        sova.check = false;
    }
})
sage.target.addEventListener('click', () =>{
    if (!sage.check){
        flagCheck();
        sage.classes.add('selectedAgent');
        sage.nameClasses.add('selectedAgentName');
        sage.iconsClass.add('selectedAgentSkills');
        sage.existence.add('selectedFooter');
        sage.check = true;
    }
    else if (sage.check){
        sage.classes.remove('selectedAgent');
        sage.nameClasses.remove('selectedAgentName');
        sage.iconsClass.remove('selectedAgentSkills');
        sage.existence.remove('selectedFooter');
        sage.check = false;
    }
})
