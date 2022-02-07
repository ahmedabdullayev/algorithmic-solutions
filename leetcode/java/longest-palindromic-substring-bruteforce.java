class Solution {
    public String longestPalindrome(String s) {
        String maxStr = "";
        int maxLen = 0;
        for(int i = 0; i < s.length(); i ++){
            for(int j = i; j < s.length(); j++){
                if(checkForPal(s.substring(i, j + 1))){
                    if(j + 1 - i > maxLen){
                        maxLen = j + 1 - i;
                        maxStr = s.substring(i, j + 1);
                    }
                }
            }
        }
        return maxStr;
    }

    public boolean checkForPal(String s){
        for(int i = 0; i< s.length() / 2; i++){
            if(s.charAt(i) != s.charAt(s.length() - i -1)){
                return false;
            }
        }
        return true;
    }


}