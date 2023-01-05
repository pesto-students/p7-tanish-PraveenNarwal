var maxProfit = function(prices) {
    let maxProfit = 0
    let lowest = prices[0]

    for(let i = 1; i < prices.length; i++) {
        const curr = prices[i]
        
        lowest = Math.min(curr, lowest)
        maxProfit = Math.max(maxProfit, curr - lowest)
    }

    return maxProfit
};

console.log(maxProfit([7,1,5,3,6,4]))

// TC O(n)
// SC O(c)