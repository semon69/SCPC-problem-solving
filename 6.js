function generateRandomPassword(length) {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?";
    // console.log(allChars.length);
    let password = '';
    for (let i = 0; i < length; i++) {
        // console.log(Math.floor(Math.random() * 222));
        const randomIndex = Math.floor(Math.random() * allChars.length);
        //   console.log(randomIndex);
        password += allChars.charAt(randomIndex);
        //   console.log(allChars.charAt());
        // console.log(password);
    }

    return password;
}

const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
