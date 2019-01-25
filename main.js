function fun1(){
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert ('Выбрана опция ' + options[sel].text)
}