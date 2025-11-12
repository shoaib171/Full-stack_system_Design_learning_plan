data{
    item:[
     item-1:[1,2] two right answer
     item-2:[3,4] two wrong anwser
     item-3:[6,7]
    ]
   
}

Q:1 
MCQ: show all item-1 or item-2 right wrong answer


const apiDataResponse=data.item
const mergeddata=apiDataResponse.flat()