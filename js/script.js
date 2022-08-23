var n0
var calc
var actions = 0
var old_number = 0
var new_number = 0
var calculation_tab = document.getElementById("calculation-tab")
function Calcul(type, n) {
    if (type == 1) {
        new_number *= 10
        new_number += n
        calculation_tab.innerHTML = "" + new_number + ""
    }
    if (type == 2) {
        actions ++
        if(actions > 1 && n != "equal"){
            switch (n0) {
                case "plus":
                    new_number += old_number
                    console.log(new_number);
                    break
                case "minus":
                    new_number -= old_number
                    console.log(new_number);
                    break
                case "multiply":
                    new_number *= old_number
                    console.log(new_number);
                    break
                case "divide":
                    new_number /= old_number
                    console.log(new_number);
                    break
                case "clear":
                    old_number = 0
                    break
            }
        }
        switch (n) {
            case "plus":
                old_number = new_number
                new_number = 0
                n0 = n
                calculation_tab.innerHTML = "+"
                break
            case "minus":
                old_number = new_number
                new_number = 0
                n0 = n
                calculation_tab.innerHTML = "-"
                break
            case "multiply":
                old_number = new_number
                new_number = 0
                n0 = n
                calculation_tab.innerHTML = "*"
                break
            case "divide":
                old_number = new_number
                new_number = 0
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
                        calc = old_number * new_number
                        calculation_tab.innerHTML = "" + calc + ""
                        break
                    case "divide":
                        calc = old_number / new_number
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
                old_number = new_number
                new_number = 0
                n0 = n
                calculation_tab.innerHTML = "clear"
                actions = 0
                break
            default:
                break
        }
    }
}