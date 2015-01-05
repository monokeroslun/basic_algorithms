module.exports = exports = QuickMan;

var quickTool = QuickMan.prototype;
var tty = require('../lib/tty.js');

function QuickMan() {

    }
    /**
     * @param p；start r:end
     */
quickTool.partition = function(data, p, r) {
    var d = "";
    for (var i in data) {
        d = d + " " + data[i];
    }
    d = tty.color('green', "初始情况：" + d);
    console.log(d);
    var x = data[r];
    var i = p - 1;
    for (var j = p; j < r; j++) {
        var fmt = tty.color('green', "第" + j + "次循环");
        console.log(fmt);
        if (data[j] < x) {
            i = i + 1;
            var t = data[i];
            data[i] = data[j];
            data[j] = t;
            
            var d1="";
            var d2 = "";
            var d3 = "";
            for (var m=0;m<i;m++) {
                d1 = d1 + " " + data[m];
            }
            for (var m=i+1;m<j;m++) {
                d2 = d2 + " " + data[m];
            }
            for (var m=j+1;m<=r;m++) {
                d3 = d3 + " " + data[m];
            }
            var fmt = tty.color('green', d1)+tty.color('fail'," "+data[i])+tty.color('green', d2)+tty.color('fail'," "+data[j])+tty.color('green', d3);
            console.log(fmt);
        }
    }
    var t = data[i + 1];
    data[i + 1] = data[r];
    data[r] = t;
    
    var ds="";
     for (var i in data) {
        ds = ds + " " + data[i];
    }
    var fmt = tty.color('green', ds);
    console.log(fmt);
    return i + 1;
}
