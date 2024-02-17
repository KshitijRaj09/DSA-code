//Ques : https://leetcode.com/problems/furthest-building-you-can-reach/description/
// 1642. Furthest Building You Can Reach

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    const heap = new PriorityQueue({compare:(a,b)=>{
        return a-b
    }})

    let prevHeight = heights[0]
    let sum = 0

    for(let i=1;i<heights.length;i++){

        const height = heights[i]

        const diff = height-prevHeight

        if(diff>0){
            heap.enqueue(diff)
        }
        
        if(heap.size()>ladders){
            sum+=heap.dequeue()
        }

        if(sum>bricks){
            return i-1
        }

        prevHeight = height
    }

    return heights.length-1
}

// bricks = 4 ,
// ladders = 1, o/p = 5
// [1,5,1,2,3,4,10000] => [4,0,1,1,1,9996]

// b5 l1
// [4,2,7,6,9,14,12] => [0,5,0,3,5,0]

// b10 l2
// [4,12,2,7,3,18,20,3,19] => [8,0,5,0,15,2,0,16]
