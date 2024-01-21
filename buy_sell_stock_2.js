//Ques: 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

var maxProfit = function(prices) {
    // check if left value is less than current value then purchase otherwise iterate
    let profit = 0;
    for(let i=1; i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            profit += prices[i]-prices[i-1];
        }
    }
    return profit;
};

// reference: https://www.youtube.com/watch?v=Q7v239y-Tik
