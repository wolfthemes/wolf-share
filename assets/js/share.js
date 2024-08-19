/*!
 * Wolf Share 1.0.8
 */
/* jshint -W062 */
/* global WolfShareJSParams */

var WolfShare = function( $ ) {

	'use strict';

	return {

		/**
		 * Init UI
		 */
		init : function () {
			this.shareLinkPopup();
			this.svgLogo();
		},

		/**
		 * Share Links Popup
		 */
		shareLinkPopup : function () {

			var _this = this;

			$( '.wolf-share-link' ).on( 'click', function() {

				var $link = $( this ),
					url = $link.attr( 'href' ),
					height = $link.data( 'height' ) || 250,
					width = $link.data( 'width' ) || 500,
					postId = $link.parent().parent().data( 'post-id' ),
					popup;

				if ( postId ) {
					_this.incrementShareCount( postId );
				}

				if ( true === $( this ).data( 'popup' ) && ! _this.isMobile && ! $link.hasClass( 'wolf-share-link-email' ) ){

					popup = window.open( url,'null', 'height=' + height + ',width=' + width + ', top=150, left=150' );

					if ( window.focus ) {
						popup.focus();
					}

					return false;
				}
			} );
		},

		/**
		 * Increment share met count
		 */
		incrementShareCount : function( postId ) {
			var data = {
				action: 'wolf_share_ajax_increment_shares_count',
				postId : postId
			};

			$.post( WolfShareJSParams.ajaxUrl , data, function() {} );
		},

		/**
		 * Convert SVG logo image to inline SVG
		 */
		svgLogo: function () {
			$("img.ws-svg").each(function () {
				var $img = $(this),
					imgID = $img.attr("id"),
					imgClass = $img.attr("class"),
					imgURL = $img.attr("src"),
					$svg;

				$.get(
					imgURL,
					function (data) {
						$svg = $(data).find("svg");

						if (typeof imgID !== "undefined") {
							$svg = $svg.attr("id", imgID);
						}

						if (typeof imgClass !== "undefined") {
							$svg = $svg.attr(
								"class",
								imgClass + " ws-replaced-svg"
							);
						}

						$svg = $svg.removeAttr("xmlns:a");

						// Replace image with new SVG
						$img.replaceWith($svg);
					},
					"xml"
				);
			});
		},
	};

}( jQuery );

( function( $ ) {

	'use strict';

	$( document ).ready( function() {
		WolfShare.init();
	} );

} )( jQuery );
