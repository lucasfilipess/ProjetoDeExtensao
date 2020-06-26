exports.seed = function (knex) {
  return knex('service_area')
    .del()
    .then(function () {
      return knex('service_area').insert([
        {
          id: 1,
          name: 'Medicina',
          description:
            'É a ciência que investiga a natureza e as causas das doenças humanas, procurando sua cura e prevenção. Ele pesquisa e trata disfunções e moléstias, escolhendo os melhores procedimentos para preveni-las e combatê-las.',
        },
        {
          id: 2,
          name: 'Nutrição',
          description:
            'É a ciência que investiga e controla a relação homem-alimento para preservar a saúde humana. O nutricionista planeja, administra e coordena programas de alimentação e nutrição em empresas, escolas, hospitais, hotéis, restaurantes comerciais, spas e asilos.',
        },
        {
          id: 3,
          name: 'Odontologia',
          description:
            'É a ciência voltada para o estudo e o tratamento dos dentes, da boca e dos ossos da face. O dentista cuida da saúde e da estética da boca. Restaura, extrai e limpa dentes, projeta e instala próteses e realiza cirurgias.',
        },
        {
          id: 4,
          name: 'Psicologia',
          description:
            'É o estudo dos fenômenos psíquicos e do comportamento do ser humano. O psicólogo diagnostica, previne e trata doenças mentais, distúrbios emocionais e de personalidade. Esse profissional atua em consultórios, em hospitais, escolas e nas mais variadas instituições de saúde, como clínicas estéticas e spas.',
        },
        {
          id: 5,
          name: 'Fisioterapia',
          description:
            'É o conjunto de técnicas usadas no tratamento e na prevenção de doenças e lesões. O fisioterapeuta previne, diagnostica e trata disfunções do organismo humano causadas por acidentes, má-formação genética ou vício de postura.',
        },
        {
          id: 6,
          name: 'Enfermagem',
          description:
            'O enfermeiro atua na proteção, na promoção e na recuperação da saúde e na prevenção de doenças. Em hospitais, é indispensável em todos os setores, da UTI à psiquiatria.',
        },
        {
          id: 7,
          name: 'Educação Física',
          description:
            'O profissional de Educação Física organiza, executa e supervisiona programas de atividades físicas para pessoas ou grupos. Pode trabalhar com grupos, em escolas, clubes e academias de ginástica, ou prestar atendimento individual, como personal trainer.',
        },
        {
          id: 8,
          name: 'Medicina Veterinária',
          description:
            'A medicina veterinária é uma das muitas áreas do conhecimento ligada à manutenção e restauração da saúde. Ela trabalha, num sentido amplo, com a prevenção e cura das doenças das demais espécies e dos humanos num contexto médico.',
        },
      ]);
    });
};
