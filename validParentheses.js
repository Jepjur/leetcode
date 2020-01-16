/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']'
 * determine if the input string is valid.
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    
    const openers = ['{', '[', '(']
    const closers = ['}', ']', ')']
    
    let openersTracker = []
    
    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(openers.includes(char)){
            openersTracker.push(char)
        } else if(closers.includes(char)){
            if(!openersTracker.length){
                return false
            }
            let lastOpener = openersTracker.pop()
            if(pairs[lastOpener] !== char){
                return false
            }
        }
    }
    return openersTracker.length === 0
};