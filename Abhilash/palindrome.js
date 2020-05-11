function palindrome(str){

var res = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');

var reversed = res.split('').reverse().join('');
    if (reversed ===res) return console.log('Its a Palindrome')
    console.log('Its not Palindrome')

}

palindrome("aba")
