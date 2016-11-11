$(document).ready(function() {
    var lookupButton = $("#lookup");
    var result = $("#result");
    
    lookupButton.on("click", function(element) {
        element.preventDefault();
        var country = $("#country").val();
        var checkbox = document.getElementById("all").checked;

        if(checkbox) {
            $.ajax("world.php?all=true", {
                method: 'GET'
            }).done(function(response) {
                $(result).html(response);
            }).fail(function() {
                $(result).html("There was a problem with the request.");
            });  
        } else {
            $.ajax("world.php?country=" + country, {
                method: 'GET'
            }).done(function(response) {
                $(result).html(response);
            }).fail(function() {
                $(result).html("There was a problem with the request.");
            });
        }
        
        /*if (country != "") {
            $.ajax("world.php?country=" + country, {
                method: 'GET'
            }).done(function(response) {
                $(result).html(response);
            }).fail(function() {
                $(result).html("There was a problem with the request.");
            });     
        } else {
            $(result).html("Please enter a country.");
        }*/
    });
});