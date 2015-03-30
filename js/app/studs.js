/**
 * This software is governed by the CeCILL-B license. If a copy of this license
 * is not distributed with this file, you can obtain one at
 * http://www.cecill.info/licences/Licence_CeCILL-B_V1-en.txt
 *
 * Authors of STUdS (initial project): Guilhem BORGHESI (borghesi@unistra.fr) and Rapha�l DROZ
 * Authors of Framadate/OpenSondate: Framasoft (https://github.com/framasoft)
 *
 * =============================
 *
 * Ce logiciel est r�gi par la licence CeCILL-B. Si une copie de cette licence
 * ne se trouve pas avec ce fichier vous pouvez l'obtenir sur
 * http://www.cecill.info/licences/Licence_CeCILL-B_V1-fr.txt
 *
 * Auteurs de STUdS (projet initial) : Guilhem BORGHESI (borghesi@unistra.fr) et Rapha�l DROZ
 * Auteurs de Framadate/OpenSondage : Framasoft (https://github.com/framasoft)
 */

$(document).ready(function () {

    $(".check-name").click(function (event) {
        var name = $("#name").val();
        var regexContent = $("#parameter_name_regex").text().split("/");
        var regex = new RegExp(regexContent[1], regexContent[2]);

        if (name.length == 0 || !regex.test(name)) {
            event.preventDefault();
            var newMessage = $("#nameErrorMessage").clone();
            $("#message-container").empty();
            $("#message-container").append(newMessage);
            newMessage.removeClass("hidden");
            $('html, body').animate({
                scrollTop: $("#message-container").offset().top
            }, 750);
        }
    });

});