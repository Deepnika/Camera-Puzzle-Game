export function updateTime(START_TIME: number, END_TIME: number) {
    let timeElement = <HTMLDivElement> document.getElementById("time")
    let now = new Date().getTime();
    if (START_TIME != null) {
        if ( END_TIME != null) {
            timeElement.innerHTML = formatTime(END_TIME - START_TIME);
        }
        else {
            timeElement.innerHTML = formatTime(now - START_TIME);
        }
    }
}

function formatTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds/1000);
    let s = Math.floor(seconds%60);
    let m = Math.floor((seconds%(60*60))/60);
    let h = Math.floor((seconds%(60*60*24))/(60*60));

    let formattedTime = h.toString().padStart(2,'0');
    formattedTime += ":";
    formattedTime += m.toString().padStart(2,'0');
    formattedTime += ":";
    formattedTime += s.toString().padStart(2,'0');

    return formattedTime;
}