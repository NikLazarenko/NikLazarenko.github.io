/**
 * Created by Nikolay on 14.11.2015.
 */
$(document).ready(function() {
    //--------------------------show/hide mobile menu panel
    $(window).scroll(function () {
        var html = document.documentElement, body = document.body;
        var $btn = $('.mobile_menu');
        if (html.scrollTop > 140 || body.scrollTop > 140) {
            $btn.css({background:"rgba(38, 68, 90, 0.5)"});
        } else {
            $btn.css({background:"rgba(38, 68, 90, 0)"});
        }
    });

    //--------------------------show/hide mobile menu
    $("#button_menu").click(function () {
            $(".mobile_nav").animate({width: "toggle"});
            $("i",this).toggleClass("fa-bars fa-arrow-left");
        }
    );
    //--------------------------animate scroll and hide mobile menu after <a> click
    $('.mobile_nav, .menu').on("click","a", function (event) {
        //cancel default action clicking on the link
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
        $(".mobile_nav").animate({width: "toggle"});
        $("i","#button_menu").toggleClass("fa-bars fa-arrow-left");
    });

    //--------------------------Creating circle diagrams
    var Circle = function(sel){
        var circles = $(sel);
        [].forEach.call(circles, function (el) {
            var valEl = parseFloat(el.innerHTML);
            valEl = valEl*597/100;
            //75%
            if(valEl > 447){
                el.innerHTML = '<svg height="210" width="210px"><circle transform="rotate(-90)" r="95" cx="-103" cy="102" />' +
                    '<circle transform="rotate(-90)" style="stroke-dasharray: ' + valEl + 'px; 480px; stroke: #296ea7" r="95" cx="-103" cy="102" /></svg>';
                //60%
            }else if (valEl > 358){
                el.innerHTML = '<svg height="210" width="210px"><circle transform="rotate(-90)" r="95" cx="-103" cy="102" />' +
                    '<circle transform="rotate(-90)" style="stroke-dasharray: ' + valEl + 'px; 480px; stroke: #348cce" r="95" cx="-103" cy="102" /></svg>';
            }else{
                el.innerHTML = '<svg height="210" width="210px"><circle transform="rotate(-90)" r="95" cx="-103" cy="102" />' +
                    '<circle transform="rotate(-90)" style="stroke-dasharray: ' + valEl + 'px; 480px;" r="95" cx="-103" cy="102" /></svg>';
            }
        });
    };
    Circle('.circle');
});
//--------------------------Calculate height of LineDot
function CalcLineDot(){
    var marker = $(".marker"); var marker2 = $(".marker2");
    var avarage = marker.last().offset().top - marker.offset().top;
    var avarage2 = marker2.last().offset().top - marker2.offset().top;
    $(".line_dot").css({height: avarage+"px"});
    $(".line_dot2").css({height: avarage2+"px"});
}
$(document).ready(CalcLineDot);
$(window).resize(CalcLineDot);