$(document).ready(function(){
    $(".control-close").click(function(){
        $(".window").addClass("window--destroyed");
        $(".window").removeClass("window--maximized window--minimized");
        setTimeout(location.reload.bind(location), 5000);
    }),
      
    $(".control-maximized").click(function(){
        $(".window").removeClass("window--minimized");
        $(".window").toggleClass("window--maximized");
    }),
  
    $(".control-minimized").click(function(){
        $(".window").removeClass("window--maximized");
        $(".window").toggleClass("window--minimized");
    });
});