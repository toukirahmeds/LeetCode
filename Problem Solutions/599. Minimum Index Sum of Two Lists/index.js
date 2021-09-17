/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    const list1Len = list1.length, matched = [];
    let list1Word, list2WordIndex, sumIndex, minimumSumIndex = Number.POSITIVE_INFINITY;
    for(let i = 0; i < list1Len; i++) {
        list1Word = list1[i];
        list2WordIndex = list2.indexOf(list1Word);
        if(list2WordIndex > -1) {
            sumIndex = i + list2WordIndex;
            matched.push({
                name: list1Word,
                sumIndex
            });
            
            if(sumIndex < minimumSumIndex) {
                minimumSumIndex = sumIndex;
            }
        }
    }
    
    return matched.filter(elem => elem.sumIndex === minimumSumIndex).map(elem => elem.name);
};

console.log(findRestaurant(
    ["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
));


/**
 * Time Complexity = O(n)
 * where n is the length of array parameter "list1".
 */
