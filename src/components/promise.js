const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success) resolve("Data fetched successfully!");
            else reject("Error fetching data.");
        }, 1000);
    });
}

fetchData()
.then(data => console.log(data))
.then(error => console.log(error));


// async await:
const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched successfully!"), 1000);
    })
}
async function getData() {
    try{
        const res = await fetchData1();
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
getData()

// debounce: function delay the excution untill a pause in repeated calls
function debounce(fn,delay) {
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

<input type="text" id="search" placeholder="Search..." />
const input = document.getElementById("search");

function handleSearch(e) {
  console.log("Searching for:", e.target.value);
}

const debouncedSearch = debounce(handleSearch, 500);

input.addEventListener("input", debouncedSearch);

const handleResize = () => console.log('resized');
// window.addEventListener('resize', debounce(handleResize, 300));

// throttle: ensure that functins excutesa atleast once for every delay interval
function throttle(fn,delay) {
    let lastCall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

function onScroll() {
    console.log("Scrolling at", new Date().toISOString());
  }
  
  const throttledScroll = throttle(onScroll, 500);
  
//   window.addEventListener("scroll", throttledScroll);
const logScroll = () => console.log('scrollling...');
// window.addEventListener('scroll', throttle(logScroll, 1000));