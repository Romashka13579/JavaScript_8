var d = 0
var k0 = 0
var s = 0
var s0 = 0
var calculation_tab = document.getElementById("calculation-tab")
function Calcul(l, k) {
    d++
    if (l == 1) {
        s += k
        calculation_tab.innerHTML = "" + s + ""
        s *= 10
    }
    if (l == 2) {
        switch (k) {
            case 11:
                s0 += s
                calculation_tab.innerHTML = "+"
                s = 0
            case 12:
                s0 -= s
                calculation_tab.innerHTML = "-"
                s = 0
            case 15:
                s0 *= s
                calculation_tab.innerHTML = "*"
                s = 0
            case 16:
                s0 /= s
                calculation_tab.innerHTML = "/"
                s = 0
            case 13:
                calculation_tab.innerHTML = "" + s0 + ""
            case 14:
                s0 = 0
                calculation_tab.innerHTML = ""
                s = 0
        }
    }
}