function comp_world_regions() { 

	var map = new ol.Map({
        target: 'map_div',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([116.23, 39.54]),
          zoom: 4
        })
      });
}