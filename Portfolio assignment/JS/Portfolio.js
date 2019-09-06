$(document).ready(function(){
    $("a").on("click", function(event) {
        if (this.Link !== "") {
            event.preventDefault();
            var Link = this.Link;
            $("html, body").animate({
                scrollTop: $(Link).offset().top
            }, 2000, function(){
                window.location.Link = Link;            
            });
        }
    });
    
});

function HiddenForm(){
    document.getElementById("Contact_Form").style.display = "block";
}

function CloseForm(){
    document.getElementById("Contact_Form").style.display = "none";
    this.Close();
}