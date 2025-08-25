var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_reaurbana_ElSALTO_1 = new ol.format.GeoJSON();
var features_reaurbana_ElSALTO_1 = format_reaurbana_ElSALTO_1.readFeatures(json_reaurbana_ElSALTO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaurbana_ElSALTO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaurbana_ElSALTO_1.addFeatures(features_reaurbana_ElSALTO_1);
var lyr_reaurbana_ElSALTO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaurbana_ElSALTO_1, 
                style: style_reaurbana_ElSALTO_1,
                popuplayertitle: 'Área urbana_El SALTO',
                interactive: true,
                title: '<img src="styles/legend/reaurbana_ElSALTO_1.png" /> Área urbana_El SALTO'
            });
var format_Limitemunicipal_ElSalto_2 = new ol.format.GeoJSON();
var features_Limitemunicipal_ElSalto_2 = format_Limitemunicipal_ElSalto_2.readFeatures(json_Limitemunicipal_ElSalto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitemunicipal_ElSalto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemunicipal_ElSalto_2.addFeatures(features_Limitemunicipal_ElSalto_2);
var lyr_Limitemunicipal_ElSalto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitemunicipal_ElSalto_2, 
                style: style_Limitemunicipal_ElSalto_2,
                popuplayertitle: 'Limite municipal_El Salto',
                interactive: true,
                title: '<img src="styles/legend/Limitemunicipal_ElSalto_2.png" /> Limite municipal_El Salto'
            });
var format_Iglesias_ElSalto_3 = new ol.format.GeoJSON();
var features_Iglesias_ElSalto_3 = format_Iglesias_ElSalto_3.readFeatures(json_Iglesias_ElSalto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iglesias_ElSalto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iglesias_ElSalto_3.addFeatures(features_Iglesias_ElSalto_3);
var lyr_Iglesias_ElSalto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iglesias_ElSalto_3, 
                style: style_Iglesias_ElSalto_3,
                popuplayertitle: 'Iglesias_El Salto',
                interactive: true,
    title: 'Iglesias_El Salto<br />\
    <img src="styles/legend/Iglesias_ElSalto_3_0.png" /> Iglesia, templo, parroquia<br />\
    <img src="styles/legend/Iglesias_ElSalto_3_1.png" /> Capilla<br />' });
var format_reaurbana_Zapotlanejo_4 = new ol.format.GeoJSON();
var features_reaurbana_Zapotlanejo_4 = format_reaurbana_Zapotlanejo_4.readFeatures(json_reaurbana_Zapotlanejo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaurbana_Zapotlanejo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaurbana_Zapotlanejo_4.addFeatures(features_reaurbana_Zapotlanejo_4);
var lyr_reaurbana_Zapotlanejo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaurbana_Zapotlanejo_4, 
                style: style_reaurbana_Zapotlanejo_4,
                popuplayertitle: 'Área urbana_Zapotlanejo',
                interactive: true,
                title: '<img src="styles/legend/reaurbana_Zapotlanejo_4.png" /> Área urbana_Zapotlanejo'
            });
var format_Limitemunicipal_Zapotlanejo_5 = new ol.format.GeoJSON();
var features_Limitemunicipal_Zapotlanejo_5 = format_Limitemunicipal_Zapotlanejo_5.readFeatures(json_Limitemunicipal_Zapotlanejo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitemunicipal_Zapotlanejo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemunicipal_Zapotlanejo_5.addFeatures(features_Limitemunicipal_Zapotlanejo_5);
var lyr_Limitemunicipal_Zapotlanejo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitemunicipal_Zapotlanejo_5, 
                style: style_Limitemunicipal_Zapotlanejo_5,
                popuplayertitle: 'Limite municipal_Zapotlanejo',
                interactive: true,
                title: '<img src="styles/legend/Limitemunicipal_Zapotlanejo_5.png" /> Limite municipal_Zapotlanejo'
            });
var format_Iglesias_Zapotlanejo_6 = new ol.format.GeoJSON();
var features_Iglesias_Zapotlanejo_6 = format_Iglesias_Zapotlanejo_6.readFeatures(json_Iglesias_Zapotlanejo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iglesias_Zapotlanejo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iglesias_Zapotlanejo_6.addFeatures(features_Iglesias_Zapotlanejo_6);
var lyr_Iglesias_Zapotlanejo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iglesias_Zapotlanejo_6, 
                style: style_Iglesias_Zapotlanejo_6,
                popuplayertitle: 'Iglesias_Zapotlanejo',
                interactive: true,
    title: 'Iglesias_Zapotlanejo<br />\
    <img src="styles/legend/Iglesias_Zapotlanejo_6_0.png" /> Iglesia, templo, parroquia<br />\
    <img src="styles/legend/Iglesias_Zapotlanejo_6_1.png" /> Capilla<br />' });
var format_reaurbana_Juanacatln_7 = new ol.format.GeoJSON();
var features_reaurbana_Juanacatln_7 = format_reaurbana_Juanacatln_7.readFeatures(json_reaurbana_Juanacatln_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaurbana_Juanacatln_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaurbana_Juanacatln_7.addFeatures(features_reaurbana_Juanacatln_7);
var lyr_reaurbana_Juanacatln_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaurbana_Juanacatln_7, 
                style: style_reaurbana_Juanacatln_7,
                popuplayertitle: 'Área urbana_Juanacatlán',
                interactive: true,
                title: '<img src="styles/legend/reaurbana_Juanacatln_7.png" /> Área urbana_Juanacatlán'
            });
var format_Limitemunicipal_Juanacatln_8 = new ol.format.GeoJSON();
var features_Limitemunicipal_Juanacatln_8 = format_Limitemunicipal_Juanacatln_8.readFeatures(json_Limitemunicipal_Juanacatln_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitemunicipal_Juanacatln_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemunicipal_Juanacatln_8.addFeatures(features_Limitemunicipal_Juanacatln_8);
var lyr_Limitemunicipal_Juanacatln_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitemunicipal_Juanacatln_8, 
                style: style_Limitemunicipal_Juanacatln_8,
                popuplayertitle: 'Limite municipal_Juanacatlán',
                interactive: true,
                title: '<img src="styles/legend/Limitemunicipal_Juanacatln_8.png" /> Limite municipal_Juanacatlán'
            });
var format_Iglesias_Juanacatln_9 = new ol.format.GeoJSON();
var features_Iglesias_Juanacatln_9 = format_Iglesias_Juanacatln_9.readFeatures(json_Iglesias_Juanacatln_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iglesias_Juanacatln_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iglesias_Juanacatln_9.addFeatures(features_Iglesias_Juanacatln_9);
var lyr_Iglesias_Juanacatln_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iglesias_Juanacatln_9, 
                style: style_Iglesias_Juanacatln_9,
                popuplayertitle: 'Iglesias_Juanacatlán',
                interactive: true,
    title: 'Iglesias_Juanacatlán<br />\
    <img src="styles/legend/Iglesias_Juanacatln_9_0.png" /> Iglesia, templo, parroquia<br />\
    <img src="styles/legend/Iglesias_Juanacatln_9_1.png" /> Capilla<br />' });

lyr_CartoLight_0.setVisible(true);lyr_reaurbana_ElSALTO_1.setVisible(true);lyr_Limitemunicipal_ElSalto_2.setVisible(true);lyr_Iglesias_ElSalto_3.setVisible(true);lyr_reaurbana_Zapotlanejo_4.setVisible(true);lyr_Limitemunicipal_Zapotlanejo_5.setVisible(true);lyr_Iglesias_Zapotlanejo_6.setVisible(true);lyr_reaurbana_Juanacatln_7.setVisible(true);lyr_Limitemunicipal_Juanacatln_8.setVisible(true);lyr_Iglesias_Juanacatln_9.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_reaurbana_ElSALTO_1,lyr_Limitemunicipal_ElSalto_2,lyr_Iglesias_ElSalto_3,lyr_reaurbana_Zapotlanejo_4,lyr_Limitemunicipal_Zapotlanejo_5,lyr_Iglesias_Zapotlanejo_6,lyr_reaurbana_Juanacatln_7,lyr_Limitemunicipal_Juanacatln_8,lyr_Iglesias_Juanacatln_9];
lyr_reaurbana_ElSALTO_1.set('fieldAliases', {'fid': 'fid', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'CAPA': 'CAPA', 'layer': 'layer', 'path': 'path', });
lyr_Limitemunicipal_ElSalto_2.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'CLAVE': 'CLAVE', 'NVA_REGION': 'NVA_REGION', 'REGION': 'REGION', });
lyr_Iglesias_ElSalto_3.set('fieldAliases', {'fid': 'fid', 'clee': 'clee', 'nom_estab': 'nom_estab', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'nom_vial': 'nom_vial', 'nom_v_e_1': 'nom_v_e_1', 'nom_v_e_2': 'nom_v_e_2', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'telefono': 'telefono', 'latitud': 'latitud', 'longitud': 'longitud', 'class': 'class', });
lyr_reaurbana_Zapotlanejo_4.set('fieldAliases', {'fid': 'fid', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'CAPA': 'CAPA', 'layer': 'layer', 'path': 'path', });
lyr_Limitemunicipal_Zapotlanejo_5.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'CLAVE': 'CLAVE', 'NVA_REGION': 'NVA_REGION', 'REGION': 'REGION', });
lyr_Iglesias_Zapotlanejo_6.set('fieldAliases', {'fid': 'fid', 'clee': 'clee', 'nom_estab': 'nom_estab', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'nom_vial': 'nom_vial', 'nom_v_e_1': 'nom_v_e_1', 'nom_v_e_2': 'nom_v_e_2', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'telefono': 'telefono', 'latitud': 'latitud', 'longitud': 'longitud', 'class': 'class', });
lyr_reaurbana_Juanacatln_7.set('fieldAliases', {'fid': 'fid', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID': 'ID', 'CAPA': 'CAPA', 'layer': 'layer', 'path': 'path', });
lyr_Limitemunicipal_Juanacatln_8.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'CLAVE': 'CLAVE', 'NVA_REGION': 'NVA_REGION', 'REGION': 'REGION', });
lyr_Iglesias_Juanacatln_9.set('fieldAliases', {'fid': 'fid', 'clee': 'clee', 'nom_estab': 'nom_estab', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'nom_vial': 'nom_vial', 'nom_v_e_1': 'nom_v_e_1', 'nom_v_e_2': 'nom_v_e_2', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'telefono': 'telefono', 'latitud': 'latitud', 'longitud': 'longitud', 'class': 'class', });
lyr_reaurbana_ElSALTO_1.set('fieldImages', {'fid': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'TextEdit', 'CAPA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Limitemunicipal_ElSalto_2.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'CLAVE': 'TextEdit', 'NVA_REGION': 'TextEdit', 'REGION': 'TextEdit', });
lyr_Iglesias_ElSalto_3.set('fieldImages', {'fid': 'TextEdit', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'nom_vial': 'TextEdit', 'nom_v_e_1': 'TextEdit', 'nom_v_e_2': 'TextEdit', 'nom_v_e_3': 'TextEdit', 'numero_ext': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'municipio': 'TextEdit', 'cve_loc': 'TextEdit', 'localidad': 'TextEdit', 'telefono': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'class': 'TextEdit', });
lyr_reaurbana_Zapotlanejo_4.set('fieldImages', {'fid': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'TextEdit', 'CAPA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Limitemunicipal_Zapotlanejo_5.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'CLAVE': 'TextEdit', 'NVA_REGION': 'TextEdit', 'REGION': 'TextEdit', });
lyr_Iglesias_Zapotlanejo_6.set('fieldImages', {'fid': 'TextEdit', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'nom_vial': 'TextEdit', 'nom_v_e_1': 'TextEdit', 'nom_v_e_2': 'TextEdit', 'nom_v_e_3': 'TextEdit', 'numero_ext': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'municipio': 'TextEdit', 'cve_loc': 'TextEdit', 'localidad': 'TextEdit', 'telefono': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'class': 'TextEdit', });
lyr_reaurbana_Juanacatln_7.set('fieldImages', {'fid': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID': 'TextEdit', 'CAPA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Limitemunicipal_Juanacatln_8.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'CLAVE': 'TextEdit', 'NVA_REGION': 'TextEdit', 'REGION': 'TextEdit', });
lyr_Iglesias_Juanacatln_9.set('fieldImages', {'fid': 'TextEdit', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'nom_vial': 'TextEdit', 'nom_v_e_1': 'TextEdit', 'nom_v_e_2': 'TextEdit', 'nom_v_e_3': 'TextEdit', 'numero_ext': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'municipio': 'TextEdit', 'cve_loc': 'TextEdit', 'localidad': 'TextEdit', 'telefono': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'class': 'TextEdit', });
lyr_reaurbana_ElSALTO_1.set('fieldLabels', {'fid': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'ID': 'hidden field', 'CAPA': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Limitemunicipal_ElSalto_2.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE': 'hidden field', 'CLAVE': 'hidden field', 'NVA_REGION': 'hidden field', 'REGION': 'hidden field', });
lyr_Iglesias_ElSalto_3.set('fieldLabels', {'fid': 'hidden field', 'clee': 'hidden field', 'nom_estab': 'inline label - always visible', 'nombre_act': 'inline label - always visible', 'per_ocu': 'inline label - always visible', 'nom_vial': 'hidden field', 'nom_v_e_1': 'hidden field', 'nom_v_e_2': 'hidden field', 'nom_v_e_3': 'hidden field', 'numero_ext': 'hidden field', 'tipo_asent': 'hidden field', 'nomb_asent': 'hidden field', 'municipio': 'hidden field', 'cve_loc': 'hidden field', 'localidad': 'hidden field', 'telefono': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'class': 'hidden field', });
lyr_reaurbana_Zapotlanejo_4.set('fieldLabels', {'fid': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'ID': 'hidden field', 'CAPA': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Limitemunicipal_Zapotlanejo_5.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE': 'hidden field', 'CLAVE': 'hidden field', 'NVA_REGION': 'hidden field', 'REGION': 'hidden field', });
lyr_Iglesias_Zapotlanejo_6.set('fieldLabels', {'fid': 'hidden field', 'clee': 'hidden field', 'nom_estab': 'inline label - always visible', 'nombre_act': 'inline label - always visible', 'per_ocu': 'inline label - always visible', 'nom_vial': 'hidden field', 'nom_v_e_1': 'hidden field', 'nom_v_e_2': 'hidden field', 'nom_v_e_3': 'hidden field', 'numero_ext': 'hidden field', 'tipo_asent': 'hidden field', 'nomb_asent': 'hidden field', 'municipio': 'hidden field', 'cve_loc': 'hidden field', 'localidad': 'hidden field', 'telefono': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'class': 'hidden field', });
lyr_reaurbana_Juanacatln_7.set('fieldLabels', {'fid': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'ID': 'hidden field', 'CAPA': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Limitemunicipal_Juanacatln_8.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE': 'hidden field', 'CLAVE': 'hidden field', 'NVA_REGION': 'hidden field', 'REGION': 'hidden field', });
lyr_Iglesias_Juanacatln_9.set('fieldLabels', {'fid': 'hidden field', 'clee': 'hidden field', 'nom_estab': 'inline label - always visible', 'nombre_act': 'inline label - always visible', 'per_ocu': 'inline label - always visible', 'nom_vial': 'hidden field', 'nom_v_e_1': 'hidden field', 'nom_v_e_2': 'hidden field', 'nom_v_e_3': 'hidden field', 'numero_ext': 'hidden field', 'tipo_asent': 'hidden field', 'nomb_asent': 'hidden field', 'municipio': 'hidden field', 'cve_loc': 'hidden field', 'localidad': 'hidden field', 'telefono': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'class': 'hidden field', });
lyr_Iglesias_Juanacatln_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});