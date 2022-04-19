/* Write a program to build a `Pyramid of stars` of given height */

 const buildPyramid = (n) => {
     // Write your code here 
     var str = '';
     for(var i=1; i<=n; i++)
     {
          for(var k=1; k <= (n-i) ; k++){
               str += ' ';
               }
          for(var j=1; j<=i; j++){
                    str +=' *';
               }str += " \n";
          } 
     return str;
 };

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
