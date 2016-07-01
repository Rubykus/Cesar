$(document).ready(function(){
    $("#button2").click(function(){
        var text = $("#input").val();
        var step = $("#step").val();

        $.ajax({
            url: "php/cod.php",
            type: "POST",
            dataType: "json",
            data: "text="+text+"&step="+step,
            success: function(data){
                $("#output").text( data );
            }
        });
    });

    $("#button1").click(function(){
        var text = $("#input").val();
        var step = $("#step").val();

        $.ajax({
            url: "php/decod.php",
            type: "POST",
            dataType: "json",
            data: "text="+text+"&step="+step,
            success: function(data){
                $("#output").text( data );
            }
        });
    });
});