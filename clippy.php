<?php
/**
* Name: Clippy
* Description: Provides enterprise-level notifications and annoyment
* Version: 1.0.0
* Author: Fabio <fabrixxm@kirgroup.com>
**/

function clippy_install() {
	register_hook('page_end', 'addon/clippy/clippy.php', 'clippy_script');
}

function clippy_uninstall() {
	unregister_hook('page_end', 'addon/clippy/clippy.php', 'clippy_script');
}

function clippy_script(&$a,&$s) {
	$a->page['htmlhead'] .= '<link rel="stylesheet" type="text/css" href="' . $a->get_baseurl() . '/addon/clippy/vendor/clippy.js/build/clippy.css"  media="screen">';
	$s .= '<script type="text/javascript" src="' . $a->get_baseurl() . '/addon/clippy/vendor/clippy.js/build/clippy.min.js"></script>';
	$s .= '<script type="text/javascript" src="' . $a->get_baseurl() . '/addon/clippy/clippy.js"></script>';
}
