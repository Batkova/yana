var reload = document.getElementById('reload');
var timerdiv = document.getElementById('timer');
var iframe1 = document.getElementById('result1-frame');
var doc1 = iframe1.contentWindow.document;
var iframe2 = document.getElementById('result2-frame');
var doc2 = iframe2.contentWindow.document;

var player1 = document.getElementById('turn1');
var player2 = document.getElementById('turn2');

var timer = new Timer({
    tick : 1,
    ontick : function (sec) {
        sec = (sec - sec % 1000)/ 1000;
        timerdiv.innerHTML = (sec);
        if (doc1.head.lastChild.innerHTML == '.background{\n\twidth: 500px;\n\theight: 250px;\n\tbackground: url("http://savepic.ru/13604514.jpg");' +
            '\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 400px;' +
            '\n\theight: 250px;\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tfilter:alpha(opacity=60);' +
            '\n\topacity:0.6;\n}\n.transbox p{\n\tmargin: 30px 40px;\n\tfont-weight: bold;\n\tcolor: #000000;\n}') {
            timer.pause();
            alert('Победил первый игрок');
        }
        if (doc2.head.lastChild.innerHTML == '.background{\n\twidth: 500px;\n\theight: 250px;\n\tbackground: url("http://savepic.ru/13604514.jpg");' +
            '\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 400px;' +
            '\n\theight: 250px;\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tfilter:alpha(opacity=60);' +
            '\n\topacity:0.6;\n}\n.transbox p{\n\tmargin: 30px 40px;\n\tfont-weight: bold;\n\tcolor: #000000;\n}') {
            timer.pause();
            alert('Победил второй игрок');
        }
    },
    onstart : function(sec) {
        sec = (sec - sec % 1000)/ 1000;
        timerdiv.innerHTML = (sec);
    }
});


reload.addEventListener("click", function () {
    var num = "one";
    player1.style.fontWeight = 'bold';
    player1.style.fontSize = '45px';
    acecss1();
    acecss2();
    var reloadButton = function () {
        timer.pause();
        timer.start(5);
        timer.on("end", function () {
            if (num === "two"){
                num = "one";
                player1.style.fontWeight = 'bold';
                player1.style.fontSize = '45px';
                player2.style.fontWeight = 'normal';
                player2.style.fontSize = '28px';
            }else{
                num = "two";
                player2.style.fontWeight = 'bold';
                player2.style.fontSize = '45px';
                player1.style.fontWeight = 'normal';
                player1.style.fontSize = '28px';
            }
            CSSTab(num);
            ResTab(num);
            if (doc1.head.lastChild.innerHTML != '.background{\n\twidth: 500px;\n\theight: 250px;\n\tbackground: url("http://savepic.ru/13604514.jpg");' +
                '\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 400px;' +
                '\n\theight: 250px;\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tfilter:alpha(opacity=60);' +
                '\n\topacity:0.6;\n}\n.transbox p{\n\tmargin: 30px 40px;\n\tfont-weight: bold;' +
                '\n\tcolor: #000000;\n}' || doc2.head.lastChild.innerHTML != '.background{\n\twidth: 500px;\n\theight: 250px;\n\tbackground: url("http://savepic.ru/13604514.jpg");' +
                '\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 400px;' +
                '\n\theight: 250px;\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tfilter:alpha(opacity=60);' +
                '\n\topacity:0.6;\n}\n.transbox p{\n\tmargin: 30px 40px;\n\tfont-weight: bold;\n\tcolor: #000000;\n}') {
                reloadButton();
            }
        })
    };
    reloadButton();
});
