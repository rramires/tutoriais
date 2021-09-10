(
    async () => {
        /**
         * Instancia a conexao
         */
        const database = require('./db');

        /**
         * Instancia os modelos
        */
        const Produto = require('./produto');

        /**
         * cria as tabelas/sincroniza
         */
        await database.sync();

        /**
         * Create
         */
        const novoProduto = await Produto.create({
            nome: 'Kit Teclado e Mouse Logi',
            preco: 159.68,
            descricao: 'Kit com boa relação custo/qualidade'
        });
        // Imprimindo o resultado da criacao no console
        console.log(novoProduto);

        /**
         * Selects
         * 
         * Produto.findAll(); // todos os registros
         * Produto.findByPk(NNN); // filtra por id
         */
         const arr_produtos = await Produto.findAll({
            /* where: {
                 id: 2
             }*/
         }); // todos
        //
        console.log(arr_produtos);

        /**
         * Update
         */
         const produto = await Produto.findByPk(1); // filtra por id
         // atualiza os campos
         produto.preco = 200;
         produto.descricao = 'Alterei a descrição e o preço para 200';
         // Salve! não esqueça do await, para retornar o registro atualizado
         await produto.save();
         //
         console.log(produto);

        /**
         * Delete
         * usa a busca const produto = await Produto.findByPk(1);
         * depois usa o destroy
         */
         // await produto.destroy();
        //
        console.log(produto);
        // Verifique na tabela do banco
    }
)();


