$(document).ready(function () {
    var teamsInfo = JSON.parse(localStorage.getItem("team-data"));

    $("#submit-btn").click(function (e) {
        e.preventDefault();

        var playerName = $("#player-name").val();
        var playerPrice = $("#player-price").val();
        var playerRole = $("#player-role").val();
        var playerStatus = $("#player-status").val();
        var playerPhoto = $("#player-photo").val();
        var teamKey = $("#team-key").val();

        var keyNumber = "";
        for (i = 0; i < teamsInfo.length; i++) {
            if (teamsInfo[i].key === teamKey) {
                keyNumber = parseInt(i);
            }
        }
        var requiredInfo = teamsInfo[keyNumber];

        var playerObj = {
            id: requiredInfo.players.length + 1,
            name: playerName,
            team: teamKey,
            role: playerRole,
            playingStatus: playerStatus,
            price: playerPrice,
            photos: playerPhoto,
        };

        teamsInfo[keyNumber].players.push(playerObj);
        localStorage.setItem("team-data", JSON.stringify(teamsInfo));
        alert("New player added successfully");
        location.assign("./create-player.html");
        console.log(teamsInfo[keyNumber].players);
    });
});
