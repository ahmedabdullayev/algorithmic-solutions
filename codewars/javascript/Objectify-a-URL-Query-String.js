// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    let splitByAmp = query.split("&");
    let res = {};
    res.user;
    // res.user.name;
    console.log(res)
}

console.log(convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'))