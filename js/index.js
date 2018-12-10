$(document).ready(function(){

    $('#submit_btn').click(function(){
        $('.show_Result').animate({left: '250px', height: '+=150px',width: '+=150px'});
        hideInputs();
        naughtyOrNice();
    });

    function random() {
        var x = Math.floor((Math.random() * 2) + 1);
        return x;
    }
    
    function hideInputs(){
        $('#enter_name').css("visibility","hidden");
        $('#submit_btn').css("visibility","hidden");
    }

    function naughtyOrNice(name){
        var name = $('#enter_name').val();

        console.log(name + random());
        if(random() === 1){
            $('.show_Result').addClass('green');
            return $('#test_name').append(name.toUpperCase() + " "+ "Congratulations, you've been nice this year!!");
        }else{
            $('.show_Result').addClass('red');
            return $('#test_name').append(name.toUpperCase() + " " + "Hmmmm, you've been naughty!!");
        }
    }
});