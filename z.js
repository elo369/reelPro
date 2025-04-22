
function debounce(func,delay){
    let timer 

    return function(...args){
        clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(this,args)
        }, delay);
    }
}

function get(op){
    console.log("ok",op)
}

const debouncehold = debounce(get,3000)

debouncehold("r")
debouncehold("ro")
debouncehold("rohit")

function flatterArr(arr){
    let result = []

    flatter(arr)
    function flatter(element) {
        if (Array.isArray(element)) {
            console.log("element",element)
            for (const item of element) {
                console.log("item",item)
                flatter(item)
            }
        }else{
            result.push(element)
        }
    }


    return result
}

const input = [1, [2, [3,[34,56,78], 4], 5], 6];

const output = flatterArr(input)

console.log(output)