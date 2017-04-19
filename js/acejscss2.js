function acecss2() {
    var editor = ace.edit("editor2");
    editor.getSession().setMode("ace/mode/css");
    var iframe = document.getElementById('result2-frame');
    var doc = iframe.contentWindow.document;
    var stylecss = doc.createElement('style');
    doc.head.appendChild(stylecss);
    doc.body.innerHTML = '<!DOCTYPE html>\n<html>\n\t<head>\n\t' +
        '</head>\n\t<body>\n\t\t<div class="background">' +
        '\n\t\t\t<div class="transbox">\n\t\t\t\t<p>Это текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в ' +
        'полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке. ' +
        '\n\t\t\t\tЭто текст в полупрозрачном блоке.' +
        '\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>';
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.head.lastChild.innerHTML = editor.getValue();
    });
    editor.setValue('.background{\n\twidth: 500px;\n\theight: 250px;' +
        '\n\t/*background: url("http://savepic.ru/13604514.jpg");*/\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 400px;' +
        '\n\theight: 250px;\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tfilter:alpha(opacity=60);' +
        '\n\topacity:0.6;\n}\n.transbox p{\n\tmargin: 30px 40px;\n\tfont-weight: bold;\n\tcolor: #000000;\n}');
}

acecss2();

