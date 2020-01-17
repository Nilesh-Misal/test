// // // require the highlight.js library without languages
// // const hljs = require("highlight.js/lib/highlight.js");
// // // separately require languages
// // // hljs.registerLanguage('html', require('highlight.js/lib/languages/html'));
// // hljs.registerLanguage('javascript', require('D:/generator-ak-2/node_modules/highlight.js/lib/languages/javascript.js'));

// // // hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
// // // highlight with providing the language
// // const highlightedCode = hljs.highlight('javascript', '<script> var a=10</script>').value
// // console.log(highlightedCode)

// const Prism = require('prismjs');

// const code = `var data = 1;`;

// const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

// console.log(html.toString())


var str='hello';
var str1="leo"
var sub=[]
var count=0

for(var i=0;i<str.length;i++){
    for(var j=0;j<str1.length;j++){
        if(str[i]==='leo'){
            count++;
            sub.push(str[j])
        }

    }
    
}
console.log(count)
console.log(sub)