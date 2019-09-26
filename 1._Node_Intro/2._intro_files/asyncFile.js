const explainProblem = () => {
    console.log("Help, my phone is broken and doesn't turn on");
}

const personalInfo = {
    fullName: "Bob Marley",
    telephoneNumber: "12345678"
}

// libuv

function helpDesk(personalInfo, explainProblem) {
    console.log("What's your personal info?");
    personalInfo;

    setTimeout(function() {
        explainProblem();
    }, 3000);

    // callTheDB(); async function here

    // choice 1: execute this immediately

    // choice 2: wait for callTheDB() and then execute this line
}

// helpDesk(personalInfo, explainProblem);

new Promise(function (resolve, reject) {
    try {
        setTimeout(function() {
            resolve("I resolved after 4 seconds.. yay!");
        }, 4000);
    } catch(error) {
        reject(error);
    }
}).then(function(message) {
    // console.log(message);
});

// Redux: passing onSuccess, onFailure

function myPromise() {
    // implement a promise that resolves after 5 seconds
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("I resolved after 5 seconds...");
        }, 5000)
    });
}

function myAsynchronousFunction() {
    myPromise().then(message => {
        console.log(message);
    })
}

myAsynchronousFunction();


