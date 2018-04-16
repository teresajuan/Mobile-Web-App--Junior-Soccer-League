$(function() {
    var times;

    $.getJSON("https://api.myjson.com/bins/14gxwp", function(datos) {
        createAllLocations(datos);
        createInfoTeams(datos);
        createMatchesDate(datos);
        createMatchInfo(datos);
        createSingleMap(datos);
        activateListeners();
        filters();
    });

    /*Funciones para ocultar y mostrar el contenido de la single-page*/

    function activateListeners() {
        showContent("#homeIcon, #back1, #back3, #back4", "#events", "#monthMatches, #teamsInfo, #matchInfo, #teamMap, #allLocations, footer, #chatTeam1, #chatLogin, #chatTeam1");
        showContent(".navSeptember, #back5", "#monthMatches, #back4", "#events, #teamsInfo, #matchInfo, #teamMap, #allLocations, #back3, #back1, #back5, #back2, #back6, #chatLogin, #chatTeam1");
        showContent("#navTeamInfo, #back2", "#teamsInfo, #back1", "#events, #monthMatches, #matchInfo, #teamMap, #allLocations, #back3, #back6, #back4, #back2, #back5, #chatLogin, #chatTeam1");
        showContent("#navLocations", "#allLocations, #back3", "#events, #monthMatches, #matchInfo, #teamMap, #teamsInfo, #back5, #back6, #back4, #back2, #back1, #chatLogin, #chatTeam1");
        showContent(".navDate, #back6", "#matchInfo, #back5", "#events, #teamsInfo, #monthMatches, #teamMap, #allLocations, #back2, #back4, #back6, #chatLogin, #chatTeam1");
        showContent(".navGoMap2", "#teamMap, #back6", "#events, #teamsInfo, #monthMatches, #matchInfo, #allLocations, #back5, #back2, #chatLogin, #chatTeam1");
        showContent(".navGoMap1", "#teamMap, #back2", "#events, #teamsInfo, #monthMatches, #matchInfo, #allLocations, #back1, #back5, #chatLogin, #chatTeam1");
        showContent("#chatBtn", "#chatLogin", "#events, #monthMatches, #teamsInfo, #matchInfo, #teamMap, #allLocations, footer, #chatTeam1");
//        showContent("#login", "#chatTeam1", "#chatLogin");
        showContent("#login", "#chatLogin", "#chatTeam1");
        showContent("#logOut", "#chatLogin", "#chatTeam1");
    }

    /*Función para mostrar y ocultar contenido*/

    function showContent(elementToClick, elementToShow, elementToHide) {
        $(elementToClick).click(function () {
            $(elementToShow).show();
            $(elementToHide).hide();
        });
    }

    /*Función para crear la sección de Locations*/

    function createAllLocations(data) {

        var teams = data.teams;

        var printLocation = "";

        for (var a = 0; a < teams.length; a++) {

            var nameLocation = teams[a].name;
            var addressLocation = teams[a].address;
            var mapLocation = teams[a].map;

            printLocation += "<div class='matchLocation'>" +
                "<p>" + nameLocation + "</p>" +
                "<p>" + addressLocation + "</p>" +
                "<div class='map1'>" +
                "<iframe src=" + mapLocation + ">" + "</iframe>" +
                "</div>" +
                "</div>";
        }
        $("#allLocations").html(printLocation);
    }

    /*Función para crear la sección de Info Teams*/

    function createInfoTeams(data) {

        var teams = data.teams;

        var printTeams = "";

        for (var b = 0; b < teams.length; b++) {

            var nameTeam = teams[b].name;
            var addressTeam = teams[b].address;
            var logoTeam = teams[b].logo;
            var codeTeam = teams[b].code;
            var positionTeam = teams[b].position;
            var pointsTeam = teams[b].points;
            var coachTeam = teams[b].coach;
            var websiteTeam = teams[b].website;
            var collapseTeam = teams[b].collapse;

            printTeams += "<div class='btn matchLocation locInfo' data-toggle='collapse' href='" + '#' + collapseTeam + "'" + "role='button' aria-expanded='false'>" +
                '<div class="teamInfo4">' +
                '<div class="teamInfo3">' +
                '<div class=teamInfo5>' +
                '<img class="teamLogo teamInfo1" src="' + logoTeam + '"' + '" alt="' + nameTeam + '" title="' + nameTeam + '">' +
                '</div>' +
                '<div class="teamInfo2">' +
                '<p class="teamName1">' + 'Team' + " " + codeTeam + ":" + '</p>' +
                '<p class="teamName2">' + nameTeam + '</p>' +
                '</div>' +
                '</div>' +
                '<div class="collapse" id="' + collapseTeam + '"' + '>' +
                '<div class="card">' +
                '<dl>' +
                '<dt>' + 'Position:' + '</dt>' +
                '<dd>' + positionTeam + '</dd>' +
                '<dt>' + 'Points:' + '</dt>' +
                '<dd>' + pointsTeam + '</dd>' +
                '<dt>' + 'Coach:' + '</dt>' +
                '<dd>' + coachTeam + '</dd>' +
                '<dt>' + 'Stadium:' + '</dt>' +
                '<dd>' + addressTeam + '<a class="goMap navGoMap1" value="' + nameTeam + '"' + 'href="#">' + ' ' + 'go to the map' + '</a>' + '</dd>' +
                '<dt>' + 'Website:' + '</dt>' +
                '<dd>' + '<a href="' + websiteTeam + '"' + '>' + websiteTeam + '</a>' + '</dd>' +
                '</dl>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        $("#teamsInfo").html(printTeams);
    }

    /*Función para crear la sección de fechas, cuando clicas septiembre y octubre*/

    function createMatchesDate(data) {

        var matches = data.matches.date;

//        var printDates = "";
        
        var printDates = document.getElementById('monthMatches');

        for (var c = 0; c < matches.length; c++) {

            var numberDate = matches[c].number;
            var valueDate = matches[c].value;
            
            var elemento1 = document.createElement('div');
            var elemento2 = document.createElement('a');
            var elemento3 = document.createElement('p');
            
            elemento1.setAttribute('class', 'matchDate' + ' ' + valueDate);
            elemento2.setAttribute('class', 'navDate');
            elemento2.setAttribute('href', '#');
            elemento3.setAttribute('class', 'moreInfo');
            
            elemento2.append(numberDate);
            elemento3.append('Click to see more information');
            elemento1.append(elemento2);
            elemento1.append(elemento3);
            
            printDates.append(elemento1);
            
//            printDates += '<div class="matchDate' + ' ' + valueDate + '"' + '>' +
//                '<a class="navDate" href="#">' + numberDate +
//                '</a>' +
//                '<p class="moreInfo">' + 'Click to see more information' +
//                '</p>' +
//                '</div>';
//        }
//        $("#monthMatches").html(printDates);
        }
    }
    /*Función para crear la sección match Info*/

    function createMatchInfo(data) {

        var matches = data.matches.date;
        var printMatchInfo = "";

        for (d = 0; d < matches.length; d++) {

            var match = matches[d].match;
            var time = matches[d].hour;
            var location = matches[d].location;
            var dateNumber = matches[d].number;

            printMatchInfo += '<div value="9:30a.m." class="matchInfo matchMorning' + ' ' + dateNumber + '"' + '>' +
                '<p>' + match + '</p>' +
                '<p class="day" value="' + time + '"' + '>' + 'Time:' + ' ' + time + '</p>' +
                '<p>' + 'Location:' + ' ' + location + ' ' +
                '<br>' + 
                '<a class="navGoMap2" value="' + location + '"' + 'href="#">' + 'go to the map' +
                '</a>' +
                '</p>' +
                '</div>';
        }
        $("#matchInfo").html(printMatchInfo);
    }

    /*Función para crear mapas de go to the map*/

    function createSingleMap(data) {

        var teams = data.teams;

        var printSingleMap = "";

        for (var e = 0; e < teams.length; e++) {

            var nameTeam = teams[e].name;
            var addressLocation = teams[e].address;
            var mapLocation = teams[e].map;

            printSingleMap += "<div class='matchLocation" + " " + nameTeam + "'" + ">" +
                "<p>" + "Location: " + nameTeam + "</p>" +
                "<p>" + "Adress: " + addressLocation + "</p>" +
                "<div class='map1" + " " + nameTeam + "'" + ">" +
                "<iframe src=" + mapLocation + ">" + "</iframe>" +
                "</div>" +
                "</div>";
        }
        $("#teamMap").html(printSingleMap);
    }

    function filters() {
        
    /*Filtro para mostrar fechas según el mes*/
    
        $('ul.list li a').click(function () {
            var months = $(this).text(); /*cojo el texto del anchor del navegador*/
            $("#monthMatches div").each(function () {
                if ($(this).hasClass(months)) { /*si los elementos tienen una clase que coincida con el texto guardado en la variable months, o sea, el texto del anchor clicado, entonces los muestras. Si no los ocultas*/
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });

        /*Filtro para mostrar la match Info*/

        $('#monthMatches div a').click(function () {
            var matches = $(this).text(); /*cojo el texto del anchor del navegador*/
            $("#matchInfo div").each(function () {
                if ($(this).hasClass(matches)) { /*si los elementos tienen una clase que coincida con el texto guardado en la variable matches, o sea, el texto del anchor clicado, entonces los muestras. Si no los ocultas*/
                    $(this).show();
                } else {
                    $(this).hide();
                }
                
                /* Parte del filtro para printar la imagen de fondo en función de la hora del partido*/
                
                var day = $(this).find(".day").attr("value");
                var morning = $(this).attr("value");

                if (day == morning) {
                    $(this).css('background-image', 'url(sol3.png)');
                } else {
                    $(this).css('background-image', 'url(luna2.png)');
                }
            });
        });

        /*Filtro para mostrar sólo el mapa de un único partido cuando clicas en go to the map de team Info*/

        $('#teamsInfo div a').click(function () {
            var map = $(this).attr("value"); /*cojo el valor del anchor del navegador*/
            $("#teamMap div").each(function () {
                if ($(this).hasClass(map)) { /*si los elementos tienen una clase que coincida con el texto guardado en la variable matches, o sea, el texto del anchor clicado, entonces los muestras. Si no los ocultas*/
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });

        /*Filtro para mostrar sólo el mapa de un único partido cuando clicas en go to the map de match Info*/

        $('#matchInfo div a').click(function () {
            var map2 = $(this).attr("value"); /*cojo el valor del anchor del navegador*/
            $("#teamMap div").each(function () {
                if ($(this).hasClass(map2)) { /*si los elementos tienen una clase que coincida con el texto guardado en la variable matches, o sea, el texto del anchor clicado, entonces los muestras. Si no los ocultas*/
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    }
    
    /*Funcionalidad del chat*/
    document.getElementById("login").addEventListener("click", login);
    document.getElementById("create-post").addEventListener("click", writeNewPost);
    document.getElementById("logOut").addEventListener("click", logout);

getPosts();

function login() {
    
    console.log("Login!!");

    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
        .then(function(){
        
        getPosts();
        
        $("#chatTeam1").show();
        $("#chatLogin").hide();
        
        var userName = firebase.auth().currentUser.displayName;
        document.getElementById("user").innerHTML = userName;
        
        scrollDown();
         
    }).catch(function(response){
        //Gestioanamos el error
        alert("Login error. Try it again");
    });
    
//    var userName = firebase.auth().currentUser.displayName;
//    document.getElementById("user").innerHTML = userName;
}
    
function logout() {
    
    console.log("Log out!!");
    
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signOut(provider);
    
}

function writeNewPost() {

    var text = document.getElementById("message").value;

    var userName = firebase.auth().currentUser.displayName;
    
    var realTime = new Date();
    var realDate = realTime.getDate();
    var realMonth = realTime.getMonth() + 1;
    var realYear = realTime.getFullYear();
    var timeString = String(realTime);
    var realHour = timeString.substring(16, 18);
    var realMin = timeString.substring(19, 21);

    /*post entry*/
    var postData = {
        name: userName,
        body: text,
        time: realTime,
        date: realDate,
        month: realMonth,
        year: realYear,
        hour: realHour,
        minutes: realMin
    };

    /*get a key for a new post, myMatch es el nombre del chat*/

    var newPostKey =
        firebase.database().ref().child('myMatch').push().key;

    var updates = {};

    updates[newPostKey] = postData;

    console.log(newPostKey);

    firebase.database().ref().child('myMatch').update(updates);

    /* para borrar el valor del input después de clicar el botón de crear post*/
    
    $("#message").val("");
}

function getPosts() {

    firebase.database().ref('myMatch').on('value', function (data) {

        var logs = document.getElementById('posts');
        logs.innerHTML = "";

        var posts = data.val();
        
        for (var key in posts) {
            
            var userValid = firebase.auth().currentUser.displayName;
            var text = document.createElement('div');
            var userName = document.createElement('p');
            var postsDate = document.createElement('span');
            var element = posts[key];
            var fullDate = element.hour + ":" + element.minutes + "," + " " + element.date + "/" + element.month + "/" + element.year;
            
            text.setAttribute('class', 'userStyle');
            postsDate.setAttribute('class', 'dateStyle');
            userName.setAttribute('class', 'userNameStyle');
            
            if (element.body != "") {
            
                userName.append(element.name);
                postsDate.append(fullDate);
                userName.append(postsDate);
                text.append(userName);
                text.append(element.body);
                logs.append(text);
                
            //            output+= '<div>' + element.body + '</div>';        

            /*Para diferenciar los posts escritos por el user de los demás usuarios*/
            
                if (userValid != element.name) {

                    document.querySelector("div.userStyle").className = "userActive2";

                } else {
                    document.querySelector("div.userStyle").className = "userActive";
                }
            }
            
        }
        
        /*Después de printar un mensaje nuevo, ejecuta scrollDown para bajar toda la ventana*/
        
        scrollDown();

        //        logs.innerHTML = output;
    });

}
    
    /* Hacer desaparecer el header cuando la pantalla se mueve, para poder ver mejor la pantalla*/
    
//    var tiempo; 
//
//    function desplaza() {
//    clearTimeout(tiempo); 
//    tiempo = setTimeout(oculta, 1000); 
//    document.querySelector("header").className = "aparece"; 
//    }
//
//    function oculta() {
//      if((document.documentElement.scrollTop || self.pageYOffset != 0)) {
//      document.querySelector("header").className = "desaparece"; 
//      }
//    }
//    
//    function desplaza2() {
//    clearTimeout(tiempo); 
//    tiempo = setTimeout(oculta, 5000); 
//    document.querySelector("header").className = "aparece"; 
//    }
//
//    onscroll = desplaza;
//    
//    $("header").click(desplaza2);
    
    var lastPositionScrollTop = 0;
 
/***
 * Appear and disappear the header depends the
 * position of the Scroll
 */
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position < lastPositionScrollTop){
            $('header').fadeIn("slow");
        } else {
            $('header').fadeOut("slow");
        }
        lastPositionScrollTop = position;
    });
   
    
    /*Para poner el scroll abajo en la ventana de posts*/
    
    function scrollDown() {
        var position = document.getElementById('posts').scrollHeight;
        document.getElementById('posts').scrollTop = position;
    }
     
});

