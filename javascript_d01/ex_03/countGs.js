function countGs(str)
{
    var count=0,len=str.length;
    for(var i=0;i<len;i++) {
      if(/[G]/.test(str.charAt(i))) count++;
    }
    return count;
}


// console.log(countGs("abcgGggGeaGfdsGG"));