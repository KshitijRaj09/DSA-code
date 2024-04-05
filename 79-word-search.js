// Ques 79. Word Search
// https://leetcode.com/problems/word-search/description/?envType=daily-question&envId=2024-04-03

var exist = function (board, word) {
    const rows = board.length - 1;
    const columns = board[0].length - 1;

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= columns; j++) {
            if (board[i][j] === word[0]) {
                if (searchNextWord(board, word, 0, i, j)) {
                    return true;
                }
            }
        }
    }
    return false;
};

function searchNextWord(board, word, index, i, j) {
    if (index === word.length) return true;
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1 || word[index] !== board[i][j]) {
        return false;
    }
    let temp = board[i][j];
    board[i][j] = '#';
    if(searchNextWord(board, word, index + 1, i + 1, j))
        return true;
    else if(searchNextWord(board, word, index + 1, i - 1, j)){
        return true;
    }
    else if (searchNextWord(board, word, index + 1, i, j + 1)){
        return true;
    }
    else if(searchNextWord(board, word, index + 1, i, j - 1)){
        return true;
    }

    board[i][j] = temp;
    return false;
}