
$( document ).ready(function() {
	var $buttonLeft = $('.Slider-Button--left')
	var $buttonRight = $('.Slider-Button--right')
	var rows = $('.Gallery-row')

	$.each(rows, function( index, value ) {
		
		var row = value
		var rowImages = $(row).children()
		var totalWidth = 0
		var distanceScrolled = 0
		var transformDistance = 'translateX(' + distanceScrolled + 'px)'

		$.each(rowImages, function( index, val ) {
	  		totalWidth += val.width + 10
		})

		$.each(rowImages, function( index, val ) {
	  		$(val).clone().appendTo(row)
		})

		var rowImagesUpdated = $(row).children()
		var rowLengthUpdated = rowImagesUpdated.length
		var index = 0
		var currentImage = rowImagesUpdated[0]

	    $buttonRight.click(function() {
	    	currentImage = rowImagesUpdated[index]
			if (index <= 0) {
				index = rowImages.length - 1
				currentImage = rowImagesUpdated[index]
				distanceScrolled = totalWidth
				distanceScrolled -= currentImage.width + 10
				$.each(rowImages, function( index, val ) {
			  		$(val).addClass('invisible')
				})
				$(currentImage).removeClass('invisible')
			} else {
				index -= 1
				currentImage = rowImagesUpdated[index]
				$(currentImage).removeClass('invisible')
				distanceScrolled -= currentImage.width + 10
			}
			
			transformDistance = 'translateX(' + distanceScrolled + 'px)'
			$(value).css('transform', transformDistance)
		})

		$buttonLeft.click(function() {
			currentImage = rowImagesUpdated[index]

			$(currentImage).addClass('invisible')
			if (index < rowImages.length - 1) {
				distanceScrolled += currentImage.width + 10
				transformDistance = 'translateX(' + distanceScrolled + 'px)'
				index += 1
			} else {
				var inivisibleImages = $(row).find($('.invisible'))

				$.each(inivisibleImages, function( index, val ) {
			  		$(val).removeClass('invisible')
				})

				distanceScrolled = 0
				index = 0
				transformDistance = 'translateX(' + distanceScrolled + 'px)'
			}
			
			$(value).css('transform', transformDistance)
		})
	})

	
});