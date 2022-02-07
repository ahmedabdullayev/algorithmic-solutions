class Solution {
    public String longestPalindrome(String s) {
        int start = 0, end = 0;
        for(int i = 0; i < s.length(); i++){
            int odd = expand(s, i, i);
            int even = expand(s,i, i + 1);
            
            int len = Math.max(odd, even);
            System.out.println("odd: " + odd + " even: " + even);
            System.out.println("len: " + len);
            System.out.println(start);
            System.out.println(end);

            if(len > end - start){
                System.out.println("Len is more!");
                start = i - (len - 1) / 2;            
                end = i + len / 2;
                System.out.println("in len(start: " + start + " end: " + end);
            }
            System.out.println(s.substring(start, end + 1));
                            System.out.println("i: " + i);

        System.out.println("------------------");
        }
        return s.substring(start, end + 1);
    }
    
    int expand(String s, int left, int right){
        while(left >= 0 && right <s.length() && s.charAt(left) == s.charAt(right)){
            /// i = 1 then a = a , left -- , right ++, then b == b (left = right)
            System.out.println(s.charAt(right));
            left --;
            right ++;
        }
        int calc = right - left - 1;
        System.out.println("calc: " + calc +" l: " + left + " r: " +right);

        return right - left - 1;
    }
}