
//Function select color white or black depenging on the param function color
// @param color - rgb(255, 255,255)
var checkFontColor = function(color) {
    var regExp = /([0-9]{1,3})/g,
        result = color.match(regExp),
        gray_color = '';
    color = {
        r: parseFloat(result[0], 10),
        g: parseFloat(result[1], 10),
        b: parseFloat(result[2], 10)
    };
    gray_color = Math.round((color.r + color.g + color.b) / 3);
    if (gray_color < 127) {
        color = '#ffffff';
    } else {
        color = '#000000';
    }
    return color;
};
