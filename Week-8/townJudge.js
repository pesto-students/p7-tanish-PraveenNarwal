
 var findJudge = function(n, trust) {
    let trustCount = new Array(n+1).fill(0);
    let trustedBy = new Array(n+1).fill(0);

    for(let [a,b] of trust){
        trustCount[a]++;
        trustedBy[b]++;
    }

    for(let i= 1; i<=n; i++){
        if(trustCount[i] === 0 && trustedBy[i] === n-1){
            return i;
        }
    }
    return -1;    
};

// Time complexity: O(n)

// Space complexity: O(n)