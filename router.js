module.exports = (app) => {

    app.get('/inicio', function (request, response) {
        response.send(
            `
            <html>
                <body>
                    Ultima School
                </body>
            </html>
            `
        );
    });

    app.get('/alunos', function (request, response) {
        response.send(
            
            `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content-"IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Ultima School</title>
            </head>
        <body>
            <h1>Listagem de Alunos</h1>

            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Matricula</td>
                        <td>Nome do Aluno</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>202400100</td>
                        <td>Rodrigo Brandao</td>
                    <tr>
                    <tr>
                        <td>2</td>
                        <td>202400101</td>
                        <td>Marcela Santana</td>
                    <tr>
                    <tr>
                        <td>3</td>
                        <td>202400102</td>
                        <td>Márcio Sheroim</td>
                    <tr>
                </tbody>
            </table>
        </body>
            </html
            `
        );
    });

app.get('/professores', function (request, response) {
    response.send(
        
        `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content-"IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ultima School</title>
        </head>
        <body>
            <h1>Lista de Professores</h1>

            <table>
                <thead>
                     <tr>
                        <td>#</td>
                        <td>Matricula</td>
                        <td>Nome do Professor</td>
                        <td>Curso</td>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>011</td>
                        <td>Marcelo Sheraim</td>
                        <td>JavaScript</td>
                    <tr>
                    <tr>
                        <td>2</td>
                        <td>012</td>
                        <td>Carolina Rosera</td>
                        <td>Quality Assurance</td>
                    <tr>
                    <tr>
                        <td>3</td>
                        <td>013</td>
                        <td>Jorge Bertallos</td>
                        <td>Banco de Dados</td>
                    <tr>
                </tbody>
            </table>
        </body>
                </html
        `
    );
});
}