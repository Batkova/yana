var ResTab = function(num){

    document.getElementById('res'+num+'-tab').className = 'active-tab';
    document.getElementById('result-'+num).style.display = 'block';

    switch (num) {
        case 'one':
            document.getElementById('restwo-tab').className = 'tab';
            document.getElementById('result-two').style.display = 'none';
            break;
        case 'two':
            document.getElementById('resone-tab').className = 'tab';
            document.getElementById('result-one').style.display = 'none';
            break;
    }

};

var CSSTab = function(num){

    document.getElementById('css'+num+'-tab').className = 'active-tab';
    document.getElementById('css-'+num).style.display = 'block';

    switch (num) {
        case 'one':
            document.getElementById('csstwo-tab').className = 'tab';
            document.getElementById('css-two').style.display = 'none';
            break;
        case 'two':
            document.getElementById('cssone-tab').className = 'tab';
            document.getElementById('css-one').style.display = 'none';
            break;
    }

};

document.getElementById('resone-tab').addEventListener('click', function(event) {
    event.preventDefault();
    ResTab('one')
});
document.getElementById('restwo-tab').addEventListener('click', function(event) {
    event.preventDefault();
    ResTab('two')
});

document.getElementById('cssone-tab').addEventListener('click', function(event) {
    event.preventDefault();
    CSSTab('one')
});
document.getElementById('csstwo-tab').addEventListener('click', function(event) {
    event.preventDefault();
    CSSTab('two')
});
