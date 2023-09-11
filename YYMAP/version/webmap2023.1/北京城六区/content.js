$(document).ready(function(){ 
 
	var t_col = ['东城区', '西城区', '海淀区', '朝阳区', '丰台区', '石景山区'];
	$('#col01').val(new Yd_list().init(t_col).getStringLines());

	t_col = ['17000', '1000', '5000', '20000', '25000', '30000'];
	$('#col02').val(new Yd_list().init(t_col).getStringLines());

	$('#chart_button').click(function(){
		var col01 = yd_text_input_col('#col01');
		var col02 = yd_text_input_col('#col02');

		var t_keys = ['name', 'value'];
		var t_clists = [col01, col02];
		
		var t_yd_mat = new Yd_mat().init(t_clists).bldTranspose();
		var t_lists = t_yd_mat.get();

		var t_yd_frame = new Yd_frame().initKeysLists(t_keys, t_lists);
		var t_dicts = t_yd_frame.getDicts();

		g_var.q_map_region = t_dicts;


		p_url = g_var.g_mapdata + 'china/beijing/北京城六区.json';
		p_callback = function(geoJson){
			var t_map_name = 'beijing';
			echarts.registerMap(t_map_name,geoJson,{});
		};
		$.ajax({
			async: false,
			type: "get",
			url: p_url,
			datatype: 'json',
			success: p_callback
		});

		var t_map_name = 'beijing';

		var series = Array();

		var serie1 = new YdMap(t_map_name).data(g_var.q_map_region).name('区域').get();

		series = series.concat(serie1);

		var t_max = $('#max_value').val() - 0,
			t_min = $('#min_value').val() - 0; 
		var t_option = new YdOption().bgColor('#ffffff')
			.att('geo', new YdGeo(t_map_name).get())
			.visualMap(t_min, t_max).series(series).get();
	
		new YdChart().init('map_div').option(t_option).get();

	});
		
});
