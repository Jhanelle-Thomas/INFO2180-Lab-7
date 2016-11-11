$(document).ready(function() {
    var lookupButton = $("#lookup");
    var result = $("#result");
    
    $("h1").before("<img id = 'pic' src='world.png' alt='ClipArt of the Earth' />");
    
    lookupButton.on("click", function(element) {
        element.preventDefault();
        if (document.getElementById("country").checkValidity()) {
            var country = $("#country").val();
            //var checkbox = document.getElementById("all").checked;
            var checkbox = $("#all");
    
            if(checkbox.is(":checked")) {
                $.ajax("world.php?all=true", {
                    method: 'GET'
                }).done(function(response) {
                    $(result).html(response);
                }).fail(function() {
                    $(result).html("There was a problem with the request.");
                });  
            } else {
                if (country != "") {
                    $.ajax("world.php?country=" + country, {
                        method: 'GET'
                    }).done(function(response) {
                        $(result).html(response);
                    }).fail(function() {
                        $(result).html("There was a problem with the request.");
                    });
                } else {
                    $(result).html("Please enter a country.");
                }
            }
        } else {
            $(result).html($("#country").validationMessage);
        }
    });
});