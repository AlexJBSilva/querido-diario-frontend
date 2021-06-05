export const termsResult = [
  {
    text: 'Lorem compra dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin gravida arcu eget R$5.000 … Vivamus merenda bibendum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in merenda nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    updatedAt: '10/02/2021',
    downloadUrl: 'http://google.com',
    city: 'Recife',
  },
  {
    text: 'Lorem compra dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin gravida arcu eget R$5.000 … Vivamus merenda bibendum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in merenda nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    updatedAt: '10/02/2021',
    downloadUrl: 'http://google.com',
    city: 'São Paulo',
  },
  {
    text: 'Lorem compra dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin gravida arcu eget R$5.000 … Vivamus merenda bibendum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in merenda nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    updatedAt: '10/02/2021',
    downloadUrl: 'http://google.com',
    city: 'Rio de Janeiro',
  },
  {
    text: 'Lorem compra dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin gravida arcu eget R$5.000 … Vivamus merenda bibendum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in merenda nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    updatedAt: '10/02/2021',
    downloadUrl: 'http://google.com',
    city: 'Recife',
  },
  {
    text: 'Lorem compra dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin gravida arcu eget R$5.000 … Vivamus merenda bibendum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in merenda nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    updatedAt: '10/02/2021',
    downloadUrl: 'http://google.com',
    city: 'Florianópolis',
  },
  {
    text: 'Lorem compra dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin gravida arcu eget R$5.000 … Vivamus merenda bibendum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in merenda nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    updatedAt: '10/02/2021',
    downloadUrl: 'http://google.com',
    city: 'Belo Horizonte',
  },
  {
    text: 'Lorem compra dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin gravida arcu eget R$5.000 … Vivamus merenda bibendum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in merenda nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    updatedAt: '10/02/2021',
    downloadUrl: 'http://google.com',
    city: 'Natal',
  },
];

export const noResult = [];

export const cityLevel0 = {
  territory_id: '123',
  territory_name: 'São Sebastião',
  state_code: 'SP',
  publication_urls: [],
  level: '0',
};

export const cityLevel1 = {
  territory_id: '123',
  territory_name: 'São Luiz',
  state_code: 'SP',
  publication_urls: ['http://google.com.br'],
  level: '0',
};

export const cityLevel2 = {
  territory_id: '123',
  territory_name: 'São Luiz',
  state_code: 'SP',
  publication_urls: [
    'http://google.com.br',
    'http://google.com.br',
    'http://google.com.br',
    'http://google.com.br',
    'http://google.com.br',
    'http://google.com.br',
    'http://google.com.br',
    'http://google.com.br',
    'http://google.com.br',
  ],
  level: '1',
};

export const cityLevel3 = {
  territory_id: '123',
  territory_name: 'São Luiz',
  state_code: 'SP',
  level: '1',
};

export const level0Description = {
  text: 'Esta cidade ainda não está no Querido Diário. A plataforma é colaborativa e precisamos ter a fonte de publicação desse município. Você pode nos ajudar?',
  button: {
    text: 'Cadastre esse município no Censo',
    href: 'http://google.com.br',
  },
};

export const level1Description = {
  text: 'O Querido Diário possui a fonte de publicação do diário oficial desta cidade, mas ainda não consegue coletar os arquivos. Doe e nos ajude a disponibilizar informações de mais cidades na plataforma.',
};

export const level2Description = {
  text: 'O Querido Diário encontrou a cidade, mas ainda não é capaz de realizar uma busca por termo. Doe e nos ajude a disponibilizar informações de mais cidades na plataforma.',
};

export const level3Description = {
  text: 'Estamos buscando por paralavra chave, lorem compra merenda sit amet, consectetur adipiscing elit. Aliquam sollicitudin gravida arcu eget ultrices.',
};

interface LevelDescription {
  text: string;
  button?: {
    text: string;
    href: string;
  };
}

export function getLevelDescription(level: string): LevelDescription {
  switch(level) {
    case ('0'):
      return level0Description
    case ('1'):
      return level1Description
    case ('2'):
      return level2Description
    case ('3'):
      return level3Description
    default:
      return level0Description;
  }
}