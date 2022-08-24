var n0
var calc
var actions = 0
var old_number = new Number()
var new_number = new Number()
var calculation_tab = document.getElementById("calculation-tab")
function Calcul(type, n) {
    if (type == 1) {
        new_number *= 10
        new_number += n
        calculation_tab.innerHTML = "" + new_number + ""
    }
    if (type == 2) {
        if(actions > 0){
            old_number += new_number
            new_number = 0
            console.log(old_number);
        }
        else if(actions <= 0 && n != "equal"){
            old_number = new_number
            new_number = 0
        }
        switch (n) {
            case "plus":
                actions ++
                n0 = n
                calculation_tab.innerHTML = "+"
                break
            case "minus":
                actions ++
                n0 = n
                calculation_tab.innerHTML = "-"
                break
            case "multiply":
                actions ++
                n0 = n
                calculation_tab.innerHTML = "*"
                break
            case "divide":
                actions ++
                n0 = n
                calculation_tab.innerHTML = "/"
                break
            case "equal":
                switch (n0) {
                    case "plus":
                        calc = old_number + new_number
                        calculation_tab.innerHTML = "" + calc + ""
                        break
                    case "minus":
                        calc = old_number - new_number
                        calculation_tab.innerHTML = "" + calc + ""
                        break
                    case "multiply":
                        calc = (old_number * new_number)
                        calculation_tab.innerHTML = "" + calc + ""
                        break
                    case "divide":
                        calc = (old_number / new_number)
                        calculation_tab.innerHTML = "" + calc + ""
                        break
                    case "clear":
                        calc = new_number
                        calculation_tab.innerHTML = "" + new_number + ""
                    default:
                        new_number
                }
                new_number = calc
                actions = 0
                break
            case "clear":
                actions = 0
                n0 = n
                calculation_tab.innerHTML = "clear"
                actions = 0
                break
            default:
                break
        }
    }
}