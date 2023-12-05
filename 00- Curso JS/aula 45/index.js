function retornaHora(data) {
    if (data && !(data instanceof Date)){  //Se a data foi enviada e não for uma instancia de Date. Eu lanço o erro. isso ! significa = dferente de
        throw new TypeError('Esperando instância de Date')
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second: '2-digit',
        hour12 : false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
} catch (e){
    //Tratar erro
    // console.log(e)
} finally {
    console.log('Tenha um bom dia')
}




// try {
//     // console.log(a);  //Aqui deu erro, vai pular p catch e finally
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b);
//     } catch (e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Tambem sou finally')
//     }

// } catch (e) {
//     console.log('Tratando o erro')
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
// }


// try {
//     console.log(a);  //Aqui deu erro, vai pular p catch e finally
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch (e) {
//     console.log('Tratando o erro')
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
// }


// try {
//         //É executada quando não há erros
// } catch (e) {
//     //É executada quando há erros
// } finally {
//     // Sempre
// }