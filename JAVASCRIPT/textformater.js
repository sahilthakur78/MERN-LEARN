const textformater=(str1,str2)=>{
      let uppercase=str1.toUpperCase();
      let lowercase=str2.toLowerCase();
      let combine = str1.concat(" ").concat(str2);
      return combine;
}
console.log(textformater("hello","world"));