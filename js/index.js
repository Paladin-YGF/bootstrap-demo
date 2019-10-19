$(function($) {
	$(window).on('resize',function() {
		let $width = $(this).width()
		// console.log($width)
		let $item = $('.item img')
		let $src;
		if($width <= 767) {
			$item.each(function(index, item) {
				$src = $(item).data('ms')
				$(this).attr('src', $src)
				$('.carousel-inner > .item > img').css({
					height: '260px'
				})
			})
		}else {
			$item.each(function(index, item) {
				$src2 = $(item).data('mds')
				console.log($src2,item)
				$(this).attr('src', $src2)
			})
			console.log($item)
		}
	})
	$(window).trigger('resize')
})