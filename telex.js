const input = "hfdawhwhcoomdd";

function counter(input) {
 const tiengviet = ['aw', 'aa', 'dd', 'ee', 'oo', 'ow', 'w']
 let count = 0
 let i =0    
 if ( tiengviet.includes("w")) {
        count+=1
    }
 while (i < input.length) {
const hehe = input.slice(i, i+2)
    console.log(hehe);

    if(tiengviet.includes(hehe)){
        count+=1
    }
    i+=1
 }
 console.log(count);
}
counter(input)