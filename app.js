document.addEventListener('DOMContentLoaded', () => {
const Draft = {
  players: [
    {
      name: "Joe Burrow",
      college: "LSU",
    },
    {
      name: "Chase Young",
      college: "Ohio State",
    },
    {
      name: "Jeff Okudah",
      college: "Ohio State",
    },
    {
      name: "Isaiah Simmons ",
      college: "Clemson",
    },
    {
      name: "Jedrick Wills",
      college: "Alabama",
    },
    {
      name: "Derrick Brown",
      college: "Auburn",
    },
    {
      name: "Ceedee Lamb",
      college: "Olklahoma",
    },
    {
      name: "Jerry Jeudy",
      college: "Alabama",
    },
    {
      name: "Henry Ruggs III",
      college: "Alabama",
    },
    {
      name: "Javon Kinlaw ",
      college: "South Carolina",
    },
    {
      name: "Tristain Wirfs",
      college: "Iowa",
    },
    {
      name: "Mecki Becton",
      college: "Louisville",
    },
  ],
  teams: [
    {
      name: "Green Bay Packers",
      coach: "Matt LaFleur",
      pick: "30",
    },
    {
      name: "Dallas Cowboys",
      coach: "Mike McCarthy",
      pick: "17",
    },
    {
      name: "New York Giants",
      coach: "Joe Judge",
      pick: "4",
    },
    {
      name: "Cincinatti Bengals",
      coach: "Zac Taylor",
      pick: "1",
    },
    {
      name: "Washington Redskins",
      coach: "Ron Rivera",
      pick: "2",
    },
    {
      name: "Minnesota Vikings",
      coach: "Mike Zimmer",
      pick: "26",
    },
    {
      name: "Philadelphia Eagles",
      coach:"Doug Pedederson",
      pick: "22",
    },
    {
      name: "New York Jets",
      coach: "Adam Gase",
      pick: "11",
    },
    {
      name: "Jacksonville Jaguars",
      coach: "Doug Marrone",
      pick: "7",
    },
    {
      name: "Detroin Lions",
      coach: "Matt Patricia",
      pick: "3",
    },
    {
      name: "Chicago Bears",
      coach: "Matt Nagy",
      pick: "30",
    },
    {
      name: "Tampa Bay Bucaneers",
      coach: "Bruce Arians",
      pick: "14",
    },
  ],
};

const teamLen = Draft.teams.length;

teamIndexesPicked = []
playerIndexesPicked = []

const startbtn = document.querySelector('#startbtn'); 
const clearbtn = document.querySelector('#clearbtn')
const newbtn = document.querySelector('#newbtn'); 


startbtn.addEventListener('click', () => {
  console.log('function invoked');
  if(teamIndexesPicked.length === 0) {
    draftSim(); //else would crash program
  }
});
clearbtn.addEventListener("click", clear);
newbtn.addEventListener("click", newRandom);



const cardContainer = document.querySelector('#cardcontainer'); 


function draftSim() {
  for (var i = 0; i < teamLen; i++) {
    playerIndex = Math.floor(Math.random() * Draft.players.length);
    teamIndex = Math.floor(Math.random() * Draft.teams.length);
        
    var card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('m-3')
        card.classList.add('round')
        var cardhead = document.createElement('h5');
        cardhead.classList.add('card-header');
        var cardbody = document.createElement('div'); 
        cardbody.classList.add('card-body');
        var cardtitle = document.createElement('h5'); 
        cardtitle.classList.add('card-title'); 
        var cardtext = document.createElement('p'); 
        cardtext.classList.add('card-text');

      if (teamIndexesPicked.includes(teamIndex)) { //team already picked
      
          while (teamIndexesPicked.includes(teamIndex)) {
          teamIndex = Math.floor(Math.random() * Draft.teams.length);
          }

          if (playerIndexesPicked.includes(playerIndex)) {
            while (playerIndexesPicked.includes(playerIndex)) {
              playerIndex = Math.floor(Math.random() * Draft.players.length);
          }

       
        cardhead.textContent = playerIndexesPicked.length + 1;
        cardtitle.textContent = Draft.players[playerIndex].name;
        cardtext.textContent = "Selected by the " + Draft.teams[teamIndex].name; 

        cardbody.appendChild(cardtitle); 
        cardbody.appendChild(cardtext);
        card.appendChild(cardhead); 
        card.appendChild(cardbody); 
        cardContainer.appendChild(card);
     

        teamIndexesPicked.push(teamIndex);
        playerIndexesPicked.push(playerIndex);

      } 
          else { // team and player not picked

        cardhead.textContent = playerIndexesPicked.length + 1;
        cardtitle.textContent = Draft.players[playerIndex].name;
        cardtext.textContent =
          "Selected by the " + Draft.teams[teamIndex].name;

        cardbody.appendChild(cardtitle);
        cardbody.appendChild(cardtext);
        card.appendChild(cardhead);
        card.appendChild(cardbody);
        cardContainer.appendChild(card);

        teamIndexesPicked.push(teamIndex);
        playerIndexesPicked.push(playerIndex);

      }
    } else if (!teamIndexesPicked.includes(teamIndex)) {
      if (playerIndexesPicked.includes(playerIndex)) {
        while (playerIndexesPicked.includes(playerIndex)) {
          playerIndex = Math.floor(Math.random() * Draft.players.length);
        }

 
         cardhead.textContent = playerIndexesPicked.length + 1;
         cardtitle.textContent = Draft.players[playerIndex].name;
         cardtext.textContent =
           "Selected by the " + Draft.teams[teamIndex].name;

         cardbody.appendChild(cardtitle);
         cardbody.appendChild(cardtext);
         card.appendChild(cardhead);
         card.appendChild(cardbody);
         cardContainer.appendChild(card);
         teamIndexesPicked.push(teamIndex);
         playerIndexesPicked.push(playerIndex);

      } else {
     
         cardhead.textContent = playerIndexesPicked.length + 1;
         cardtitle.textContent = Draft.players[playerIndex].name;
         cardtext.textContent =
           "Selected by the " + Draft.teams[teamIndex].name;

         cardbody.appendChild(cardtitle);
         cardbody.appendChild(cardtext);
         card.appendChild(cardhead);
         card.appendChild(cardbody);
         cardContainer.appendChild(card);
         teamIndexesPicked.push(teamIndex);
         playerIndexesPicked.push(playerIndex);

      }
    }
  }
}
function clear() {
    cardContainer.textContent=''; 
    teamIndexesPicked = []
    playerIndexesPicked = []
}

function newRandom() {
  clear();  
  draftSim(); 
 
}



})

