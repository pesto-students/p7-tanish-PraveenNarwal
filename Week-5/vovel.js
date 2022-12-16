function isVowel(char) {
    
    return "aeiou".includes(char);
    
}
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar) + 1);
            }else{
                vowelMap.set(lowerCaseChar, 1);

            }
        }
    }
    return vowelMap;
}

const a = vowelCount("Parveen Narwal");

  for(const x of a.entries()){
    console.log(x)
  }
  // output ----------------------------
  // [ 'a', 3 ]
  // [ 'e', 2 ]
