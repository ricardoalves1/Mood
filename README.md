![Projeto Mood](/public/mood.png)

#

O **Mood** é um sistema que retorna uma lista de músicas baseado na temperatura atual de uma cidade, estado ou país de qualquer lugar do mundo.

Também é possível salvar essas listas de músicas para ver depois.

# Para iniciar o projeto:

Depois de baixar o repositório é só seguir os próximos passos:

## Baixar as dependências

```bash
npm install
# ou
yarn install
```

## Variáveis de ambiente

É preciso criar um arquivo chamado `.env.local` ou renomear o arquivo "`.env.example`", e colocar as seguintes chaves:

```
RAPID_API_HOST
RAPID_API_KEY
OPEN_WEATHER_KEY
```

Onde encontrar essas variáveis:

- Geradas no [RapidAPI](https://rapidapi.com/)

```
RAPID_API_HOST
RAPID_API_KEY
```

- Gerada no [OpenWeather](https://openweathermap.org/)

```
OPEN_WEATHER_KEY
```

Após isso é só executar.

## Como executar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```
