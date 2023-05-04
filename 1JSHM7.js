let lang = "ukrainian";
let ua = "ukrainian";
let en = "english";
let fr = "franch";

switch (lang){
    case fr:
        lang = "franch";
        break;
    case en:
        lang = "english";
    case ua:
        lang = "ukrainian";
        break;
    default:
        lang = "we dont know your language :("
}
console.log(lang);