
$(window).resize(function(){
    if($(window).width()>769)
    {
        $('.formsearch').css('display','block')
    }
    else
    {
        $('.formsearch').css('display','none')
       
    }
})
$(window).resize(function(){
    if($(window).width()>769)
    {
        $('#side-bar').css('display','block')
    }
    else
    {
        $('#side-bar').css('display','none')
    }
})
$('#btn-filter').click(function(){
    $('#side-bar').toggle('slide')
})
$('#sidebar-close').click(function(){
    $('#side-bar').toggle('slide')
})
$('#btn-filter').click(function(){
    $('#sidebar').toggle('slide')
})
$('#sidebar-close').click(function(){
    $('#sidebar').toggle('slide')
})
// add to cart
$('#increase').click(function(){
    var qty=$('#quantity').val();
    qty=parseInt(qty,10);
    qty++;
    $('#quantity').val(qty);
})
$('#decrease').click(function(){
    var qty=$('#quantity').val();
    qty=parseInt(qty,10);
    if(qty<=1)
   {
    qty=1;
   }
   else
   {
    qty--;
   }
    $('#quantity').val(qty);
})




