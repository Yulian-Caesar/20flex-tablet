function youtubeShowVideo() {
    var i, c, y, v, n;
    v = document.getElementsByClassName("youtube");
    for (n = 0; n < v.length; n++) {
        y = v[n];
        i = document.createElement("img");
        i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
        i.setAttribute("class", "thumb");
        c = document.createElement("div");
        c.setAttribute("class", "play");
        y.appendChild(i);
        y.appendChild(c);
        y.onclick = function () {
            var a = document.createElement("iframe");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            this.parentNode.replaceChild(a, this)
        }
    }
}
youtubeShowVideo();



var canvas = document.querySelector('.canvas-bg');
var ctx = canvas.getContext('2d');
var w = 1300;
var h = 1500;
canvas.width = w;
canvas.height = h;

function draw() {
    ctx.strokeStyle = '#d4e8f1';

    for(var i = 0;  i<= 3000; i+=10) {
        ctx.beginPath()
        ctx.moveTo(0, -1300 + i);
        ctx.lineTo(1300, -2600 + i);

        ctx.stroke();
        ctx.closePath();

    }

}

draw();


var canvasrs = document.querySelectorAll('.canvas-bg2');
for (var p = 0; p < canvasrs.length; p++) {
    var ctxx = canvasrs[p].getContext('2d');
    var wid = 1300;
    var hei = 1500;
    canvasrs[p].width = wid;
    canvasrs[p].height = hei;

    function draws() {
        ctxx.strokeStyle = '#f5f5f5';

        for (var i = 0; i <= 3000; i += 10) {
            ctxx.beginPath();
            ctxx.moveTo(0, -1300 + i);
            ctxx.lineTo(1300, -2600 + i);

            ctxx.stroke();
            ctxx.closePath();

        }

    }

    draws();
}