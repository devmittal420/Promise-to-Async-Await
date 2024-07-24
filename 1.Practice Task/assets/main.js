        
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


// convert promise into Async/Await.

const asyncFunction = async () => {
    try {
         promise1 = await firstPromise();
         promise2 = await secondPromise(promise1);
         promise3 = await thirdPromise(promise2);
         promise4 = await fourthPromise(promise3);
        console.log("Final result:", promise4);
    } catch (err) {
        console.error("Error:", err);
    }
};
asyncFunction();




// firstPromise()
//     .then(result => {
//         return secondPromise(result)
//             .then(result => {
//                 return thirdPromise(result)
//                     .then(result => {
//                         return fourthPromise(result)
//                             .then(result => {
//                                 console.log("Final result:", result);
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