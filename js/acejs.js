function acejshtml() {
    var editor = ace.edit("editorH");
    editor.getSession().setMode("ace/mode/html");
    var iframe = document.getElementById('sample-frame')
    var doc = iframe.contentWindow.document;
    editor.getSession().on('change', function() {
        // Вывод содержимого редактора в iframe
        doc.body.innerHTML = editor.getValue();
    });
    var cssDefaultStyles = doc.createElement('style');
    cssDefaultStyles.innerHTML = '.background{\n\twidth: 500px;\n\theight: 250px;\n\tbackground: url("http://savepic.ru/13604514.jpg");' +
        '\n\tborder: 2px solid black;\n}\n.transbox{\n\twidth: 400px;' +
        '\n\theight: 250px;\n\tbackground: #ffffff;\n\tborder: 1px solid black;\n\tfilter:alpha(opacity=60);' +
        '\n\topacity:0.6;\n}\n.transbox p{\n\tmargin: 30px 40px;\n\tfont-weight: bold;\n\tcolor: #000000;\n}';
    doc.head.appendChild(cssDefaultStyles);
    editor.setValue('<!DOCTYPE html>\n<html>\n\t<head>\n\t' +
        '</head>\n\t<body>\n\t\t<div class="background">\n\t\t' +
        '\n\t\t\t<div class="transbox">\n\t\t\t\t<p>Это текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в ' +
        'полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке.\n\t\t\t\tЭто текст в полупрозрачном блоке. ' +
        '\n\t\t\t\tЭто текст в полупрозрачном блоке.' +
        '\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n\n');
}

acejshtml();

/*background
{
    width: 500px;
    height: 250px;
    background: url(image/123.jpg) repeat;
    border: 2px solid black;
}
.transbox
{
    width: 400px;
    height: 180px;
    margin: 30px 50px;
    background-color: #ffffff;
    border: 1px solid black;
    filter:alpha(opacity=60);
    opacity:0.6;
}
.transbox p
{
    margin: 30px 40px;
    font-weight: bold;
    color: #000000;
}*/
