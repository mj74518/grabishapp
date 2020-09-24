$(document).ready(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        // alert("hello");
    });

    // $(function() {
    //     alert("hello");
    // });
    $("#myimg").click(function() {
        $("#file").click();
    });

});