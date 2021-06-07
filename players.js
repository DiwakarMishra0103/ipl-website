$(document).ready(function() {
  var teamsInfo = JSON.parse(localStorage.getItem("team-data"));

  var teamId = window.location.search.split("")[1];
  var playerId = window.location.search.split("=")[1];
  var requiredInfo = teamsInfo[teamId-1].players[playerId-1];
  console.log(requiredInfo);
  console.log(playerId);
  console.log(teamId);

  var theplayer = $("#the-player");
  var playerData = $("<div>").addClass("player-data");
  theplayer.append(playerData);

  var playerPhoto = $("<img>").attr({
      src: requiredInfo.photos,
      class: "player-photo"
  })
  playerData.append(playerPhoto);

  var playerDetails = $("<div>").addClass("player-details");
  playerData.append(playerDetails);

  var playerName = $("<h1>").addClass("player-name").text(requiredInfo.name);
  var playerTeam = $("<h2>").addClass("player-info").text("Team: " + requiredInfo.team);
  var playerPrice = $("<h2>").addClass("player-info").text("Price: " + requiredInfo.price);
  var playerStatus = $("<h2>").addClass("player-info").text("Status: " + requiredInfo.playingStatus);
  var playerRole = $("<h2>").addClass("player-info").text("Role: " + requiredInfo.role);

  playerDetails.append(playerName, playerTeam, playerPrice, playerStatus, playerRole);
})