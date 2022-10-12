<?php
function twoSum($nums, $target) {
    $seen = array();
    for($i = 0; $i < sizeof($nums); $i++){
        $firstNum = $nums[$i];
        $secondNum = $target - $firstNum;
        if(array_key_exists($secondNum, $seen)){
            return [$seen[$secondNum], $i];
        }
        $seen[$firstNum] = $i;
    }
    return [0, 0];
}

$a = twoSum([2,7,11,15], 9);

print_r($a);