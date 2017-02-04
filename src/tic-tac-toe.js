class TicTacToe {
    constructor() {
        this._x = 'x';
        this._o = 'o';
        this._field = [];
        for(var i = 0; i < 3; i++) {
            this._field[i] = [];
            for (var j = 0; j < 3; j++) {
                this._field[i][j] = null;
            }
        }
        this._winner = null;
        this._current = this._x;
    }

    getCurrentPlayerSymbol() {
        return this._current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this._field[rowIndex][columnIndex] === null) {
            this._field[rowIndex][columnIndex] = this._current;
            if (this._current === this._x) {
                this._current = this._o;
            } else {
                this._current = this._x
            }
        }
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) {
            return true;
        };

        return false;
    }

    getWinner() {
        if ((this._field[0][0] == this._x && this._field[0][1] == this._x && this._field[0][2] == this._x) ||
            (this._field[1][0] == this._x && this._field[1][1] == this._x && this._field[1][2] == this._x) ||
            (this._field[2][0] == this._x && this._field[2][1] == this._x && this._field[2][2] == this._x) ||
            (this._field[0][0] == this._x && this._field[1][0] == this._x && this._field[2][0] == this._x) ||
            (this._field[0][1] == this._x && this._field[1][1] == this._x && this._field[2][1] == this._x) ||
            (this._field[0][2] == this._x && this._field[1][2] == this._x && this._field[2][2] == this._x) ||
            (this._field[0][0] == this._x && this._field[1][1] == this._x && this._field[2][2] == this._x) ||
            (this._field[0][2] == this._x && this._field[1][1] == this._x && this._field[2][0] == this._x)) {
            this._winner = this._x;
        };
        if ((this._field[0][0] == this._o && this._field[0][1] == this._o && this._field[0][2] == this._o) ||
            (this._field[1][0] == this._o && this._field[1][1] == this._o && this._field[1][2] == this._o) ||
            (this._field[2][0] == this._o && this._field[2][1] == this._o && this._field[2][2] == this._o) ||
            (this._field[0][0] == this._o && this._field[1][0] == this._o && this._field[2][0] == this._o) ||
            (this._field[0][1] == this._o && this._field[1][1] == this._o && this._field[2][1] == this._o) ||
            (this._field[0][2] == this._o && this._field[1][2] == this._o && this._field[2][2] == this._o) ||
            (this._field[0][0] == this._o && this._field[1][1] == this._o && this._field[2][2] == this._o) ||
            (this._field[0][2] == this._o && this._field[1][1] == this._o && this._field[2][0] == this._o)) {
            this._winner = this._o;
        };
        return this._winner;
    }

    noMoreTurns() {
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if (this._field[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this._field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;