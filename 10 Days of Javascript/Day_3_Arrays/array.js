function getSecondLargest(nums) {
    // Complete the function
    let first = nums[0];
    let second = -1;
    for(let i=0;i<nums.length; i++){
        if(nums[i] > first){
            second = first;
            first = nums[i]
        }
        
        if(nums[i] > second && nums[i] < first ){
            second = nums[i];
        }
    }
    
    return second;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}