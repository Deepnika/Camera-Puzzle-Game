let keys = {
    DO: 261.6,
    RE: 293.7,
    MI: 329.6
}

export function playMelody() {
    playNote(keys.MI, 300);
    setTimeout(function() {
        playNote(keys.DO, 300);
    }, 300);
    setTimeout(function() {
        playNote(keys.RE, 150);
    }, 450);
    setTimeout(function() {
        playNote(keys.MI, 600);
    }, 600);
}

function playNote(key: number, duration: number) {
    let AUDIO_CONTEXT = new (AudioContext)();
    let osc = AUDIO_CONTEXT.createOscillator();
    osc.frequency.value = key;
    osc.start(AUDIO_CONTEXT.currentTime);
    osc.stop(AUDIO_CONTEXT.currentTime + duration/1000);
    
    let envelope = AUDIO_CONTEXT.createGain();
    osc.connect(envelope);
    osc.type = 'triangle';
    envelope.connect(AUDIO_CONTEXT.destination);
    envelope.gain.setValueAtTime(0, AUDIO_CONTEXT.currentTime);
    envelope.gain.linearRampToValueAtTime(0.5, AUDIO_CONTEXT.currentTime + 0.1);
    envelope.gain.linearRampToValueAtTime(0, AUDIO_CONTEXT.currentTime + duration/1000);

    setTimeout(function() {
        osc.disconnect();
    }, duration);
}