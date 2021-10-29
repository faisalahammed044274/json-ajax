var output = document.getElementById('output');
output.innerHTML = "";
//AJAX
var ajaxhttp = new XMLHttpRequest();
var url = "json.json"

ajaxhttp.open("GET", url, true);
ajaxhttp.setRequestHeader("content-type","application/json")

ajaxhttp.onreadystatechange = function(){
    if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
        var jcontent = JSON.parse(ajaxhttp.responseText);
        for(var myObj in jcontent){
            output.innerHTML += '<div>' + jcontent[myObj].firstName + ' ' + jcontent[myObj].lastName + ' '+jcontent[myObj].age + '</div>';
        }
        console.log(jcontent);
    }
}


ajaxhttp.send();


console.log(ajaxhttp);