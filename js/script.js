var n0
var calc
var actions = 0
var dot = 0
var dot_1 = 0
var old_number = new Number()
var new_number = new Number()
var calculation_tab = document.getElementById("calculation-tab")
function Calcul(type, n) {
    if (type == 0) {
        if(dot == 1){
            dot = 1
            calculation_tab.innerHTML = "" + new_number + ""
        }
        else{
            dot = 1
            Math.round(new_number)
            calculation_tab.innerHTML = "" + new_number + ""
        }
    }
    else if (type == 1) {
        if(dot == 1){
            dot_1++
            new_number += n / Math.round(Math.pow(10, dot_1))
            calculation_tab.innerHTML = "" + new_number + ""
        }
        else{
            new_number *= 10
            new_number += n
            calculation_tab.innerHTML = "" + new_number + ""
        }
    }
    if (type == 2) {
        dot = 0
        if(actions > 0){
            switch (n0) {
                case "plus":
                    old_number += new_number
                    break
                case "minus":
                    old_number -= new_number
                    break
                case "multiply":
                    old_number *= new_number
                    break
                case "divide":
                    old_number = old_number / new_number
                    break
                case "clear":
                    old_number = 0
            }
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
                Inner("+")
                break
            case "minus":
                actions ++
                n0 = n
                Inner("-")
                break
            case "multiply":
                actions ++
                n0 = n
                Inner("*")
                break
            case "divide":
                actions ++
                n0 = n
                Inner("/")
                break
            case "equal":
                switch (n0) {
                    case "plus":
                        calc = old_number + new_number
                        Inner(calc)
                        break
                    case "minus":
                        calc = old_number - new_number
                        Inner(calc)
                        break
                    case "multiply":
                        if(actions > 0){
                            calc = old_number
                            Inner(calc)
                        }
                        else{
                            calc = (old_number * new_number)
                            Inner(calc)
                        }
                        break
                    case "divide":
                        if(actions > 0){
                            calc = old_number
                            Inner(calc)
                        }
                        else{
                            calc = (old_number / new_number)
                            Inner(calc)
                        }
                        break
                    case "clear":
                        calc = new_number
                        Inner(new_number)
                }
                new_number = calc
                actions = 0
                break
            case "clear":
                actions = 0
                n0 = n
                Inner("clear")
                actions = 0
                break
            default:
                break
        }
    }
}
function Inner(sign){
    calculation_tab.style.color = "#ffffff00"
    calculation_tab.style.fontSize = "40px"
    calculation_tab.innerHTML = ""+sign+""
    setInterval(Inner_2(), 500)
}
function Inner_2(){
    calculation_tab.style.color = "rgb(222, 255, 254)"
    calculation_tab.style.fontSize = "26px"
}