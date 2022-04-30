function checkPhoneNumber(phoneNumber) {
    if (phoneNumber.length < 1) {
        return -1;
    }
    else {
        if (phoneNumber.match(/^[0-9-]+$/) != null) {
            if ((phoneNumber.replace(/[-]/g, '')).length == 10) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        }
    }
}
var ph_number = prompt("Enter Phone Number");
console.log(checkPhoneNumber(ph_number));
