jQuery.fn.adv = function(imgs,timer){
    var index = 0;
    var selector = this.selector;
    var img = new Image();
    img.src = imgs[index];
    img.onload = function(){
        $(selector).append(img);
    }
    setInterval(function(){
        $(selector).html("");
        index ++;
        if(index >= imgs.length){
            index = 0;
        }
        img.src = imgs[index];
        img.onload = function(){
            $(selector).append(img);
        }
    },timer);
}