var isPalindrome = function(s) {
        let lower = s.toLowerCase()
        let regex = /[a-z0-9]/g;
        let arr = lower.match(regex);
        let str;
        if (arr){
            str = arr.join("");
        }
        else{
            return true;
        }

        for (let i=0; i  < str.length / 2; i++){
            let leftChar = str[i];
            let rightChar = str[str.length - i - 1];
            if (leftChar !== rightChar){
                return false
            }
        }
        return true;
};