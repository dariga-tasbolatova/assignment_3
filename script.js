const educationValue = document.getElementById("education")
const familyValue = document.getElementById("family")
const skillsValue = document.getElementById("skills")
const ageValue = document.getElementById("age")
const casteValue = document.getElementById("caste")
const reputationValue = document.getElementById("reputation")

let price = document.getElementById("bid").value

if (price != 0) {
    price = price * Number(educationValue.value)
    price = price * Number(familyValue.value)
    price = price + Number(skillsValue.value)
    price = price * (ageValue.value)

    if (document.reputation.value[0].checked == true) {
        price *= document.reputation.option[0].value
    }
    if (document.reputation.value[1].checked == true) {
        price *= document.reputation.option[1].value
    }
    if (document.reputation.value[2].checked == true) {
        price *= document.reputation.option[2].value
    }

    if (document.caste.value[0].checked == true) {
        price += document.caste.option[0].value
    }
    if (document.caste.value[1].checked == true) {
        price += document.caste.option[1].value
    }
    if (document.caste.value[2].checked == true) {
        price += document.caste.option[2].value
    }
    if (document.caste.value[3].checked == true) {
        price += document.caste.option[3].value
    }
    if (document.caste.value[4].checked == true) {
        price += document.caste.option[4].value
    }

}

const sum = document.getElementById("sum")
sum = price