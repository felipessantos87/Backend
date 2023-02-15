//Client
// const express = require('express');
// const { Client } = require('pg');

// const app = express();

// app.use(express.json());

// app.get('/', async (req,res)=>{
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         user: 'postgres',
//         password: '1234',
//         database: 'aula_conexao_node_pg'
//     });

//     try {
//         await client.connect()

//         const resultado = await client.query('select * from empresas');

//         await client.end()

//         return res.json(resultado);
//     } catch (error) {
//         console.log(error.message);
//     }
// });

// app.listen(3000);

//Pool

const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const { id } = req.params
    
    try {
        // const query = 'select * from empresas where nome = $1 or nome =$2'
        // const params=['Google', 'Facebook']

        // const query = 'update empresas set site = $1 where id = $2'
        // const params = ['www.cakewalk.com', 1]

        // const query = `
        // select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funciario
        // from empresas e
        // join filiais f on e.id = f.empresa_id
        // join pessoas p on e.id = p.empresa_id
        // `

        // const query = `
        //     select e.id as empresaid, f.id as filialid, e.nome, f.pais
        //     from empresas e 
        //     left join filiais f on e.id = f.empresa_id
        // `

        //  const query = `
        //     select e.id as empresaid, f.id as filialid, e.nome, f.pais
        //     from empresas e 
        //     right join filiais f on e.id = f.empresa_id
        // `

        //  const query = `
        //     select e.id as empresaid, f.id as filialid, e.nome, f.pais
        //     from empresas e 
        //     full join filiais f on e.id = f.empresa_id
        // `
        
        const query= 'select * from pessoas order by id asc limit $1 offset $2'
        
        const resultado = await pool.query(query, [10,0])
        return res.json(resultado.rows);
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3000);
