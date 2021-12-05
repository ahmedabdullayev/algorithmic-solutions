<?php
function lengthOfLongestSubstring($s) {
    $maxString = ''; // storing maximum current string
    $maxLength = 0;
    for($i = 0; $i < strlen($s); $i++){
        $letter = $s[$i];
        if(strpos($maxString, $letter) === false){ // check if there is not this letter
            $maxString .= $letter;
            $maxLength = max($maxLength, strlen($maxString));
        } else {
            $maxString = substr($maxString, strpos($maxString, $letter) + 1); // cut start
            $maxString .= $letter;
        }
    }
    return $maxLength;
}