
/*Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given a string s and an integer k, break up the string into multiple lines 
such that each line has a length of k or less. You must break it up so that 
words don't break across lines. Each line has to have the maximum possible amount of words. 
If there's no way to break the text up, then return null.
You can assume that there are no spaces at the ends of the string and that there is 
exactly one space between each word.

For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, 
you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. 
No string in the list has a length of more than 10.
*/

function getString(){

    var phrase = window.prompt("Enter a string : ")
    var num = window.prompt("Enter an integer to split : ")
    content = phrase.split(' ')
    length = Number(num)
    new_Array = []
    
    document.writeln("<p>" + phrase + "</p>")
    document.writeln("<p>" + content + "</p>")
    for (var i in content) {
        if (content[i].length == length || content[i].length <= length){
            new_Array.push(content[i])
            new_Array.push(' ')
        }
        
    }
   
    document.writeln("<p>" + new_Array[i] + "</p>")

}