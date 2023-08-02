function addNewEDField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edField");
    newNode.classList.add("mt-1")
    newNode.setAttribute("placeholder", "Enter here")

    let ed = document.getElementById("ed");
    let edAddButton = document.getElementById("edAddButton");

    ed.insertBefore(newNode, edAddButton);
}

function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-1")
    newNode.setAttribute("placeholder", "Enter here")

    let we = document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");

    we.insertBefore(newNode, weAddButton);
}

function addNewCEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ceField");
    newNode.classList.add("mt-1")
    newNode.setAttribute("placeholder", "Enter here")

    let ce = document.getElementById("ce");
    let ceAddButton = document.getElementById("ceAddButton");

    ce.insertBefore(newNode, ceAddButton);
}

// <!--Generating Resume-->
function generateresume() {

    document.getElementById("resume-main-div").style = "border-style: groove";
    //set template color
    //.background

    var x = document.getElementById("colors").selectedIndex;
    var color = document.getElementsByTagName("option")[x].value;
    document.getElementById("resume-innerTemplate").style.backgroundColor = color;
    document.getElementById("card-cl").style.backgroundColor = color;
    document.getElementById("card-cl1").style.backgroundColor = color;
    document.getElementById("card-cl2").style.backgroundColor = color;
    document.getElementById("card-cl3").style.backgroundColor = color;





    //console.log("generating resume");

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;
    //Direct
    document.getElementById("nameT2").innerHTML = nameField;

    //Contact
    let contactField = document.getElementById("contactField").value;

    let contactT = document.getElementById("contactT");

    contactT.innerHTML = contactField;

    //Address
    let addressField = document.getElementById("addressField").value;

    let addressT = document.getElementById("addressT");

    addressT.innerHTML = addressField;

    //Pan no
    let panField = document.getElementById("panField").value;

    let panT = document.getElementById("panT");

    panT.innerHTML = panField;



    //links
    //linkedin
    let linkedField = document.getElementById("linkedField").value;

    let liT = document.getElementById("liT");

    liT.innerHTML = linkedField;

    //github
    let githubField = document.getElementById("githubField").value;

    let gitT = document.getElementById("gitT");

    gitT.innerHTML = githubField;

    //Facebook
    document.getElementById("emT").innerHTML = document.getElementById(
        "emField"
    ).value;
    //Skills
    document.getElementById("skT").innerHTML = document.getElementById(
        "skField"
    ).value;

    //Educational details

    let eds = document.getElementsByClassName("edField");

    let str = "";

    for (let e of eds) {
        str = str + '<li>' + e.value + '</li>';
    }

    document.getElementById("edT").innerHTML = str;

    //Work Experiance

    let wes = document.getElementsByClassName("weField");

    let st = "";

    for (let e of wes) {
        st += '<li>' + e.value + '</li>';
    }

    document.getElementById("weT").innerHTML = st;

    //Certifications

    let ces = document.getElementsByClassName("ceField");

    let sr = "";

    for (let e of ces) {
        sr += '<li>' + e.value + '</li>';
    }

    document.getElementById("ceT").innerHTML = sr;

    //code for setting img

    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template

    reader.onloadend = function () {
        document.getElementById('imgTemplate').src = reader.result;
    }


    document.getElementById('resume-form').style.display = 'none'
    document.getElementById('resume-template').style.display = 'block'
    document.getElementById('div-container').style.display = 'block'


}

//Fresher or Experianced
function checkMode() {
    var isFresher = document.getElementById("rdFresher").checked
    var isExerpianced = document.getElementById("rdExperiance").checked
    var htmlShow = document.getElementById("we")
    if (isFresher == true) {
        htmlShow.style.display = "none";
    } else if (isExerpianced == true) {
        htmlShow.style.display = "block";
    }


}

//Print Resume
function printresume() {


     window.print();
    

}
