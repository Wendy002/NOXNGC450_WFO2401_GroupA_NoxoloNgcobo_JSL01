function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    if (input[0,4] === "pet_" && _.isNumber(input[4,8])){

        let result = `Valid Syntax \U+1F4AF`;
    }  else{

        let result = `Invalid Syntax \U+1FAE3`;
    }


    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

    document.getElementById('result').innerText = result;
}


