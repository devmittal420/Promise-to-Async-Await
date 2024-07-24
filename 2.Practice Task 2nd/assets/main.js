const firstPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First Promise");
            resolve("First result");
        }, 1000);
    });
};

const secondPromise = (resultFromFirst) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Second Promise, received:", resultFromFirst);
            resolve("Second result");
        }, 1000);
    });
};

const thirdPromise = (resultFromSecond) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Third Promise, received:", resultFromSecond);
            resolve("Third result");
        }, 1000);
    });
};

const fourthPromise = (resultFromThird) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fourth Promise, received:", resultFromThird);
            resolve("Fourth result");
        }, 1000);
    });
};

const fifthPromise = (resultFromFourth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fifth Promise, received:", resultFromFourth);
            resolve("Fifth result");
        }, 1000);
    });
};

const sixthPromise = (resultFromFifth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sixth Promise, received:", resultFromFifth);
            resolve("Sixth result");
        }, 1000);
    });
};


//  Convert promise into Async/Await

const asyncFunction = async() =>{
    try{
        result1 = await firstPromise();
        result2 = await secondPromise(result1);
        result3 = await thirdPromise(result2);
        result4 = await fourthPromise(result3);
        result5 = await fifthPromise(result4);
        result6 = await sixthPromise(result5);

        console.log("Result: ",result6);
    }
   catch(err){
    console.log("Error ",err);
   }
}
asyncFunction();



// firstPromise()
//     .then(result => {
//         secondPromise(result)
//             .then(result => {
//                 thirdPromise(result)
//                     .then(result => {
//                         fourthPromise(result)
//                             .then(result => {
//                                 fifthPromise(result)
//                                     .then(result => {
//                                         sixthPromise(result)
//                                             .then(result => {
//                                                 console.log("Final result:", result);
//                                             })
//                                             .catch(err => {
//                                                 console.error("Error in sixthPromise:", err);
//                                             });
//                                     })
//                                     .catch(err => {
//                                         console.error("Error in fifthPromise:", err);
//                                     });
//                             })
//                             .catch(err => {
//                                 console.error("Error in fourthPromise:", err);
//                             });
//                     })
//                     .catch(err => {
//                         console.error("Error in thirdPromise:", err);
//                     });
//             })
//             .catch(err => {
//                 console.error("Error in secondPromise:", err);
//             });
//     })
//     .catch(err => {
//         console.error("Error in firstPromise:", err);
//     });
