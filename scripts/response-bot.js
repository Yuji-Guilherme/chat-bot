//reposta do bot
function getResponse(input) {
    let infoText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit ipsam iste, non id at?";
    let exitText = "Espero que tenha ajudado!";
    switch (input){
        case "1":
            return infoText;
            break;
        case "informações":
            return infoText;
            break;
        case "Informações":
            return infoText;
            break;
        case "2":
            return exitText;
            break;
        case "sair":
            return exitText;
            break;
        case "Sair":
            return exitText;
            break;
        default:
            return "Você não escolheu nenhuma das opções, tente novamente.";
    }   
};
