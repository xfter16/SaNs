$(function() {
    $(".buttonDownload").on('click',
        function loadPhones() {
            var xhr = new XMLHttpRequest();

            xhr.open('GET', 'phones.json', false);
            xhr.send();

            if (xhr.status != 200) {
                // обработать ошибку
                alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            } else {
                // вывести результат
                console.log(xhr.responseText);
            }
        })
});

$(
    function() {
        $(".buttonSendForm").click(function() {
            console.log($(".form").value())
        })
    });
$('form').submit(function() {
    // чуть позже расскажу подробнее о AJAX
    $.post(
        $(this).attr('action'), // ссылка куда отправляем данные
        $(this).serialize()
        // данные формы
    );
    // отключаем действие по умолчанию
    return false;
});

$(
    function() {
        $(".buttonNotify").click(function() {
            var notifyData = $(".inputNotify").val();
            // console.log(notifyData);
            $.ajax({
                url: "notify.html",
                method: "GET",
                data: notifyData,
                datatype: "html",
                success: function(data) {
                    callNotify(data);
                }
            })
        })
    });
$(function() {
    var data = $(".inputNotify").val();
    console.log(data);

    var callNotify = function(data) {
        var notifyBox = $(".notifyBox");
        
        var animateNotify = function(bottom) {
            notifyBox.animate({
                'bottom': bottom
            });
        }
        $(".buttonNotify").click(function() {
            animateNotify('5px');
            setTimeout(function() {
                animateNotify('-105px')
            }, 2000);
        });
        notifyBox.html(data);

    }
});
