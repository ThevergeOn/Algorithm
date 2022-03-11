/* 

###############################
##### The TeneT-Challenge #####
###############################

#Palindromes are strings that read the same from the left or right, for example madam or 0110.
#You will be given a string representation of a number and a maximum number of changes you can make. Alter the #string, one digit at a time, to create the string representation of the largest number possible given the limit #to the number of changes. A change hereby means replacing an one of the characters by an arbitrary digit. The #length of the string must not be altered, so you must consider 0’s left of all higher digits in your tests. For #example 0110 is valid, 0011 is not.
#Given a string representing the starting number and a maximum number of changes allowed, create the largest #palindromic string of digits possible or the string -1 if it's impossible to create a palindrome under the #contstraints.####


# #Function Description
# #Complete the do_tenet function in the editor. It should return a string representing the largest #value palindrome achievable, or -1.
# #do_tenet has the following parameter(s):
# #* s: a string representation of an integer
# #* n: an integer that represents the length of the integer string
# #* k: an integer that represents the maximum number of changes allowed

# Input Format
# The first line contains two space-separated integers,n and k, the number of digits in the number and the maximum number of changes allowed. 
# The second line contains an n-digit string of numbers.


# Constraints
# * 0<n<=10^5
# * 0<=k<=10^5
# * Each character i in the number is an integer where 0<=i<=9

# Output Format
# Print a single line with the largest number that can be made by changing no more than digits. If this is not possible, print -1.


# Examples

# Sample Input 0
# n=4 k=1   
# s=3943
# Sample Output 0
# 3993


# Sample Input 1
# n=6 k=3
# s=092282
# Sample Output 1
# 992299


# Sample Input 2
# n=4 k=1
# s=0011
# Sample Output 2
# -1

*/

function do_tenet(s, k, n) {  
  if ( s != null && s != undefined) {
     let even = s.length % 2 == 0;
     let mid;
     let midChar;
     let arr1;
     if (even) {
       mid = s.length / 2;
       arr1 = s.substr(0,mid).split('');
     } else {
       midChar = s.charAt(Math.floor(s.length / 2));
       mid = Math.ceil(s.length / 2)
       arr1 = s.substr(0,mid -1 ).split('');
     }
     let arr2 = s.substr(mid,s.length -1).split('');
     let misMatchCount = 0;
     let secondIndex = arr2.length -1;
     let currentLeft;
     let currentRight;
     for(var i = 0; i < arr1.length; i++) {
        currentLeft = arr1[i];
        currentRight = arr2[secondIndex];
        if (currentLeft !=  currentRight) {
          misMatchCount++
          arr1[i] = 9;
          arr2[secondIndex] = 9;
        }
        secondIndex--;
        if (misMatchCount > k) {
           return -1;
        }
     }
     let result;
     result = arr1.join('');
     if (!even) {
       result += midChar
     }
     result += arr2.join('');
     return result;
  }
}
const cases = [
 {'s': '3943', 'k': 1, 'n': 4, 'result': '3993'},
 {'s': '3993', 'k': 0, 'n': 4, 'result': '3993'},
 {'s': '092282', 'k': 3, 'n': 6, 'result': '992299'},
 {'s': '0011', 'k': 1, 'n': 4, 'result': '-1'}
]


function test(testCase){
    let result = do_tenet(testCase.s, testCase.k, testCase.n)
    console.log(result == testCase.result,"Test failed. Your result: " + result + ", Real result: " + testCase.result);
}

cases.forEach(test);
