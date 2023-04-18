$(document).ready(function(){ 
 
	var t_col = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','广东','广西','海南','台湾','香港','澳门'];
	$('#col01').val(new Yd_list().init(t_col).getStringLines());

	t_col = ['177','42','102','81','47','67','82','66','24','92','114','109','116','91','119','137','116','114','91','125','62','83','9','80','56','10','18','67','123','59','14','0','0','0'];
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

		var t_position = g_var.q_map_region;

		// 20220119 getChinaMap
		p_url = g_var.g_mapdata + 'china/china.json';
		p_callback = function(geoJson){
			var t_map_name = 'china';
			echarts.registerMap(t_map_name,geoJson,{});
		};
		$.ajax({
			async: false,
			type: "get",
			url: p_url,
			datatype: 'json',
			success: p_callback
		});
		
		// 20220119 bldChinaMapScatterEcharts 需要 echarts的初始化，必须放在上述registerMap之后
		t_position = new Yd_frame().initDicts(t_position)
			.bldChinaMapScatterEcharts('name', 'value', false).getDicts();


		var series = Array();
		var t_map_name = 'china';
		var serie1 = new YdMap(t_map_name).data(g_var.q_map_region).name('区域').get();
		
		var f_symbol_size = function(p_value) {
			var t_max = $('#max_value').val() - 0,
		    	t_min = $('#min_value').val() - 0,
		    	t_size = $('#scatter_size').val() - 0;

			var maxSize2Pin = 100,
			    minSize2Pin = 30;
            var a = (maxSize2Pin - minSize2Pin) / (t_max - t_min);
            var b = minSize2Pin + a * (p_value - t_min);
            var c = b * t_size;
            return c;
		}

		var t_font = $('#font_size').val() - 0;
		var serie3 = new YdScatterSize(t_position, f_symbol_size, 'pin', [0,0], '#F62157').label(2, 'inside', t_font).name('水滴').get();

		series = series.concat(serie1, serie3);

		var t_max = $('#max_value').val() - 0,
		    t_min = $('#min_value').val() - 0; 
		
		var t_option = new YdOption().bgColor('#ffffff')
			.att('geo', new YdGeo(t_map_name).get())
			.visualMap(t_min, t_max).series(series).get();
		
		new YdChart().init('map_div').option(t_option).get();

		
	});/*click function*/
		
});
