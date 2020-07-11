exports.seed = function (knex) {
  return knex('service_area')
    .del()
    .then(function () {
      return knex('service_area').insert([
        {
          id: 1,
          name: 'Fisioterapia',
          id_class: 1,
          description:
            'Oferece atendimento em Fisioterapia nas áreas de cardiologia, pneumologia e neuropediatria ainda no primeiro semestre deste ano. Para o segundo semestre haverá consultas de ortopedia, gerontologia, saúde da mulher e neurologia adulto.',
        },
        {
          id: 2,
          name: 'Nutrição',
          id_class: 2,
          description:
            'Atendimento em todas as áreas clínicas da nutrição com diagnóstico e tratamento, entre eles pediatria, obesidade, controle alimentar, gestantes e idosos. É preciso encaminhamento médico, fisioterápico ou do educador físico do SUS',
        },
        {
          id: 3,
          name: 'Psicologia',
          id_class: 3,
          description:
            'Atende com psicoterapia Infantil, adolescente e adulto.',
        },
        {
          id: 4,
          name: 'Angiologia',
          id_class: 4,
          description:
            'Angiologia é a utilidade médica que se ocupa do tratamento clínico das doenças que acometem vasos sanguíneos e vasos linfáticos, como varizes, aneurismas e obstruções arteriais.',
        },
        {
          id: 5,
          name: 'Cardiologia',
          id_class: 4,
          description:
            'Cardiologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório. ',
        },
        {
          id: 6,
          name: 'Dermatologia',
          id_class: 4,
          description:
            'Dermatologia é a especialidade médica que se ocupa do diagnóstico e tratamento clínico-cirúrgico das enfermidades relacionados à pele e aos anexos cutâneos',
        },
        {
          id: 7,
          name: 'Endocrinologia',
          id_class: 4,
          description:
            'Endocrinologia é uma especialidade médica que estuda as ordens do sistema endócrino e suas secreções específicas, chamadas de secreções fisiológicas.',
        },
        {
          id: 8,
          name: 'Gastroenterologia',
          id_class: 4,
          description:
            'A Gastroenterologia ou Gastrenterologia, é a especialidade médica que se ocupa do estudo, diagnóstico e tratamento clínico das doenças do aparelho digestivo.',
        },
        {
          id: 9,
          name: 'Geriatria',
          id_class: 4,
          description:
            'Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.',
        },
        {
          id: 10,
          name: 'Neurologia',
          id_class: 4,
          description:
            'Neurologia é a especialidade médica que trata dos distúrbios estruturais do sistema nervoso. ',
        },
      ]);
    });
};
