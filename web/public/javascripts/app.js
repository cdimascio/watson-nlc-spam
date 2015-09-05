(function() {
    $('.answers').hide();
    $('.loading').hide();
    $('.classify-btn').click(onClassifyClick);
    $('.dropdown-menu li > a').click(onExamplesClick);
    $('.classify-text').val('WIN 1 million dollars in cash prizes!');

    function onClassifyClick() {
        var text = $('.classify-text').val();
        $('.loading').show();
        $('.answers').hide();
        $.post("/classify", {text: text}, function(data) {
            renderAnswer(data)
        });
    }

    function onExamplesClick(e) {
        var text = this.innerHTML;
        $('.classify-text').val(text);
        if (text && text.length > 1) {
            onClassifyClick();
        }
    }

    function renderAnswer(data) {
        if (!data.classes && !data.classes.length > 0) {
            $('.answer').innerHTML('Service is down :-(');
        }
        var top = data.classes[0]
        $('.answer').html(top.class_name.toUpperCase());
        $('.confidence').html('Confidence: '+Math.floor(top.confidence*100 ).toFixed(0)+'%');
        $('.answers').show();
        $('.loading').hide();
    }

}());