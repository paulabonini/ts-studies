const text = "Teste pra verificar se está retirando as vogais";

function removeCharacters (text: string) {
    return text.replace(/[aeiouà-ú]/gi, '');
}

const result = removeCharacters(text);

console.log(result);

// console.log("Hello World!")