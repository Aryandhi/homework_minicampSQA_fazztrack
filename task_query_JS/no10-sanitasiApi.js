let bodyobjek = { username: "andi", password: "andi123", lastname: "siahaan" };
let parameter = ["username", "password"];

// console.log(bodyobjek);
// console.log(parameter);

let result = { username: "", password: "" };

sanitizeBody(bodyobjek, parameter);

function sanitizeBody(bodyobjek, parameter) {

    let cekuser = parameter[0];
    let cekpass = parameter[1];
    let cekpropertuser = bodyobjek.hasOwnProperty(cekuser);
    let cekpropertpass = bodyobjek.hasOwnProperty(cekpass);

    if (cekpropertuser == true) {
        result.username = bodyobjek.username;
    }

    if (cekpropertpass == true) {
        result.password = bodyobjek.password;
    }
    console.log(result)

}