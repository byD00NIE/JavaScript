function Point1() {
    var pt = document.getElementById("pt1").innerHTML
    pt++
    document.getElementById("pt1").innerHTML = pt
}

function Point2() {
    var pt = document.getElementById("pt2").innerHTML
    pt++
    document.getElementById("pt2").innerHTML = pt
}

function clearResults() {
    document.getElementById("pt1").innerHTML = "0"

    document.getElementById("pt2").innerHTML = "0"




}