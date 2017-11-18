<?php
/**
 * %NAME% core functions
 *
 * General core functions available on admin and frontend
 *
 * @author %AUTHOR%
 * @category Core
 * @package %PACKAGENAME%/Core
 * @version %VERSION%
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Get options
 *
 * @param string $key
 * @param string $default
 * @return string
 */
function wolf_share_get_option( $key, $default = null ) {

	$settings = get_option( 'wolf_share_settings' );

	if ( isset( $settings[ $key ] ) && '' != $settings[ $key ] ) {

		return $settings[ $key ];

	} elseif ( $default ) {

		return $default;
	}
}