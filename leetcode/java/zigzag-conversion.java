class Solution {
    public String convert(String s, int numRows) {
        int length = s.length();
        if(numRows > length || numRows <= 1){
            return s;
        }
        StringBuilder res = new StringBuilder("");

        int interval = 2 * numRows - 2;
        for(int r = 0; r < numRows; r ++){
            for(int i = r; i < length; i += interval){
                res.append(s.charAt(i));
                    if(r > 0 && r < numRows - 1 && i + interval - 2 * r < length){
                        res.append(s.charAt(i + interval - 2 * r));
                    }
            }
        }

        return res.toString();
    }
}