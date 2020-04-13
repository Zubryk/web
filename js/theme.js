var checkbox = document.querySelector('input[name=theme]');
var icons = document.getElementsByClassName('contact-icons')[0].getElementsByTagName('i');
var contact_form = document.getElementsByClassName('contact-form-text');
var table_lines1 = document.getElementsByTagName('table')[0].getElementsByTagName('td');
var table_lines2 = document.getElementsByTagName('table')[1].getElementsByTagName('td');
var menu_options = document.getElementsByClassName('menu')[0];
checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('body').setAttribute('data-theme', 'light');
        menu_options.setAttribute('data-theme', 'light');
        for (var i = 0; i < menu_options.getElementsByTagName('li').length; i++) {
            menu_options.getElementsByTagName('li')[i].getElementsByTagName('a')[0].setAttribute('data-theme', 'light');
        }
        document.getElementById('myphoto').setAttribute('data-theme', 'light');
        for (var i = 0; i < icons.length; i++) {
            icons[i].setAttribute('data-theme', 'light');
        }
        for (var i = 0; i < contact_form.length; i++) {
            contact_form[i].setAttribute('data-theme', 'light');
        }
        for (var i = 0; i < table_lines1.length; i++) {
            table_lines1[i].setAttribute('data-theme', 'light');
        }
        for (var i = 0; i < table_lines2.length; i++) {
            table_lines2[i].setAttribute('data-theme', 'light');
        }
        document.getElementsByClassName('call')[0].getElementsByTagName('caption')[0].setAttribute('data-theme', 'light');
        document.getElementsByClassName('call')[1].getElementsByTagName('caption')[0].setAttribute('data-theme', 'light');
        document.getElementsByClassName('contact-form-btn')[0].setAttribute('data-theme', 'light')

    } else {
        document.getElementById('body').setAttribute('data-theme', 'dark');
        menu_options.setAttribute('data-theme', 'dark');
        for (var i = 0; i < menu_options.getElementsByTagName('li').length; i++) {
            menu_options.getElementsByTagName('li')[i].getElementsByTagName('a')[0].setAttribute('data-theme', 'dark');
        }
        document.getElementById('myphoto').setAttribute('data-theme', 'dark');
        for (var i = 0; i < icons.length; i++) {
            icons[i].setAttribute('data-theme', 'dark');
        }
        for (var i = 0; i < contact_form.length; i++) {
            contact_form[i].setAttribute('data-theme', 'dark');
        }
        for (var i = 0; i < table_lines1.length; i++) {
            table_lines1[i].setAttribute('data-theme', 'dark');
        }
        for (var i = 0; i < table_lines2.length; i++) {
            table_lines2[i].setAttribute('data-theme', 'dark');
        }
        document.getElementsByClassName('call')[0].getElementsByTagName('caption')[0].setAttribute('data-theme', 'dark');
        document.getElementsByClassName('call')[1].getElementsByTagName('caption')[0].setAttribute('data-theme', 'dark');
        document.getElementsByClassName('contact-form-btn')[0].setAttribute('data-theme', 'dark')
    }
})