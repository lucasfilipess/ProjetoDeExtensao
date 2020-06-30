exports.seed = function (knex) {
  return knex('person')
    .del()
    .then(function () {
      return knex('person').insert([
        {
          id: 1,
          type: 'admin',
          name: 'José',
          surname: 'Carlos',
          cpf: 06011456335,
          rg: 'MG-15054226',
          telephone: '3199856459',
          cellPhone: '31999869768',
          email: 'professor1@teste.com',
          cep: 39402331,
          uf: 'MG',
          city: 'Belo Horizonte',
          neighborhood: 'São Luís',
          street: 'Todos os santos',
          number: 150,
          complement: 'Apartamento',
          password: 'password',
        },
        {
          id: 2,
          type: 'student',
          name: 'Sabrina',
          surname: 'Santos',
          cpf: 12345678911,
          rg: 'MG-15054226',
          telephone: '3199862134',
          cellPhone: '31999869768',
          email: 'aluno1@teste.com',
          cep: 39402331,
          uf: 'MG',
          city: 'Belo Horizonte',
          neighborhood: 'Todos os santos',
          street: 'José Alencar',
          number: 587,
          complement: 'A',
          password: 'password',
        },
        {
          id: 3,
          type: 'patient',
          name: 'Maria',
          surname: 'Odete',
          cpf: 12345678911,
          rg: 'MG-15054226',
          telephone: '3199862134',
          cellPhone: '31999869768',
          email: 'paciente1@teste.com',
          cep: 39402331,
          uf: 'MG',
          city: 'Belo Horizonte',
          neighborhood: 'Centro',
          street: 'Av. Getulho Vargas',
          number: 200,
          complement: 'Apartamento',
          password: 'password',
        },
        {
          id: 4,
          type: 'professor',
          name: 'Ana',
          surname: 'Júlia',
          cpf: 05022134556,
          rg: 'MG-15024556',
          telephone: '3199856459',
          cellPhone: '31999869768',
          email: 'professor2@teste.com',
          cep: 25456550,
          uf: 'MG',
          city: 'Belo Horizonte',
          neighborhood: 'Centro',
          street: 'Principal',
          number: 10,
          complement: 'Apartamento',
          password: 'password',
        },
        {
          id: 5,
          type: 'student',
          name: 'Pedro',
          surname: 'Lucas',
          cpf: 02025134556,
          rg: 'MG-15524556',
          telephone: '3199856459',
          cellPhone: '31999869768',
          email: 'aluno2@teste.com',
          cep: 25456550,
          uf: 'MG',
          city: 'Belo Horizonte',
          neighborhood: 'Centro',
          street: 'Principal',
          number: 10,
          complement: 'Apartamento',
          password: 'password',
        },
        {
          id: 6,
          type: 'patient',
          name: 'Anderson',
          surname: 'Sérgio',
          cpf: 02025134556,
          rg: 'MG-15524556',
          telephone: '3199856459',
          cellPhone: '31999869768',
          email: 'paciente2@teste.com',
          cep: 25456550,
          uf: 'MG',
          city: 'Belo Horizonte',
          neighborhood: 'Artur Gouveia',
          street: 'Principal',
          number: 15,
          complement: 'Apartamento',
          password: 'password',
        },
      ]);
    });
};
