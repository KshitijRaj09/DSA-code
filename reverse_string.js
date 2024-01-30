// ques: 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

var reverseWords = function(s) {
    let splitWords = s.trim(' ').split(' ').filter(word=> word !== '' );
    let i=0, j=splitWords.length-1;
    while(i<j){
            let temp = splitWords[i];
            splitWords[i]=splitWords[j];
            splitWords[j]= temp;
            i++, j--;      
    }
    return splitWords.join(' ');
};
