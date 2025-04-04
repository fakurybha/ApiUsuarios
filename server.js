const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

let usuarios = [
    {id: 1, nome: 'Maria'},
    {id: 2, nome: 'Paulo'}
];
app.post('/api/usuarios', (req, res) =>{
    const novousuario = {id: usuarios.length + 1, nome: req.body.nome};

    usuarios.push(novousuario)
    res.status(201).json(novousuario)
});



app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

app.put('/api/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u=> u.id === parseInt(req.params.id));
    
    if(!usuario) return res.status(404).send('usuario nao encontrado');
    usuario.nome = req.body.nome;
    res.json(usuario);
});

app.delete('/api/usuarios/:id', (req, res) => {
    const usuarioIndex = usuarios.findIndex(u=> u.id === parseInt(req.params.id));

    if(usuarioIndex === -1) return res.status(404).send('usuario nao encontrado');
    const usuariodeletado = usuarios.splice(usuarioIndex);
    res.json(usuariodeletado);
});


app.listen(port, () => {
  console.log('http://localhost/3000');
});
