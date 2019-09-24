<script type='text/javascript'>
  //右側固定
  $(function() {  
    $(window).scroll(function() {
      var mobile = location.search;
      var windowWidth = $(this).width();
      if (windowWidth > 1400) { 
        var topToSlider = 205;
        var sliderHeight = $('#sidebar_feed').height();
        var mainHeight = $('#main').height();
        var docHeight = $(document.body).height()-16;
        var fotterHeight = 40;
  
        var windowHeight = $(this).height();
        var scrollTop = $(this).scrollTop()
        var scrollBottom = scrollTop + windowHeight;
  
        //左邊比較長
        if (docHeight > topToSlider + sliderHeight + fotterHeight)
        {
            if(scrollTop > topToSlider) {
                if (sliderHeight > windowHeight) {
                  if (scrollBottom > topToSlider + sliderHeight) {
                    $('#sidebar_feed').css({'bottom':'0','position':'fixed'}); 
                  } else {
                    $('#sidebar_feed').css({'position':'static'});   
                  }         
                } else {
                  $('#sidebar_feed').css({'top':'0','position':'fixed'});        
                }
            } else {
              $('#sidebar_feed').css({'position':'static'}); 
            }
        }

        //右邊比較長
        else 
        {
          /*
            if(scrollTop > topToSlider) {
                if (mainHeight > windowHeight) {
                  if (scrollBottom > topToSlider + mainHeight) {
                    $('#main').css({'bottom':'0','position':'fixed'}); 
                  } else {
                    $('#main').css({'position':'static'});   
                  }         
                } else {
                  $('#main').css({'top':'0','position':'fixed'});        
                }
            } else {
              $('#main').css({'position':'static'}); 
            }
            */
        }  
  
        var topToSliderItem = 580;
        var sliderItemHeight = $('#sidebar_item').height();
        //var mainHeight = $('#main').height();
        
        //左邊比較長
        if (docHeight > topToSliderItem + sliderItemHeight + fotterHeight)
        {
            if(scrollTop > topToSliderItem) {
                if (sliderItemHeight > windowHeight) {
                  if (scrollBottom > topToSliderItem + sliderItemHeight) {
                    $('#sidebar_item').css({'bottom':'0','position':'fixed'}); 
                  } else {
                    $('#sidebar_item').css({'position':'static'});   
                  }         
                } else {
                  $('#sidebar_item').css({'top':'0','position':'fixed'});        
                }
            } else {
              $('#sidebar_item').css({'position':'static'}); 
            }
        }

        //右邊比較長
        else 
        {

        }                
      } else {
               
      }      
    })
  });
</script>