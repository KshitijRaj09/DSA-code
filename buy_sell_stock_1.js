//Ques : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
// Buy and sell stock - 1

var maxProfit = function(prices) {
    let maxProfit=0;
    let minPrice = prices[0];
    for(let i=0; i< prices.length;i++){
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i]-minPrice);
    }
    return maxProfit;
};

/* reference : Store the minPrice in variable, iterate and compare with maxProfit. */
