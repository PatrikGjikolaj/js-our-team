const team = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" }
]

for (const key in team) {
    console.log(`Il membro ${key} ha le seguenti informazioni:`, team[key]);
}

for (let i = 0; i < team.length; i++) {
    
    const nuovoDiv = document.createElement("div");
    const nuovoDiv1 = document.createElement("div");
    const nuovoDiv2 = document.createElement("div");
    nuovoDiv.innerText = team[i].nome;
    nuovoDiv1.innerText = team[i].ruolo;
    nuovoDiv2.innerText = team[i].foto;
    griglia.appendChild(nuovoDiv);
    griglia.appendChild(nuovoDiv1);
    griglia.appendChild(nuovoDiv2);
    nuovoDiv.classList.add("scheda", "my-3");
    nuovoDiv1.classList.add("scheda", "my-3");
    nuovoDiv2.classList.add("scheda", "my-3");
}