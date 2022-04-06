function sliderMove(ev){
    preferredPercentageSize = ev.value/100;
    send("PreferenceChange", {CanvasSize: preferredPercentageSize});
}