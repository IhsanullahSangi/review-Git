function largestNumber (num_1,num_2,num_3){


        if (num_1 > num_2 && num_3){
            console.log(`${num_1} is greatest`)
        }
        else if (num_2 > num_1 && num_3){
            console.log(`${num_2} is greatest`)
        }else{
            console.log(`${num_3} is greatest`)
        }
}

largestNumber(0,2,1);