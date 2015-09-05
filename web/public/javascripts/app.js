(function() {
    $('.answers').hide();
    $('.loading').hide();
    $('#form').submit(onFormSubmit);
    $('.dropdown-menu li > a').click(onExamplesClick);
    $('.classify-text').val('WIN 1 million dollars in cash prizes!');

    function onFormSubmit() {
        var text = $('.classify-text').val();
        $('.loading').show();
        $('.answers').hide();
        $('.classify-btn').prop('disabled', true);
        $.post("/classify", {text: text}, function(data) {
            renderAnswer(data)
        }).fail(function(err) {
            renderAnswer(err);
        });
    }

    function onExamplesClick() {
        var text = this.innerHTML;
        $('.classify-text').val(text);
        if (text && text.length > 1) {
            $('#form').submit();
        }
    }

    function renderAnswer(data) {
        if (!data.classes || !data.classes.length > 0) {
            $('.answer').html('Something went wrong :-(');
        } else {
            var top = data.classes[0]
            $('.answer').html(top.class_name.toUpperCase());
            $('.confidence').html('Confidence: '+Math.floor(top.confidence*100 ).toFixed(0)+'%');
        }

        $('.classify-btn').prop('disabled', false);
        $('.answers').show();
        $('.loading').hide();
    }

}());