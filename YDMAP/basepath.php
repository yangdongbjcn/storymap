<?php

	$t_url = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
	
	$g_project = getParent($t_url, 'YDMAP') . '/';

	$g_root = dirname($g_project) . '/';

	$g_comn = $g_root . 'wicommon/';
	$g_incl = $g_comn . 'includes/';
	
	$g_resc = $g_comn . 'resources/';
	$g_comn_yd_container = $g_comn . 'yd_container/';
	
	$g_mapdata = $g_project . 'mapdata/';

	$g_webmap = $g_project . 'version/webmap2023.1/';

	$g_webstreet = $g_project . 'version/webstreet2022.1/';

	function getParent($t_url, $t_key) {
		while(basename($t_url) != $t_key) {
		  $t_url = dirname($t_url);
		}
		return $t_url;
	}

	$g_relative_path_to_chart = '../../../' . 'zlfx/chart/';
?>