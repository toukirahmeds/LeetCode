const arr = [100,200, 300,500];
let len = arr.length;
// Deleting last element
len--;

// Deleting 2nd element
for(let i = 1; i < len - 1; i++) {
    arr[i] = arr[i+1];
}
len--;

for(let i = 0; i < len; i++) {
    console.log(arr[i]);
}
