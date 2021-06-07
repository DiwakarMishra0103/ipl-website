$(document).ready(function () {
  var teamsInfo = JSON.parse(localStorage.getItem("team-data"));

  var teamId = window.location.search.split("=")[1];
  var requiredData = teamsInfo[teamId - 1];
  console.log(requiredData);

  var theTeam = $("#the-team");
  var teamData = $("<div>").attr("id", "team-data");
  theTeam.append(teamData);

  var teamLogo = $("<img>").attr({
    class: "team-logo",
    src: requiredData.teamIcon,
  });
  teamData.append(teamLogo);

  var teamDetails = $("<div>").addClass("team-details");
  var teamTitle = $("<h1>").addClass("team-title").text(requiredData.fullName);
  var shortName = $("<h1>")
    .addClass("team-shortname")
    .text("In short also known as " + requiredData.key);
  var numberOfTitles = $("<h1>")
    .addClass("number-of-titles")
    .text("Number to championships won: " + requiredData.championshipsWon);
  var bestBatsman = $("<h1>")
    .addClass("details-para")
    .text("Top Batsman of the team: " + requiredData.players[0].name);
  var bestBowler = $("<h1>")
    .addClass("details-para")
    .text("Top Bowler of the team: " + requiredData.players[9].name);
  var playersCount = $("<h1>")
    .addClass("details-para")
    .text("Size of the squad: 20");
  teamDetails.append(
    teamTitle,
    shortName,
    numberOfTitles,
    bestBatsman,
    bestBowler,
    playersCount
  );

  teamData.append(teamDetails);

  var theSquad = $("<div>").addClass("the-squad");
  theTeam.append(theSquad);

  var squadTitle = $("<h2>").addClass("squad-title").text("THE SQUAD");
  theSquad.append(squadTitle);

  var playersWrapper = $("<div>").addClass("players-wrapper");
  theSquad.append(playersWrapper);


  for (i = 0; i < requiredData.players.length; i++) {
    var playerCard = $("<div>").addClass("player-card");
    playersWrapper.append(playerCard);

    var playerAnchor = $("<a>").attr({
      href: "./players.html?" + requiredData.id + "=" + requiredData.players[i].id
    });
    playerCard.append(playerAnchor);

    var playerImg = $("<img>").attr({
      class: "player-img",
      src: requiredData.players[i].photos,
    });
    playerAnchor.append(playerImg);

    var playerData = $("<div>").addClass("player-data");
    playerCard.append(playerData);

    var playerName = $("<h3>")
      .addClass("player-name")
      .text("Name: " + requiredData.players[i].name);
    var playerTeam = $("<h4>")
      .addClass("player-info")
      .text("Team: " + requiredData.players[i].team);
    var playerPrice = $("<h4>")
      .addClass("player-info")
      .text("Price: " + requiredData.players[i].price);
    var playerStatus = $("<h4>")
      .addClass("player-info")
      .text("Status: " + requiredData.players[i].playingStatus);
    var playerRole = $("<h4>")
      .addClass("player-info")
      .text("Role: " + requiredData.players[i].role);

    playerData.append(
      playerName,
      playerTeam,
      playerPrice,
      playerStatus,
      playerRole
    );
  }
}


  //   for (i=0; i<requiredData.players.length; i++) {
  //       renderPlayersData(requiredData.players[i]);
  //   }
);
