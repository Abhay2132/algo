function findMaxCrossingSubArr (A, low, mid, high){
    let left_sum = - Infinity;
    let sum = 0;
    let max_left = mid;

    for(let i=mid; i>=low; i--){
        sum = sum + A[i];
        if(sum > left_sum){
            left_sum = sum;
            max_left = i;
        }
    }

    let right_sum = - Infinity;
    let _sum = 0;
    let max_right = mid;
    for(let j=mid+1; j<= high; j++){
        _sum += A[j];
        if(_sum > right_sum){
            right_sum = _sum;
            max_right = j;
        }
    }

    return [max_left, max_right, left_sum + right_sum];
}

function findMaxSubArr(A, low, high){
    if(high == low){
        return [low, high, A[low]]
    } else {
        let mid = Math.floor((low + high) /2 );
        let [left_low, left_high, left_sum] = findMaxSubArr(A, low, mid);
        let [right_low, right_high, right_sum] = findMaxSubArr(A, mid+1, high);
        let [cross_low, cross_high, cross_sum] = findMaxCrossingSubArr(A, low, mid, high);
        
        if(left_sum >= right_sum && left_sum >= cross_sum){
            return [left_low, left_high, left_sum];
        }
        if(right_sum >= left_sum && right_sum >= cross_sum){
            return [right_low, right_high, right_sum]
        }
        return [cross_low, cross_high, cross_sum]
    }
}

const arr = [1,-2,3,4,-5,23, -3,-12]

console.log(arr)
console.log(findMaxSubArr(arr, 0, arr.length-1));