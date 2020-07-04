exports.seed = function (knex) {
  return knex('service_area')
    .del()
    .then(function () {
      return knex('service_area').insert([
        {
          id: 1,
          name: 'Pediatria',
          id_class: 1,
          description:
            'Área da medicina especializada na saúde de crianças e que presta assistência a esse público específico em seus mais diversos aspectos, tanto de modo preventivo quanto curativo.',
        },
        {
          id: 2,
          name: 'Dermatologia',
          id_class: 1,
          description:
            'Área da medicina especializada no diagnóstico, tratamento e prevenção de doenças da pele, pelos, mucosas, cabelos e unhas. ',
        },
        {
          id: 3,
          name: 'Oncologia',
          id_class: 2,
          description:
            'Área da fisioterapia que tem como objetivo preservar e restaurar a integridade cinético-funcional de órgãos e sistemas.',
        },
        {
          id: 4,
          name: 'Neurofuncional',
          id_class: 2,
          description:
            'Trata-se de técnicas fisioterapêuticas utilizadas para a recuperação de pacientes afetados por doenças neurológicas originadas no sistema nervoso.',
        },
        {
          id: 5,
          name: 'Nutrição clínica',
          id_class: 3,
          description:
            'O profissional que atua na nutrição clínica tem por função prestar assistência na dieta dos indivíduos e promover a saúde.',
        },
        {
          id: 6,
          name: 'Nutrição esportiva',
          id_class: 3,
          description:
            'Tantos os atletas profissionais quanto os amadores são possíveis clientes para os nutricionistas esportivos.Quem procura obter bons resultados na prática de exercícios não pode dispensar o acompanhamento nutricional, que também ajuda na prevenção de lesões e fraturas.',
        },
      ]);
    });
};
