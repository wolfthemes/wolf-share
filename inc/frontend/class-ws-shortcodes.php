<?php
/**
 * %NAME% Shortcode.
 *
 * @class Wolf_Share_Shortcode
 * @author %AUTHOR%
 * @category Core
 * @package %PACKAGENAME%/Shortcode
 * @version %VERSION%
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Wolf_Share_Shortcode class.
 */
class Wolf_Share_Shortcode {
	/**
	 * Constructor
	 */
	public function __construct() {

	}

	/**
	 * Shortcode
	 *
	 * @param array $atts
	 * @return string
	 */
	public function shortcode( $atts ) {

	}

	/**
	 * Helper method to determine if a shortcode attribute is true or false.
	 *
	 * @param string|int|bool $var Attribute value.
	 * @return bool
	 */
	protected function shortcode_bool( $var ) {
		$falsey = array( 'false', '0', 'no', 'n' );
		return ( ! $var || in_array( strtolower( $var ), $falsey, true ) ) ? false : true;
	}

} // end class

return new Wolf_Share_Shortcode();