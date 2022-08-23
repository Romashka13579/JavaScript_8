var d = 0
var k0 = 0
var s = 0
var s0 = 0
var calculation_tab = document.getElementById("calculation-tab")
function Calcul(l, k) {
    d++
    if (l == 1) {
        s *= 10
        s += k
        calculation_tab.innerHTML = "" + s + ""
    }
    if (l == 2) {
        switch (k) {
            case "plus":
                s0 += s
                calculation_tab.innerHTML = "+"
                console.log(s0);
                s = 0
                break
            case "minus":
                s0 -= s
                calculation_tab.innerHTML = "-"
                console.log(s0);
                s = 0
                break
            case "multiply":
                s0 *= s
                calculation_tab.innerHTML = "*"
                console.log(s0);
                s = 0
                break
            case "divide":
                s0 /= s
                calculation_tab.innerHTML = "/"
                console.log(s0);
                s = 0
                break
            case "equal":
                calculation_tab.innerHTML = "" + s0 + ""
                console.log(s0);
                s0=0
                break
            case "clear":
                s0 = 0
                calculation_tab.innerHTML = ""
                s = 0
                break
        }
    }
}