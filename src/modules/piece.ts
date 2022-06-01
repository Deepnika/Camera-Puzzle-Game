let POP_SOUND = new Audio("./../media/pop.mp3");
POP_SOUND.volume = 0.2;

class Piece {
    video: HTMLVideoElement;
    rowIndex: number;
    columnIndex: number;
    width: number;
    height: number;
    x: number;
    y: number;
    rows: number;
    columns: number;
    xCorrect: number;
    yCorrect: number;
    correct: boolean;

    constructor(rowIndex: number, columnIndex: number, 
                SIZE: { x: number, y: number, width: number, height: number, rows: number, columns: number }, 
                VIDEO: HTMLVideoElement ) {
        this.video = VIDEO
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.width = SIZE.width/SIZE.columns;
        this.height = SIZE.height/SIZE.rows;
        this.rows = SIZE.rows;
        this.columns = SIZE.columns;
        this.x = SIZE.x + this.columnIndex*this.width;
        this.y = SIZE.y + this.rowIndex*this.height;
        this.xCorrect = this.x;
        this.yCorrect = this.y;
        this.correct = true;
    }

    draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.drawImage(this.video, 
            this.columnIndex * this.video.videoWidth / this.columns, 
            this.rowIndex * this.video.videoHeight / this.rows,
            this.video.videoWidth / this.columns, 
            this.video.videoHeight / this.rows,
            this.x,
            this.y,
            this.width,
            this.height);
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
    }

    isClose() {
        let dist = distance({x: this.x, y: this.y}, 
            {x: this.xCorrect, y: this.yCorrect})
        if (dist < this.width/3) {
            return true;
        }
        return false;
    }

    snap() {
        this.x = this.xCorrect;
        this.y = this.yCorrect;
        this.correct = true;
        POP_SOUND.play();
    }
}

function distance(p1: { x: number; y: number; }, p2: { x: number; y: number; }) {
    let xlen = p1.x - p2.x;
    let ylen = p1.y - p2.y;
    let dist = Math.sqrt(xlen*xlen + ylen*ylen);
    return dist;
}

export function initializePieces(SIZE: { x: number, y: number, width: number, height: number, rows: number, columns: number },
                                 VIDEO: HTMLVideoElement) {
    let PIECES = [];
    for (let i=0; i < SIZE.rows; i++) {
        for (let j=0; j < SIZE.columns; j++) {
            PIECES.push(new Piece(i, j, SIZE, VIDEO));
        }
    }

    // let count = 0;
    // for (let i=0; i<GRID.rows; i++) {
    //     for (let j=0; j<GRID.columns; j++) {
    //         const piece = PIECES[count];

    //         if (i == GRID.rows-1) {
    //             piece.bottom = null;
    //         }  
    //         else {
    //             let sign = (Math.random() - 0.5) < 0 ? -1 : 1;
    //             piece.bottom = sign * (0.3 + Math.random()*0.4);
    //         }

    //         if (j == SIZE.columns-1) {
    //             piece.right = null;
    //         } 
    //         else {
    //             let sign = (Math.random() - 0.5) < 0 ? -1 : 1;
    //             piece.right = sign * (0.3 + Math.random()*0.4);
    //         }

    //         if (j == 0) {
    //             piece.left = null;
    //         } 
    //         else {
    //             piece.left = -PIECES[count - 1].right;
    //         }

    //         if (i == 0) {
    //             piece.top = null;
    //         } 
    //         else {
    //             piece.top = -PIECES[count - SIZE.columns].bottom;
    //         }

    //         count++;
    //     }
    // }

    return PIECES;
}

export function randomizePieces(PIECES: any, CANVAS: HTMLCanvasElement) {
    for (let i=0; i < PIECES.length; i++) {
        let loc = {
            x: Math.random() * (CANVAS.width - PIECES[i].width),
            y: Math.random() * (CANVAS.height - PIECES[i].height)
        };
        PIECES[i].x = loc.x;
        PIECES[i].y = loc.y;
        PIECES[i].correct = false;
    }
}