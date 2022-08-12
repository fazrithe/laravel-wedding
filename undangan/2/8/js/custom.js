
var pAgree = '1';

$('.video-popup').each( function(indx, el){
	if($(el).closest('.gallery').length === 0) {
		$(el).magnificPopup({
			type: 'iframe',
			iframe: {
				patterns: {
					youtube: {
						index: 'www.youtube.com/',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%?autoplay=1'
					}
					, vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: 'https://player.vimeo.com/video/%id%?autoplay=1'
					}
				}
			},
			disableOn: function() {
				if (!pAgree || pAgree !== '1') {
					return false;
				}
				return true;
			}
		});
	}
});
$('.image-popup').each( function(indx, el){
	if($(el).closest('.gallery').length === 0) {
		$(el).magnificPopup({
			type: 'image'
		});
	}
});