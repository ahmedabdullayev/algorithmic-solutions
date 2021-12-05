<?php
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Float
     */
    function findMedianSortedArrays($nums1, $nums2) {
        $mergedArr = array_merge($nums1, $nums2);
        sort($mergedArr);
        $count = count($mergedArr);
        if($count % 2 == 1){
            return floatval($mergedArr[$count/2]);
        }else{
            return floatval(($mergedArr[($count/2) - 1] + $mergedArr[$count/2]) / 2);
        }
    }
}