const Draft = {
    players:
        [
            {
                name: 'Joe Burrow',
                college: 'LSU'
            },
            {
                name: 'Chase Young',
                college: 'Ohio State'
            },
            {
                name: 'Jeff Okudah',
                college: 'Ohio State'
            },
            {
                name: 'Isaiah Simmons ',
                college: 'Clemson'
            },
            {
                name: 'Jedrick Wills',
                college: 'Alabama'
            },
            {
                name: 'Derrick Brown',
                college: 'Auburn'
            },
        ],
    teams:
        [
            {
                name: 'Green Bay Packers',
                coach: 'Matt LaFleur',
                pick: '30'
            },
            {
                name: 'Dallas Cowboys',
                coach: 'Mike McCarthy',
                pick: '17'
            },
            {
                name: 'New York Giants',
                coach: 'Joe Judge',
                pick: '4'
            },
            {
                name: 'Cincinatti Bengals',
                coach: 'Zac Taylor',
                pick: '1'
            },
            {
                name: 'Washington Redskins',
                coach: 'Ron Rivera',
                pick: '2'
            }

        ],

}



const teamLen = Draft.teams.length;

teamIndexesPicked = []
playerIndexesPicked = []


function draftSim () {

    for(var i = 0; i < teamLen; i ++ ) {
        
        playerIndex = Math.floor(Math.random() * Draft.players.length);
        teamIndex = Math.floor(Math.random() * Draft.teams.length);
       
              
         if ((teamIndexesPicked.includes(teamIndex))) {
          
            while (teamIndexesPicked.includes(teamIndex)) {
                teamIndex = Math.floor(Math.random() * Draft.teams.length);
            }
        
            
            if(playerIndexesPicked.includes(playerIndex)) {
                
                 while (playerIndexesPicked.includes(playerIndex)) {
                  playerIndex = Math.floor(Math.random() * Draft.players.length); 
                 } 


                console.log(` and the ${Draft.teams[teamIndex].name} select ${Draft.players[playerIndex].name} from ${Draft.players[playerIndex].college} `)
                teamIndexesPicked.push(teamIndex)
                playerIndexesPicked.push(playerIndex);

                console.log(teamIndex); 
                console.log(teamIndexesPicked);
            }

            else {
                console.log(` and the ${Draft.teams[teamIndex].name} select ${Draft.players[playerIndex].name} from ${Draft.players[playerIndex].college} `);
                teamIndexesPicked.push(teamIndex);
                playerIndexesPicked.push(playerIndex);

                console.log(teamIndex);
                console.log(teamIndexesPicked);
            }

        }

        else if (!(teamIndexesPicked.includes(teamIndex))) {

            if (playerIndexesPicked.includes(playerIndex)) {
              while (playerIndexesPicked.includes(playerIndex)) {
                playerIndex = Math.floor(Math.random() * Draft.players.length);
              }

              console.log(` and the ${Draft.teams[teamIndex].name} select ${Draft.players[playerIndex].name} from ${Draft.players[playerIndex].college} `);
              teamIndexesPicked.push(teamIndex);
              playerIndexesPicked.push(playerIndex);


              console.log(teamIndex);
              console.log(teamIndexesPicked);
            }
            else {
             console.log(` and the ${Draft.teams[teamIndex].name} select ${Draft.players[playerIndex].name} from ${Draft.players[playerIndex].college} `)
             teamIndexesPicked.push(teamIndex)
             playerIndexesPicked.push(playerIndex);

             console.log(teamIndex);
             console.log(teamIndexesPicked);
            }
        } 
        
    }
}

draftSim();


