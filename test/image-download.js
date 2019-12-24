/**
 * Created on: 28 Oct 2018, Sun
 */

var request = require("request");
var fs = require("fs");

picURl = "https://i.ytimg.com/vi/qlIFmv5Z5DU/maxresdefault.jpg";

request.get(picURl).pipe(fs.createWriteStream("../newPic.jpg"));