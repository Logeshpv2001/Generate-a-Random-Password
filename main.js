
        const passwordbox = document.getElementById("password");
        const lenght = 12;
        
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const number = "1234567890";
        const symbol = "!@#$%^&*()_+~{}+-*/=<>?"; 

        const allchars = upperCase + lowerCase + number + symbol;

    function CreatePassword(){
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while(lenght>password.length){
             password += allchars[Math.floor(Math.random() * allchars.length)];

        }
        passwordbox.value = password;
    }

    function copyPassword(){
        passwordbox.select();
        document.execCommand("copy");
    }
    



