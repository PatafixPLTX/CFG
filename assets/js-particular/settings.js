function canvasSize(ev){
    preferredPercentageSize = ev.value/100;
    send("PreferenceChange", {CanvasSize: preferredPercentageSize});
}

function canvasColor(ev){
    preferredColor = ev.value;
    send("PreferenceChange", {CanvasColor: preferredColor});
}