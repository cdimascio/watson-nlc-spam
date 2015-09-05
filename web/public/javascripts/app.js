(function() {
    $('.answers').hide();
    $('.loading').hide();
    $('.classify-btn').click(onClassifyClick);
    $('.dropdown-menu li > a').click(onExamplesClick);
    $('.classify-text').val('WIN 1 million dollars in cash prizes!');
    wireClassifyOnEnter();

    function onClassifyClick() {
        var text = $('.classify-text').val();
        $('.loading').show();
        $('.answers').hide();
        $('.classify-btn').prop('disabled', true);
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
            $('.answer').html('Service is down :-(');
        } else {
            var top = data.classes[0]
            $('.answer').html(top.class_name.toUpperCase());
            $('.confidence').html('Confidence: '+Math.floor(top.confidence*100 ).toFixed(0)+'%');
        }

        $('.classify-btn').prop('disabled', false);
        $('.answers').show();
        $('.loading').hide();
    }

    function wireClassifyOnEnter() {
        $('.classify-text').keypress(function (e) {
            if (e.which == 13 && $('.classify-text').val().length  > 0) {
                onClassifyClick();
                return false;
            }
        });
    }

}());