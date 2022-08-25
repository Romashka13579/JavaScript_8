var n0
var calc
var actions = 0
var dot = 0
var dot_1 = 0
var t=0
var old_number = new Number()
var new_number = new Number()
var calculation_tab = document.getElementById("calculation-tab")
var calculation_tab_top = document.getElementById("calculation-tab-top")
var calculation_numbers = document.getElementById("calculation-numbers")
var btn_more = document.getElementById("more")
var displays = document.querySelectorAll('.display')
function Calcul(type, n) {
    if (type == 0) {
        if(dot == 1){
            dot = 1
        }
        else{
            dot = 1
            Math.round(new_number)
        }
        calculation_tab.innerHTML = "" + new_number + ""
    }
    else if (type == 1) {
        if(dot == 1){
            dot_1++
            new_number += n / Math.round(Math.pow(10, dot_1))
            calculation_tab.innerHTML = "" + new_number.toFixed(dot_1) + ""
        }
        else{
            new_number *= 10
            new_number += n
            calculation_tab.innerHTML = "" + new_number + ""
        }
    }
    else if (type == 2) {
        dot = 0
        calculation_tab_top.innerHTML += ""+new_number.toFixed(dot_1)+""
        dot_1 = 0
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
                calculation_tab_top.innerHTML += "+"
                break
            case "minus":
                actions ++
                n0 = n
                Inner("-")
                calculation_tab_top.innerHTML += "-"
                break
            case "multiply":
                actions ++
                n0 = n
                Inner("*")
                calculation_tab_top.innerHTML += "*"
                break
            case "divide":
                actions ++
                n0 = n
                Inner("/")
                calculation_tab_top.innerHTML += "/"
                break
            case "equal":
                calculation_tab_top.innerHTML += "="
                switch (n0) {
                    case "plus":
                        calc = old_number + new_number
                        Inner(calc)
                        calculation_tab_top.innerHTML += calc
                        break
                    case "minus":
                        calc = old_number - new_number
                        Inner(calc)
                        calculation_tab_top.innerHTML += calc
                        break
                    case "multiply":
                        if(actions > 0){
                            calc = old_number
                            Inner(calc)
                            calculation_tab_top.innerHTML += calc
                        }
                        else{
                            calc = (old_number * new_number)
                            Inner(calc)
                            calculation_tab_top.innerHTML += calc
                        }
                        break
                    case "divide":
                        if(actions > 0){
                            calc = old_number
                            Inner(calc)
                            calculation_tab_top.innerHTML += calc
                        }
                        else{
                            calc = (old_number / new_number)
                            Inner(calc)
                            calculation_tab_top.innerHTML += calc
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
    else if (type == 3) {
        switch (n) {
            case "asin":
                new_number = Math.asin(new_number)
                Inner(new_number)
                break
            case "acos":
                new_number = Math.acos(new_number)
                Inner(new_number)
                break
            case "atan":
                new_number = Math.atan(new_number)
                Inner(new_number)
                break
            case "actg":
                new_number = 1 / Math.atan(new_number)
                Inner(new_number)
                break
        }
    }
    else if (type == 4) {
        if(t%2==0){
            displays.forEach(display => {
                display.style.display = "block"
            })
            calculation_numbers.style.gridTemplateRows = "repeat(6, 1fr)"
            btn_more.style.background = "url(img/minimize-solid.svg)"
            btn_more.style.backgroundSize = "50px 50px"
            btn_more.style.backgroundColor = "hsl(247, 100%, 56%)"
            btn_more.style.backgroundPosition = "center"
        }
        else{
            displays.forEach(display => {
                display.style.display = "none"
            })
            calculation_numbers.style.gridTemplateRows = "repeat(4, 1fr)"
            btn_more.style.background = "url(img/maximize-solid.svg)"
            btn_more.style.backgroundSize = "50px 50px"
            btn_more.style.backgroundColor = "hsl(258, 100%, 56%)"
            btn_more.style.backgroundPosition = "center"
        }
        t++
    }
}
function Inner(sign){
    calculation_tab.innerHTML = ""+sign+""
}
// var n0
// var t = 0
// var calc
// var actions = 0
// var dot = 0
// var dot_1 = 0
// var old_number = new Number()
// var new_number = new Number()
// var calculation_tab = document.getElementById("calculation-tab")
// var calculation_tab_top = document.getElementById("calculation-tab-top")
// var calculation_numbers = document.getElementById("calculation-numbers")
// var btn_more = document.getElementById("more")
// var displays = document.querySelectorAll('.display')
// function Calcul(type, n) {
//     if (type == 0) {
//         if(dot == 1){
//             dot = 1
//         }
//         else{
//             dot = 1
//             Math.round(new_number)
//         }
//         calculation_tab.innerHTML = "" + new_number + ""
//     }
//     else if (type == 1) {
//         if(dot == 1){
//             dot_1++
//             new_number += n / Math.round(Math.pow(10, dot_1))
//             calculation_tab.innerHTML = "" + new_number.toFixed(dot_1) + ""
//         }
//         else{
//             new_number *= 10
//             new_number += n
//             calculation_tab.innerHTML = "" + new_number + ""
//         }
//     }
    // else if (type == 3) {
    //     switch (n0) {
    //         case "sin":
    //             old_number = Math.sin(old_number)
    //             break
    //         case "cos":
    //             old_number = Math.cos(old_number)
    //             break
    //         case "tan":
    //             old_number = Math.tan(old_number)
    //             break
    //         case "ctg":
    //             old_number = Math.cbrt(old_number)
    //             break
    //     }
    // }
//     else if (type == 2) {
//         dot = 0
//         calculation_tab_top.innerHTML += ""+new_number.toFixed(dot_1)+""
//         dot_1 = 0
//         if(actions > 0){
//             switch (n) {
//                 case "plus":
//                     old_number += new_number
//                     break
//                 case "minus":
//                     old_number -= new_number
//                     break
//                 case "multiply":
//                     old_number *= new_number
//                     break
//                 case "divide":
//                     old_number = old_number / new_number
//                     break
//                 case "clear":
//                     old_number = 0
//             }
//             new_number = 0
//             console.log(old_number);
//         }
//         else if(actions <= 0 && n != "equal"){
//             old_number = new_number
//             new_number = 0
//         }
//         switch (n) {
//             case "plus":
//                 actions ++
//                 n0 = n
//                 Inner("+")
//                 calculation_tab_top.innerHTML += "+"
//                 break
//             case "minus":
//                 actions ++
//                 n0 = n
//                 Inner("-")
//                 calculation_tab_top.innerHTML += "-"
//                 break
//             case "multiply":
//                 actions ++
//                 n0 = n
//                 Inner("*")
//                 calculation_tab_top.innerHTML += "*"
//                 break
//             case "divide":
//                 actions ++
//                 n0 = n
//                 Inner("/")
//                 calculation_tab_top.innerHTML += "/"
//                 break
//             case "equal":
//                 calculation_tab_top.innerHTML += "="
//                 switch (n0) {
//                     case "plus":
//                         calc = old_number + new_number
//                         Inner(calc)
//                         calculation_tab_top.innerHTML += calc
//                         break
//                     case "minus":
//                         calc = old_number - new_number
//                         Inner(calc)
//                         calculation_tab_top.innerHTML += calc
//                         break
//                     case "multiply":
//                         if(actions > 0){
//                             calc = old_number
//                             Inner(calc)
//                             calculation_tab_top.innerHTML += calc
//                         }
//                         else{
//                             calc = (old_number * new_number)
//                             Inner(calc)
//                             calculation_tab_top.innerHTML += calc
//                         }
//                         break
//                     case "divide":
//                         if(actions > 0){
//                             calc = old_number
//                             Inner(calc)
//                             calculation_tab_top.innerHTML += calc
//                         }
//                         else{
//                             calc = (old_number / new_number)
//                             Inner(calc)
//                             calculation_tab_top.innerHTML += calc
//                         }
//                         break
//                     case "clear":
//                         calc = new_number
//                         Inner(new_number)
//                 }
//                 new_number = calc
//                 actions = 0
//                 break
//             case "clear":
//                 actions = 0
//                 n0 = n
//                 Inner("clear")
//                 actions = 0
//                 break
//             default:
//                 break
//         }
//     }
//     else if (type == 4) {
//         if(t%2==0){
//             displays.forEach(display => {
//                 display.style.display = "block"
//             })
//             calculation_numbers.style.gridTemplateRows = "repeat(6, 1fr)"
//             btn_more.style.background = "url(img/minimize-solid.svg)"
//             btn_more.style.backgroundSize = "50px 50px"
//             btn_more.style.backgroundColor = "hsl(247, 100%, 56%)"
//             btn_more.style.backgroundPosition = "center"
//         }
//         else{
//             displays.forEach(display => {
//                 display.style.display = "none"
//             })
//             calculation_numbers.style.gridTemplateRows = "repeat(4, 1fr)"
//             btn_more.style.background = "url(img/maximize-solid.svg)"
//             btn_more.style.backgroundSize = "50px 50px"
//             btn_more.style.backgroundColor = "hsl(258, 100%, 56%)"
//             btn_more.style.backgroundPosition = "center"
//         }
//         t++
//     }
// }
// function Inner(sign){
//     calculation_tab.innerHTML = ""+sign+""
// }