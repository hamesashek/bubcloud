 $(function () {
            $.ajax({
                url: "/feed/?f={FORUM_ID}",
                success: function (ta) {
                    for (var i = 1; i < 5; i++) {
                        var DL = $(ta).find("link:eq(" + i + ")").text();
                        var title = $(ta).find("title:eq(" + i + ")").text();
$('<li><div class="news-item"><div><div class="related-post-style-2"><div class="crop"><a href="' + DL + '" class="related-post-item-thumbnail" rel="bookmark"></a></div><span></span><div style="clear: both;"></div></div></div></div></li>').appendTo('#sliding-tab');              
                
                        $('<a class="related-post-item-title" href="' + DL + '">' + title + '</a>').appendTo('.news-item:eq(' + (i - 2) + ') .related-post-style-2 span');
                        $('<img  src="' + $(".news-item:eq(" + (i - 2) + ") .crop a:eq(0)").load(DL + ".post-entry .entry-content img:eq(0)") + '" alt="load ảnh" />').appendTo('.news-item:eq(' + (i - 2) + ') .crop a:eq(0)');
                    }
                }
            });
        });
        
        $(window).scroll(function() {
  $("#slidebox").css($(this).scrollTop() > 700 ? {
    right: "0px"
  } : {
    right: "-360px"
  });
}), $(document).ready(function() {
  var i = $("#slidebox"),
    s = $("#slidebox-close"),
    o = $("#slidebox-minimize"),
    l = $("#slidebox-maximize");
  l.hide(), s.click(function() {
    i.css({
      right: "-350px"
    }), i.fadeOut("slow")
  }), o.click(function() {
    i.toggleClass("hide"), $(this).hide(), l.show()
  }), l.click(function() {
    i.toggleClass("hide"), $(this).hide(), o.show()
  })
});
