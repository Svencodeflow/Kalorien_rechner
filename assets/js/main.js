console.log("hello");

// kcal in kj = 4.1868

const körper = document.getElementById("körper");
const age = document.getElementById("age");
const gewicht = document.getElementById("gewicht");

const form = document.forms[0];
const gender = form.elements["gender"];
const activity = form.elements["aktivität"];

function check() {
    let genderValue = gender.value;
    let activityValue = activity.value;
    let körperValue = körper.value;
    let ageValue = age.value;
    let gewichtValue = gewicht.value;
    let gesamtMen = 664.7 + (13.7 * gewichtValue) + (5 * körperValue) - (6.8 * ageValue);
    let gesamtWoman = 655.1 + (9.6 * gewichtValue) + (1.8 * körperValue) - (4.7 * ageValue)
    let kjMen = gesamtMen * 4.1868;
    let kjWoman = gesamtWoman * 4.1868;
    let text;
    let kjgesamt;
    let men;
    let woman;

    if (genderValue == 0 && activityValue == "schlafen") {
        men = Math.round(gesamtMen * 0.95)
        console.log(men);
        text = men;
        kjgesamt = Math.round(men * 4.1868)
    }else if (genderValue == 1 && activityValue == "schlafen") {
        woman = Math.round(gesamtWoman * 0.95)
        console.log(woman);
        text = woman;
        kjgesamt = Math.round(woman * 4.1868)
    }else if (genderValue == 0 && activityValue == "sitlay") {
        men = Math.round(gesamtMen * 1.2)
        console.log(men);
        text = men;
        kjgesamt = Math.round(men * 4.1868)
    }else if (genderValue == 1 && activityValue == "sitlay") {
        woman = Math.round(gesamtWoman * 1.2)
        console.log(woman);
        text = woman;
        kjgesamt = Math.round(woman * 4.1868)
    }else if (genderValue == 0 && activityValue == "sit") {
        men = Math.round(gesamtMen * 1.5)
        console.log(men);
        text = men;
        kjgesamt = Math.round(men * 4.1868)
    }else if (genderValue == 1 && activityValue == "sit") {
        woman = Math.round(gesamtWoman * 1.5)
        console.log(woman);
        text = woman;
        kjgesamt = Math.round(woman * 4.1868)
    }else if (genderValue == 0 && activityValue == "forcedsit") {
        men = Math.round(gesamtMen * 1.7)
        console.log(men);
        text = men;
        kjgesamt = Math.round(men * 4.1868)
    }else if (genderValue == 1 && activityValue == "forcedsit") {
        woman = Math.round(gesamtWoman * 1.7)
        console.log(woman);
        text = woman;
        kjgesamt = Math.round(woman * 4.1868)
    }else if (genderValue == 0 && activityValue == "walk") {
        men = Math.round(gesamtMen * 1.9)
        console.log(men);
        text = men;
        kjgesamt = Math.round(men * 4.1868)
    }else if (genderValue == 1 && activityValue == "walk") {
        woman = Math.round(gesamtWoman * 1.9)
        console.log(woman);
        text = woman;
        kjgesamt = Math.round(woman * 4.1868)
    }else if (genderValue == 0 && activityValue == "bau") {
        men = Math.round(gesamtMen * 2.2)
        console.log(men);
        text = men;
        kjgesamt = Math.round(men * 4.1868)
    }else if (genderValue == 1 && activityValue == "bau") {
        woman = Math.round(gesamtWoman * 2.2)
        console.log(woman);
        text = woman;
        kjgesamt = Math.round(woman * 4.1868)
    }
    document.getElementById("kcalgesamt").innerHTML = text;
    document.getElementById("kjgesamt").innerHTML = kjgesamt;
    return
}

console.log(gender.checked);
function gendercheck() {
    let text3;
    let text4;
    let gewichtValue = gewicht.value;
    let körperValue = körper.value;
    let ageValue = age.value;
    let gesamtMen = 664.7 + (13.7 * gewichtValue) + (5 * körperValue) - (6.8 * ageValue);
    let gesamtWoman = 655.1 + (9.6 * gewichtValue) + (1.8 * körperValue) - (4.7 * ageValue)
    let kjMen = gesamtMen * 4.1868;
    let kjWoman = gesamtWoman * 4.1868;
    
    if (gender.value == 0) {
        text3 = Math.round(gesamtMen);
        text4 = Math.round(kjMen);
    }else if (gender.value == 1){
        text3 = Math.round(gesamtWoman);
        text4 = Math.round(kjWoman);
        console.log(kjWoman);
    }
    document.getElementById("kcalgrund").innerHTML = text3;
    document.getElementById("kjgrund").innerHTML = text4;
    return
}