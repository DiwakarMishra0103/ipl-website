$(document).ready(function () {
    var teamsInfo = JSON.parse(localStorage.getItem("team-data"));
    console.log(teamsInfo);

    $("#submit-btn").click(function (e) {
        e.preventDefault();
        var teamName = $("#team-name").val();
        var teamIcon = $("#team-icon").val();
        var playerCount = $("#player-count").val();
        var championshipCount = $("#championship-count").val();
        var teamKey = $("#team-key").val();

        var teamObj = {
            id: teamsInfo.length + 1,
            fullName: teamName,
            key: teamKey,
            championshipsWon: Number(championshipCount),
            squadSize: Number(playerCount),
            teamIcon: teamIcon,
            players: [],
        };
        teamsInfo.push(teamObj);
        localStorage.setItem("team-data", JSON.stringify(teamsInfo));
        alert("New Team added successfully");
        location.assign("./create-team.html");
    });
});