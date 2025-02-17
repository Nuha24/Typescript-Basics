var nuha = { dbID: 23, email: "n@h.com", userID: 2211,
    githubToken: "NUHA24",
    startTrial: function () {
        return "trial started";
    },
    // Discount
    getCoupon: function (couponname, value) {
        return value;
    }
};
// modifying allowed 
nuha.email = "n@hdhdf.com";
