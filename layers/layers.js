ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8262839.607645, 2203751.558479, 8665075.636775, 2516983.793888]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KonkanandNagpurMSEDCLPlaces_2 = new ol.format.GeoJSON();
var features_KonkanandNagpurMSEDCLPlaces_2 = format_KonkanandNagpurMSEDCLPlaces_2.readFeatures(json_KonkanandNagpurMSEDCLPlaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KonkanandNagpurMSEDCLPlaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KonkanandNagpurMSEDCLPlaces_2.addFeatures(features_KonkanandNagpurMSEDCLPlaces_2);
var lyr_KonkanandNagpurMSEDCLPlaces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KonkanandNagpurMSEDCLPlaces_2, 
                style: style_KonkanandNagpurMSEDCLPlaces_2,
                popuplayertitle: 'Konkan and Nagpur MSEDCL Places',
                interactive: true,
    title: 'Konkan and Nagpur MSEDCL Places<br />\
    <img src="styles/legend/KonkanandNagpurMSEDCLPlaces_2_0.png" /> Circle<br />\
    <img src="styles/legend/KonkanandNagpurMSEDCLPlaces_2_1.png" /> Circle Office<br />\
    <img src="styles/legend/KonkanandNagpurMSEDCLPlaces_2_2.png" /> Division<br />\
    <img src="styles/legend/KonkanandNagpurMSEDCLPlaces_2_3.png" /> Meter Testing<br />\
    <img src="styles/legend/KonkanandNagpurMSEDCLPlaces_2_4.png" /> Zone & Circle<br />\
    <img src="styles/legend/KonkanandNagpurMSEDCLPlaces_2_5.png" /> <br />' });
var format_KonkanandNagpurTourRoute_3 = new ol.format.GeoJSON();
var features_KonkanandNagpurTourRoute_3 = format_KonkanandNagpurTourRoute_3.readFeatures(json_KonkanandNagpurTourRoute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KonkanandNagpurTourRoute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KonkanandNagpurTourRoute_3.addFeatures(features_KonkanandNagpurTourRoute_3);
var lyr_KonkanandNagpurTourRoute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KonkanandNagpurTourRoute_3, 
                style: style_KonkanandNagpurTourRoute_3,
                popuplayertitle: 'Konkan and Nagpur Tour Route',
                interactive: true,
    title: 'Konkan and Nagpur Tour Route<br />\
    <img src="styles/legend/KonkanandNagpurTourRoute_3_0.png" /> Konkan<br />\
    <img src="styles/legend/KonkanandNagpurTourRoute_3_1.png" /> Nagpur<br />\
    <img src="styles/legend/KonkanandNagpurTourRoute_3_2.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_KonkanandNagpurMSEDCLPlaces_2.setVisible(true);lyr_KonkanandNagpurTourRoute_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_KonkanandNagpurMSEDCLPlaces_2,lyr_KonkanandNagpurTourRoute_3];
lyr_KonkanandNagpurMSEDCLPlaces_2.set('fieldAliases', {'id': 'id', 'Place Name': 'Place Name', 'Type': 'Type', });
lyr_KonkanandNagpurTourRoute_3.set('fieldAliases', {'id': 'id', 'Region': 'Region', 'From': 'From', 'To': 'To', });
lyr_KonkanandNagpurMSEDCLPlaces_2.set('fieldImages', {'id': 'TextEdit', 'Place Name': 'TextEdit', 'Type': 'TextEdit', });
lyr_KonkanandNagpurTourRoute_3.set('fieldImages', {'id': 'TextEdit', 'Region': 'TextEdit', 'From': 'TextEdit', 'To': 'TextEdit', });
lyr_KonkanandNagpurMSEDCLPlaces_2.set('fieldLabels', {'id': 'inline label - always visible', 'Place Name': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_KonkanandNagpurTourRoute_3.set('fieldLabels', {'id': 'inline label - always visible', 'Region': 'inline label - always visible', 'From': 'inline label - always visible', 'To': 'inline label - always visible', });
lyr_KonkanandNagpurTourRoute_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});