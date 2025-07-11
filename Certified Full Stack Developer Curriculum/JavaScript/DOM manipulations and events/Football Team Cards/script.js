const footballTeam = {
    team: "Real Madrid",
    year: 1925,
    headCoach: "Guardiola",
    players: [
      {
        name: "Thibaut Courtois",
        position: "goalkeeper",
        isCaptain: false,
      },

      {
        name: "David Alaba",
        position: "defender",
        isCaptain: false,
      },

      {
        name: "Antonio Rüdiger",
        position: "defender",
        isCaptain: false,
      },
      {
        name: "Ferland Mendy",
        position: "defender",
        isCaptain: false,
      },
      {
        name: "Dani Carvajal",
        position: "defender",
        isCaptain: false,
      },
      {
        name: "Luka Modrić",
        position: "midfielder",
        isCaptain: false,
      },
      {
        name: "Toni Kroos",
        position: "midfielder",
        isCaptain: false,
      },
      {
        name: "Dani Ceballos",
        position: "midfielder",
        isCaptain: false,
      },
      {
        name: "Eduardo Camavinga",
        position: "midfielder",
        isCaptain: false,
      },
      {
        name: "Kylian Mbappe",
        position: "forward",
        isCaptain: true,
      },
      
      {
        name: "Rodrygo",
        position: "forward",
        isCaptain: false,
      }
    ]
}

function selectPlayers(value) {
  const lowerCaseValue = value.toLowerCase();

  if (lowerCaseValue === "all") {
    return footballTeam.players;
  }

  return footballTeam.players.filter(player => player.position === lowerCaseValue);

}

function createPlayerCard(player) {
  const div = document.createElement("div");
  div.classList.add("player-card");
  
  const h2 = document.createElement("h2");
  h2.textContent = player.isCaptain ? "(Captain) " : "";
  h2.textContent += `${player.name}`;

  div.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = `Position: ${player.position}`;

  div.appendChild(p);

  return div;
}

const coach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");

coach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

const players = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

players.addEventListener("change", function() {
  playerCards.innerHTML = "";
  const selectedPlayers = selectPlayers(players.value);
  
  for (const player of selectedPlayers) {
    const div = createPlayerCard(player);
    playerCards.appendChild(div);

  }
})


