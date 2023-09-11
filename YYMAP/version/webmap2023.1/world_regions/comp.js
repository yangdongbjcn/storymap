function comp_world_regions(col01, col02, t_max, t_min, t_size, t_font) { 
	
	var t_keys = ['name', 'value'];
	var t_clists = [col01, col02];
	
	var t_yd_mat = new Yd_mat().init(t_clists).bldTranspose();
	var t_lists = t_yd_mat.get();

	var t_yd_frame = new Yd_frame().initKeysLists(t_keys, t_lists);
	var t_dicts = t_yd_frame.getDicts();

	var t_position = t_yd_frame.bldMapScatterEcharts('name', 'value', false).getDicts();
		
	// world_epo.json
	p_url = g_var.g_mapdata + 'world/world_epo.json';
	p_callback = function(geoJson){
		var t_map_name = 'world';
		echarts.registerMap(t_map_name,geoJson,{});
	};
	$.ajax({
		async: false,
		type: "get",
		url: p_url,
		datatype: 'json',
		success: p_callback
	});

	var t_map_name = 'world';
	var series = Array();
	var serie1 = new YdMap(t_map_name).data(t_dicts).name('区域').get();
	
	var f_symbol_size = function(p_value) {
		
		var maxSize2Pin = 100,
		    minSize2Pin = 30;
        var a = (maxSize2Pin - minSize2Pin) / (t_max - t_min);
        var b = minSize2Pin + a * (p_value - t_min);
        var c = b * t_size;
        return c;
	}

	var serie3 = new YdScatterSize(t_position, f_symbol_size, 'pin', [0,0], '#F62157').label(2, 'inside', t_font).name('水滴').get();

	series = series.concat(serie1, serie3);

	var t_option = new YdOption().bgColor('#ffffff')
		.att('geo', new YdGeo(t_map_name).get())
		.visualMap(t_min, t_max).series(series).get();
	
	new YdChart().init('map_div').option(t_option).get();
}