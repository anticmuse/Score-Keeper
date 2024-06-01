let homeScoreBtn1 = document.getElementById("homescore-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function incrementHomeScore1(){
    homeScore += 1 
    homeScoreEl.textContent = homeScore
}
let homeScoreBtn2 = document.getElementById("homescore-btn-2")

function incrementHomeScore2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
let homeScoreBtn3 = document.getElementById("homescore-btn-3")

function incrementHomeScore3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreBtn1 = document.getElementById("guestscore-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function incrementGuestScore1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function incrementGuestScore2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function incrementGuestScore3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}