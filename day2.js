//day 2 code of advent

function getValue() {
  console.time('DayTwo');
  var checkSum = 0;
  var twoChars = 0;
  var threeChars = 0;

  var idList = ["qywzphxoiseldjrbaoagvkmanu","qywzphxeisulpjrbtfcgvkmanu","qywzxhooiseldjrbtfcgvcmanu","qywzphjojseldjubtfcgvkmanu","qtwzphxoieeldjrbtfcgvrmanu","tywzphzoiseldjritfcgvkmanu","qyuzphxoiseldjrbtfcgykbanu","qswzmhxoiseldjrbtfcgvkaanu","qyczqhxoiseldjrbtfcgvkbanu","qybzpqxooseldjrbtfcgvkmanu","qywzpoxoxseldjrbtfcgvpmanu","qywzphxbipeldjrbtfcgvkmaru","qywzpmxoiseldjrutqcgvkmanu","qywzphxoisesdjrrtfchvkmanu","qywzphxoiseldhrbtfcgukyanu","jywzphyoiseldjrbtfclvkmanu","qywzvhxoiselrjrbtfcgvkmanl","qywzplxojseldjrbtfcgvkmamu","qywzphxoiseldjrbtacgvkmvnd","qywpphxoiseldjrbtfcgvkvenu","qqazphxoiselqjrbtfcgvkmanu","qyozvhxoiseldjrbtfcgvkmadu","xywzphxliseldjhbtfcgvkmanu","qdwzphioiseldqrbtfcgvkmanu","qswyphxoiseldjrbtfcgvkmanx","qowzshxoiseldjrbtfigvkmanu","qywzphxoiseldjjbtfcgvkmawq","qyhzphxoiseldjrbtfvgvkmynu","qxwzphxoiselmjrbtfcgvqmanu","qywzphxoiceldjrbtfcgikmgnu","qywephxoiseldjrbthcgvkmane","yywzphxoisejdjrotfcgvkmanu","qywzxhxoisyldyrbtfcgvkmanu","qywzpjxoiseqdjrbtfcgvwmanu","qywzphxoqweldprbtfcgvkmanu","qywzphnoiseldjrbtfcamkmanu","qylgphxoiseldjrbtfcgvkmauu","qysdphxomseldjrbtfcgvkmanu","lywzpoxoikeldjrbtfcgvkmanu","qywzphxgiseldjrbtfeqvkmanu","qywzdhxozseldjcbtfcgvkmanu","qywzphxeiskedjrbtfcgvkmanu","qmwzphxoispldjrbtfcgvkmany","qywzphxoiselzcrbtfcgvkmanz","qywzphxoisxodjrbtscgvkmanu","qywzphxoiseldjrrtfcgmkmaeu","aywzphxoiseldjrbtfmjvkmanu","qywzthxoiiewdjrbtfcgvkmanu","qywzpsxoisrzdjrbtfcgvkmanu","qywzphxoiseldjkbtqcgvkmank","tywzphxoisewdjkbtfcgvkmanu","qywkchxoiseldjrbtfcghkmanu","qywzphxoiseldjoftfrgvkmanu","qywzpixoisehdjrbtfcgvkmacu","qywzchooiseldarbtfcgvkmanu","qywyphtoaseldjrbtfcgvkmanu","qywyphxotsbldjrbtfcgvkmanu","qywzphxoiseldjrbhsggvkmanu","dywzphxoiseldjrktfegvkmanu","qywzphxoiseldjrmtfcgvkcenu","qywcphxjiseldjybtfcgvkmanu","qywzphxoiseldhrbsfogvkmanu","qmwzpheoiseldjrrtfcgvkmanu","qywzrhxoiselpjrbtfcgvemanu","qyezphpoiseldjrbtfcgvdmanu","qywzphxvisewdjrbtfcgvkmdnu","qywzphkoiseldjrbtfcgvkmdnh","qywzehxoiseldfrbtpcgvkmanu","qywzphxoiseldjrrtfcgvrdanu","qpwzphxoizeldjqbtfcgvkmanu","qywzphxojseldjrbtmcgvkmvnu","vywzphxoiseldjrbtfcgvkmaop","sywzphxoiselbjrttfcgvkmanu","qywwphkoiseldjrbtfcivkmanu","qlwkpcxoiseldjrbtfcgvkmanu","qywzphxoiyesdjrbtfcgvkmvnu","qywzphxoiseldjrbofcgrkmrnu","qywzphxyiseldjrstfcgvkmjnu","qywzphaoiseldtrbnfcgvkmanu","qywzphxhisuldurbtfcgvkmanu","qywzphxdiseldjrbtvugvkmanu","qywzpzxbiseldjrbtfcgukmanu","qyrzphxoixeldjrbtfcgvumanu","qywzphxoiberdjrptfcgvkmanu","qywzphxfiskldjrbtfcgvkmdnu","qyxzphxoiseldjrdhfcgvkmanu","qywzphrqiseldjrbtfcgvbmanu","qyezphxviseldjrbtfcgvkmani","qywgphxoiseldgkbtfcgvkmanu","qywzphxoileldjrbtgcgvkdanu","qywzphxoiseldnrbtfcwvkmpnu","qywzphxoiseidjrbmfcqvkmanu","qywzpkxoiselijrbtfcgvlmanu","mywzphxoiveldjrbtfcgvkmunu","qywzphxooseddjrbtfcgpkmanu","qywzphxokseldjritfcyvkmanu","qywzxhxoiseldjrbtfqgvcmanu","qywzphxoisfldjrbpfcgvkmaju","qywuphxgiseldjrbffcgvkmanu","qywzphociseldjrbtfcgvkuanu","qywzphxoiseldvrbtftgckmanu","qywzpbxoisrldjrbtfngvkmanu","qywzphxoiseldjrntfygvdmanu","qywzphxviseldkrbtfcgvkianu","qywpphxgiseldjrbtfctvkmanu","qywzphxoicewdjrbtfcgvsmanu","qywzpcxoiseldjmbtfcgvcmanu","qrwzphxoiseldjrbtfcgjumanu","qywzphxoiselojrbtfcgxkmaau","qywzphxojsbldjrbtfcgykmanu","oywzphxoiseldjrbtfqgvkmvnu","qywfphxpiseldjrbtfckvkmanu","qyyzwhxwiseldjrbtfcgvkmanu","qywzphxgiseldjrbtfchvkmabu","qywzphxfiseldjrbtfcgukoanu","qywzpdxoisyldjrbtfcgvkxanu","dyuzphxoiseldjrbtfcgvkmamu","qywzphxoiseldjrbifcgvkmnnp","qywzpyxoiseldjrbtfcgvklano","dywzphxoiieldjrbtfcgvwmanu","qywzphxoihemdjrbtfcgvdmanu","gywzphxoxseldvrbtfcgvkmanu","qywzqhxoissldjwbtfcgvkmanu","eywzphxoiieldjrbtfcgekmanu","qyizprxciseldjrbtfcgvkmanu","qywjphxoiseldjrbtfcgckmano","qywznhxoiseldjrbrfcgvkmagu","qywzphxoisrldjdbvfcgvkmanu","qyyxphxoiseldjrbtwcgvkmanu","qywzphxoiseldjdbtfcpvkmjnu","qywzvhxqiseldjrbofcgvkmanu","vywzphxoiseldjrbtfcgckwanu","qywzphgbiseldjrbtfcgvkmazu","qcwzphxoiseldjrbqfcgvkmdnu","qywzphxoismldjrbtfcgkkmznu","qywhphxoiseldjrbtccgvkmane","qywzphzoiseldjrbtfcgvqmauu","hywzphxoiseldjrbtfcuvkmanc","qywzphxozsejdgrbtfcgvkmanu","qyszphxoiseldjrntfygvdmanu","qywzphxoisgldjrbtfcgvklaru","qywzhhxoiseldjrbtscgvkmqnu","qywjphxpiqeldjrbtfcgvkmanu","qywzphxoiseldxrptfclvkmanu","qywlphxoisehdjrbtfcgvkmanc","qydzpfxoiseldjrwtfcgvkmanu","qywzphxoiseldjrbtxcgqkfanu","qywophxoiselfjrbtfcgvkmani","qywzyhxoiszldtrbtfcgvkmanu","qywzphxoxseldfrntfcgvkmanu","qywzphloiseldjqbtfcgvkmtnu","qywzpuxoiseldorbtfcgvkeanu","qywzphxoiueldjrwdfcgvkmanu","qgwzphxoiseldjmbtncgvkmanu","qywzphtggseldjrbtfcgvkmanu","qywzphxoisrldjrbtfmgvhmanu","qfszphxoiseldjqbtfcgvkmanu","qywzphxpisjldjrbxfcgvkmanu","qywznhxoisepdjrbtfqgvkmanu","qywzphioiseldjabtfcgxkmanu","qyizphxaiseldjrbtfcgvkmaxu","xywzphxoiqelvjrbtfcgvkmanu","quwzphxoiseldjretfcgvkmaau","bywzphxoiseldjrbtucgckmanu","jywzphxoiseldjrbofcgvkmani","qywzphxoiseltjkbtfcgvkmabu","eywzphxoiselgjrbtfkgvkmanu","qywzphxoisengjrttfcgvkmanu","qywzphzoiseldjrbtfcgvkmknk","quwdphxoiseldjrbtfcxvkmanu","qcwzzhxoiseldjrgtfcgvkmanu","qywgphxdiseldjrbtfcgjkmanu","qywzpdxoivefdjrbtfcgvkmanu","qywzphxoiseldjrbtfdgvjmpnu","qfwzphxoiseydkrbtfcgvkmanu","qywzphxdiqelqjrbtfcgvkmanu","qywzvhxoiseldjrbtfognkmanu","qywzphgoiseldjrbcfcgvtmanu","qywophxoiseldjrbtpcgvkmank","qywzphxoiszldjretfcgvkmabu","qywzphxoiseldjhbtfcgvxmawu","qcgzphxoiselejrbtfcgvkmanu","qywzphxoisepdjrbtfcfvkcanu","qivzphxniseldjrbtfcgvkmanu","qywzhhxoiseldjrftxcgvkmanu","qyazphxciseldjrbtfcgskmanu","qywzphxoisoldgrbtfczvkmanu","qywzmhxoiseldurbwfcgvkmanu","qywzphxoistldjrbwfcgvkranu","qywzphxoistedjrbtfcgokmanu","qywzqhxodsecdjrbtfcgvkmanu","qywzphxtisxldjrbtfcgvkhanu","qywzphxoeseldjrtrfcgvkmanu","qdwzphxoioeldjrbtfigvkmanu","qjwzphxoisbldjrbtfcgvkmanz","qywzphxoiseldbrbtfdgvlmanu","qywzphxoiselddrbhvcgvkmanu","zywzppxoiseldjrdtfcgvkmanu","qywzppxqiselkjrbtfcgvkmanu","qywzphxoihelbjrbtfcgvkmabu","qywzphxoiseldjreyfcgvknanu","qywzphxxrseldjrbtfcgvkmagu","qywhpfxoiseldjrbtfdgvkmanu","qywzphxoisxldjrdtfagvkmanu","oywzphxxiseldjrbtfcgvkmaeu","qywzphxoiselqirbtfvgvkmanu","qywzphxoqseldhrbtfcgvkhanu","qywzphxokseldjrbtfxgvkmaju","qywzphtoiseldurbtfcfvkmanu","qywzphxoiheudjrrtfcgvkmanu","qrwzphxzigeldjrbtfcgvkmanu","qywzphxoiseldorbtfcgvxmvnu","qywzphxoisaldjpbqfcgvkmanu","qywuphxoiselljrbtfchvkmanu","qywzphxoisaldjrbefcgvkmsnu","qywzphxoiteldjrbnfcgvkmanp","qywhphxoiselqjrbtfcgvkmagu","qywzjhxoisejdjrbtfcgvkmanr","qywephaoiseldjrbtfcavkmanu","qywcphxoireldjqbtfcgvkmanu","qywzphxoiseldirbuicgvkmanu","qywzphxoisecvnrbtfcgvkmanu","qcwzphxoiseldjrbtfcgvrmaiu","qywnphxoiseldjrntftgvkmanu","qywzphxhisyldjrbtfcgvkmafu","qyhzphxoiseldjrytfcgvkmanq","vjwzbhxoiseldjrbtfcgvkmanu","qyvzpsxoisuldjrbtfcgvkmanu","qywzphxaiseldcrbefcgvkmanu","qywzphxoiseldjgbtfsgvkfanu","oiwzphxoiseldjrbtfcgvkmcnu","qyezphxoiseldjrbtfcqvkmjnu","tywzphxriseldzrbtfcgvkmanu","yywzphxoiseldjbbtfugvkmanu","qywzpfxviseldjrbttcgvkmanu","qywzphxoiceldcrbtfugvkmanu","qymzphxoiseldjratfcsvkmanu","qywzphxoiselxjrbdfcgvkpanu","qywzphxoiselujrbtfkgvimanu","qywzshyoiseldjrbtfcgpkmanu","qywzphxoiselfjrbtfsgvkmant","qywpphxoiseldjxbtfcyvkmanu","qywzfhxoiselqjrptfcgvkmanu","qewzphxoiseldprbtfcgvkmand","qywfphxoiseldlrbtfcgvkmgnu","qywzphxoiseldjhbtqcovkmanu","fywzphxoiseldlrbtfcgvkjanu","sywzphxoiseldjrbhfccvkmanu","qywzphxoiseldjfbtfcrvkmpnu","sywzphxoisrldjrbtfczvkmanu"];

  var idListIndex = 0;

  while (idListIndex < idList.length){
    //handle each word individually
    var str = idList[idListIndex];

    // A map (in JavaScript, an object) for the character=>count mappings
    var counts = {};
    var ch, index, len, count;
    // These will be set to true for each word that has a double or triple char
    var twoCharBool = false;
    var threeCharBool = false;

    // Loop through the current string
    for (index = 0, len = str.length; index < len; ++index) {
        // Get this character
        ch = str.charAt(index);

        // Get count for char. if we've not seen this char, will be 'undefined'
        count = counts[ch];

        // If 1 is present for char then +=1; if not, now there is 1
        counts[ch] = count ? count + 1 : 1;
    }
    for (ch in counts) {
      if (counts[ch] === 2){
        twoCharBool = true;
      }
      if (counts[ch] === 3){
        threeCharBool = true;
      }
    
   }
   //check our bools and iterate counter as appropriate
   if (twoCharBool === true){
    twoChars += 1;
  }
  if(threeCharBool === true) {
    threeChars += 1;
  }

   idListIndex += 1;
  }
    // calculate answer, log & end timer, display in div.
    checkSum = twoChars * threeChars;
    console.log(checkSum);
    console.timeEnd('DayTwo');

    document.getElementById('answer').innerHTML += " " +checkSum;
}