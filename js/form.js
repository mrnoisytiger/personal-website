function ani(){
    $("#plane").fadeOut(100);
    document.getElementById('plane').className ='animation';
}
function anitwo(){
    document.getElementById('bg').className ='animation2';
}

function AJAXsubmit() {
    $("#contact-form").submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            anitwo();
            $("#contact-form label").each(function() {
                $(this).innerHTML("");
            });
        });
      });
}