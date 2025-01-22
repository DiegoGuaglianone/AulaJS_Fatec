function gerarAluno(objAluno){
    var acumulado = "<table><thead><tr><th> Nome </th>" +
                    "<th> RA </th>" +
                    "<th> Curso </th>" +
                    "<th> Idade </th>" +
                    "<th> P1 </th>" +
                    "<th> P2 </th>" +
                    "<th> Média </th>"
                    "</tr> </thead>" +
                    "<tbody>"
    var media1 = 0;
    var media2 = 0;
    var ap = 0; 
    var rep = 0;
    for(let i = 0; i < objAluno.length; i++){
        // console.log(media1);
        var notaP1 = objAluno[i].P1;
        media1 += notaP1;
        var notaP2 = objAluno[i].P2;
        media2 += notaP2;
        let classeM = (notaP1+notaP2)/2 < 6 ? "reprovado" + rep++ : "aprovado" + ap++
        let classeP1 = notaP1 < 6 ? "reprovado" : "aprovado";
        let classeP2 = notaP2 < 6 ? "reprovado" : "aprovado";
        acumulado = acumulado 
                    + "<tr><td>" + objAluno[i].nome + "</td>"
                    + "<td>" + objAluno[i].ra + "</td>"
                    + "<td>" + objAluno[i].curso + "</td>"
                    + "<td>" + objAluno[i].idade + "</td>"
                    + "<td class='"+ classeP1 + "'>" + notaP1 + "</td>"
                    + "<td class='"+ classeP2 + "'>" + notaP2 + "</td>"
                    + "<td class='"+ classeM + "'>" + (notaP1+notaP2)/2 + "</td></tr>"
    }
    media1 /= objAluno.length;
    media2 /= objAluno.length;
    acumulado += "</tbody></table>" + "<p>Média dos alunos na P1 foi " + media1 + " e a média da P2 foi " + media2 + "</p>" + "<p>"+ ap + " foram aprovados e " + rep + " foi reprovado </p>"
    document.body.innerHTML = acumulado;

}

