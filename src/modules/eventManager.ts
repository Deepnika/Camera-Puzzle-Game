import Game from "./game";

let SELECTED_PIECE: any = null;

export function addEventListeners(game: Game) {

    let CANVAS = game.canvas
    let PIECES = game.PIECES
    let END_TIME = game.END_TIME

    // Mouse Down Event
    CANVAS.addEventListener("mousedown", (event) => {
        SELECTED_PIECE = getPressedPiece(event, PIECES);
        if (SELECTED_PIECE != null) {
            const index = PIECES.indexOf(SELECTED_PIECE);
            if (index > -1) {
                PIECES.splice(index, 1);
                PIECES.push(SELECTED_PIECE);
            }
            SELECTED_PIECE.offset = {
                x: event.x - SELECTED_PIECE.x,
                y: event.y - SELECTED_PIECE.y
            }
            SELECTED_PIECE.correct = false;
        }
    });

    // Touch Start Event
    CANVAS.addEventListener("touchstart", (event) => {
        let loc = {x: event.touches[0].clientX,
                   y: event.touches[0].clientY};

        SELECTED_PIECE = getPressedPiece(loc, PIECES);
        // console.log(SELECTED_PIECE)
        if (SELECTED_PIECE != null) {
            const index = PIECES.indexOf(SELECTED_PIECE);
            if (index > -1) {
                PIECES.splice(index, 1);
                PIECES.push(SELECTED_PIECE);
            }
            SELECTED_PIECE.offset = {
                x: loc.x - SELECTED_PIECE.x,
                y: loc.y - SELECTED_PIECE.y
            }
            SELECTED_PIECE.correct = false;
        }
    });


    // Mouse Move Event
    CANVAS.addEventListener("mousemove", (event) => {
        console.log(SELECTED_PIECE)
        if (SELECTED_PIECE != null) {
            console.log(SELECTED_PIECE)
            SELECTED_PIECE.x = event.x - SELECTED_PIECE.offset.x;
            SELECTED_PIECE.y = event.y - SELECTED_PIECE.offset.y;
        }
    });

    // Touch Move Event
    CANVAS.addEventListener("touchmove", (event) => {
        let loc = {x: event.touches[0].clientX,
                   y: event.touches[0].clientY};
        if (SELECTED_PIECE != null) {
            SELECTED_PIECE.x = loc.x - SELECTED_PIECE.offset.x;
            SELECTED_PIECE.y = loc.y - SELECTED_PIECE.offset.y;
        }
    });

    // Mouse Up Event 
    CANVAS.addEventListener("mouseup", () => {
        if (SELECTED_PIECE.isClose()) {
            SELECTED_PIECE.snap();
            if (isComplete(PIECES) && END_TIME == null) {
                game.end();
            }
        }
        SELECTED_PIECE = null;
    });
    
    // Touch End Event
    CANVAS.addEventListener("touchend", () => {
        if (SELECTED_PIECE.isClose()) {
            SELECTED_PIECE.snap();
            if (isComplete(PIECES) && END_TIME == null) {
                game.end()
            }
        }
        SELECTED_PIECE = null;
    });
}


function getPressedPiece(loc: { x: number; y: number; }, PIECES: any[]) {
    for (let i=PIECES.length-1; i>=0; i--) {
        if (loc.x > PIECES[i].x && loc.x < PIECES[i].x + PIECES[i].width &&
            loc.y > PIECES[i].y && loc.y < PIECES[i].y + PIECES[i].height) {
                return PIECES[i];
            }
    }
    return null;
}

function isComplete(PIECES: any[]) {
    for (let i=0; i<PIECES.length; i++) {
        if (PIECES[i].correct == false) {
            return false;
        }
    }
    return true;
}