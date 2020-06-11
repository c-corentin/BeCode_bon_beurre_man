(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("mapmaison",
{ "compressionlevel":-1,
 "height":17,
 "infinite":false,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":17,
         "id":1,
         "name":"background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":17,
         "x":0,
         "y":0
        }, 
        {
         "data":[18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 0, 39, 0, 39, 0, 39, 0, 0, 0, 39, 0, 39, 0, 39, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 0, 39, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 39, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 18, 18, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 18, 18, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 18, 18, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 0, 39, 0, 39, 0, 0, 0, 39, 0, 0, 0, 39, 0, 39, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 0, 39, 0, 39, 0, 39, 0, 0, 0, 39, 0, 39, 0, 39, 0, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
         "height":17,
         "id":2,
         "name":"walls",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":17,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.3.5",
 "tileheight":32,
 "tilesets":[
        {
         "columns":8,
         "firstgid":1,
         "image":"..\/..\/..\/Downloads\/sheet2blocks.png",
         "imageheight":192,
         "imagewidth":256,
         "margin":0,
         "name":"sheet2blocks",
         "spacing":0,
         "tilecount":48,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "type":"map",
 "version":1.2,
 "width":17
});