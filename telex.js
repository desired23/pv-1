const input = "hfdawhwhcoomdd";

function counter(input) {
 const tiengviet = new Set(['aw', 'aa', 'dd', 'ee', 'oo', 'ow', 'w']);
 let count = 0
 let i =0    
 if ( tiengviet.has("w")) {
        count+=1
    }
 while (i < input.length) {
    if(tiengviet.has(input.slice(i, i+2))){
        count+=1
        i+=2
    }else i+=1
 }
 console.log(count);
}
counter(input)