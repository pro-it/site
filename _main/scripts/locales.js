function redirectByLocale() {
    var locale = window.navigator.language || window.navigator.browserLanguage || window.navigator.systemLanguage || window.navigator.userLanguage;
    var lang = "en";

    if (locale != undefined) {
        locale = locale.substr(0, 2);

        if (locale == "be" || locale == "ru") {
            lang = locale;
        }
    }

    window.location.replace(window.location.protocol + "//" + window.location.host + "/" + lang + "/")
}
