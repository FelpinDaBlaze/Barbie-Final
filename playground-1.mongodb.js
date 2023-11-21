// // const collection = 'NEW_COLLECTION_NAME';

// //CREATE DATABASE TEST
// //USE TEST
// use("test");
// //Apagando a collection antes de inserir novos dados.
// db.cardapio.drop();

// //Código para criar uma nova collection
// db.createCollection("cardapio");

// //Código para inserir vários dados em uma collection criada anteriormente
// db.cardapio.insertMany([
//     {nome:"Macarrão",preco:29.99,ingredientes:"Macarrão"},
//     {nome:"Strogonoff",preco:59.99,ingredientes:"Carne Wagyu e Arroz"},
//     {nome:"Pirão",preco:50,ingredientes:"Farinha, Frango Caipira, Arroz"},
//     {nome:"Rozcowvo",preco:29.99,ingredientes:"Ovo, Arroz, Feijão"},
//     {nome:"Prato do Dia",preco:10.99,ingredientes:"Arroz, Feijão e Bife"}
// ])

// //SELECT * FROM test.cardapio;

// //No mongo para selecionar vamos usar o comando find

// //devolve todos os dados da collection
// db.cardapio.find();

// //Filtrando pelo nome
// //SELECT * FROM cardapio where nome="Macarrão"; 
// db.cardapio.find({nome:"Macarrão"});

// //Para selecionar as colunas usamos a projeção
// //SELECT nome, preco FROM cardapio where nome="Macarrão"; 
// db.cardapio.find({nome:"Macarrão"},{nome:true,preco:true});

// //FIND ({QUERY},{PROJEÇÃO})

use("teretreino");
db.dropDatabase()
db.createCollection("treino");

db.treino.insertOne(
    {
        nome:"Peito e Biceps",
        diaSemana:"Segunda",
        exercicios:[
            {
                nome:"Supino",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Rosca Martelo",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Voador",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Rosca Scott",
                serie:5,
                repeticoes:12
            },
            
        ]
    }
)
db.treino.insertOne(
    {
        nome:"Costas e Tríceps",
        diaSemana:"Quarta",
        exercicios:[
            {
                nome:"Tríceps Polia",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Tríceps Corda",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Pull Down",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Remada Curvada",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Puxada Alta",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Remada Baixa",
                serie:4,
                repeticoes:15
            }
        ]
    }
)

db.treino.insertOne(
    {
        nome:"Inferiores",
        diaSemana:"Terca e Quinta",
        exercicios:[
            {
                nome:"Leg Press",
                serie:4,
                repeticoes:12
            },
            {
                nome:"Agachamento",
                serie:4,
                repeticoes:12
            },
            {
                nome:"Levantamento Terra",
                serie:4,
                repeticoes:12
            },
            {
                nome:"Panturrilha",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Cadeira Extensora ",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Cadeira Abdutora",
                serie:4,
                repeticoes:15
            },
            {
                nome:"Cadeira Adutora",
                serie:4,
                repeticoes:15
            }
        ]
    }
)

use("teretreino");
db.treino.find({_id:ObjectId("64f743b8dec9518ee87c61c9")})

use("teretreino");
db.treino.updateOne(
    {_id:ObjectId("64f743b8dec9518ee87c61c9")},
    {
        $set:{
            diaSemana:"Sexta",
            nome:"Peito e Biceps A"
        }
    }
)
use("teretreino");
db.treino.updateOne(
    {_id:ObjectId("64f743b8dec9518ee87c61c9"),"exercicios.nome":"Rosca Scott"},
    {
        $set:{
            "exercicios.$.serie":5,
            "exercicios.$.repeticoes":12
        }
    }
)

