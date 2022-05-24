const palindromes = function (str) {
  let forwards = [...str.toLowerCase()]
  let forwardsLetters = forwards.filter((item)=>{
    let ascii = item.charCodeAt()
    return ascii >= 97 && ascii <= 122})
  let backwards = forwardsLetters.slice().reverse()
  return forwardsLetters.toString() == backwards.toString()
};


// Do not edit below this line
module.exports = palindromes;
