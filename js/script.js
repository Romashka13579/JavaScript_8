var n0
var calc
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
        // switch (k0) {
        //     case "plus":
        //         s0 += s
        //         calculation_tab.innerHTML = "+"
        //         console.log(s0);
        //         s = 0
        //         break
        //     case "minus":
        //         s0 -= s
        //         calculation_tab.innerHTML = "-"
        //         console.log(s0);
        //         s = 0
        //         break
        //     case "multiply":
        //         s0 *= s
        //         calculation_tab.innerHTML = "*"
        //         console.log(s0);
        //         s = 0
        //         break
        //     case "divide":
        //         s0 /= s
        //         calculation_tab.innerHTML = "/"
        //         console.log(s0);
        //         s = 0
        //         break
        //     case "equal":
        //         calculation_tab.innerHTML = "" + s0 + ""
        //         console.log(s0);
        //         s0=0
        //         break
        //     case "clear":
        //         s0 = 0
        //         calculation_tab.innerHTML = ""
        //         s = 0
        //         break
        // }
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
                        calculation_tab.innerHTML = ""+calc+""
                        break
                    case "minus":
                        calc = old_number - new_number
                        calculation_tab.innerHTML = ""+calc+""
                        break
                    case "multiply":
                        calc = old_number * new_number
                        calculation_tab.innerHTML = ""+calc+""
                        break
                    case "divide":
                        calc = old_number / new_number
                        calculation_tab.innerHTML = ""+calc+""
                        break
                    case "clear":
                        calc = 0
                        calculation_tab.innerHTML = ""+0+""
                }
                break
            case "clear":
                old_number = new_number
                new_number = 0
                n0 = n
                calculation_tab.innerHTML = "clear"
                break
        }
    }
}