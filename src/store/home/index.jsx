import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  livros: [
    {
      nome: "20 Mil Léguas Submarinas",
      autor: "Jules Verne",
      capa: "https://images-na.ssl-images-amazon.com/images/I/81wmElXiKqL.jpg",
      categoria: "Ficção Cientifica",
      sinopse:
        "O aparecimento de uma criatura desconhecida nos mares provoca preocupação e curiosidade. Uma expedição parte em busca de respostas mas é atacada pela criatura e três homens são lançados ao mar. Aronnax, Conselho e Ned Land são resgatados pelo suposto monstro, que descobrem se tratar de um submarino, comandado pelo capitão Nemo. Ele os salva da morte, mas pede um preço alto: serão prisioneiros para sempre.",
      id: `book-${Math.floor(Math.random() * 329914)}`,
    },
    {
      nome: "Moby Dick",
      autor: "Herman Melville",
      capa: "https://64.media.tumblr.com/82f56f7adfc3d4064aa5b4da899e035a/tumblr_o90l4m7XVV1qhttpto3_1280.jpg",
      categoria: "Romance",
      sinopse:
        "Capt. Ahab (Gregory Peck) has a vendetta against Moby Dick, the great white whale responsible for taking his leg. He sets out on a treacherous sea voyage aboard The Pequod, along with a crew including Starbuck (Leo Genn), Father Mapple (Orson Welles) and Ishmael (Richard Basehart), to hunt down the elusive beast. With reckless abandon, Ahab leads the crew on his obsessive and suicidal quest, anxious for a final showdown with the legendary white whale.",
      id: `book-${Math.floor(Math.random() * 321994)}`,
    },
    {
      nome: "1984",
      autor: "George Orwell",
      capa: "https://images-na.ssl-images-amazon.com/images/I/81EStZoMf7L.jpg",
      categoria: "Romance",
      sinopse:
        "1984 é uma das principais obras escritas em língua inglesa, figurando entre as mais conhecidas mundialmente.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "Orgulho e Preconceito",
      autor: "Jane Austen",
      capa: "https://images-na.ssl-images-amazon.com/images/I/61JosO2tkdL.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "A Divina Comédia",
      autor: "Dante Alighieri",
      capa: "https://www.lpm.com.br/livros/imagens/a_divina_comedia_9788525433206_hd.jpg",
      categoria: "Poema",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "A Odisséia",
      autor: "Homero",
      capa: "https://kbimages1-a.akamaihd.net/c5a9e519-a7d3-4727-ad5d-2110aa6467df/1200/1200/False/a-odisseia-edicao-ilustrada.jpg",
      categoria: "Poema",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "Dom Quixote",
      autor: "Miguel de Cervantes",
      capa: "https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 399214)}`,
    },
    {
      nome: "Dom Casmurro",
      autor: "Machado de Assis",
      capa: "https://images-na.ssl-images-amazon.com/images/I/71cERjQgroL.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "A Metamorfose",
      autor: "Franz Kafka",
      capa: "https://images-na.ssl-images-amazon.com/images/I/91ibsHmdNQL.jpg",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 399214)}`,
    },
    {
      nome: "O Estrangeiro",
      autor: "Albert Camus",
      capa: "https://5934488p.ha.azioncdn.net/capas-livros/9788577992706-albert-camus-valerie-rumjanek-estrangeiro-o-livro-de-bolso-2823047218.jpg",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 399214)}`,
    },
    {
      nome: "Lolita",
      autor: "Vladmir Nabokov",
      capa: "https://pictures.abebooks.com/inventory/22404935230.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "Uisses",
      autor: "James Joyce",
      capa: "https://img.travessa.com.br/livro/GR/77/7734f380-1155-4ac5-8fcf-135c25ae8125.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "Em busca do Tempo Perdido",
      autor: "Marcel Proust",
      capa: "http://s3.amazonaws.com/cdn.globolivros.com.br/livros/1725/medium_1725.jpg?1480360473",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "O Homem Sem Qualidades",
      autor: "Robert Musli",
      capa: "https://images-na.ssl-images-amazon.com/images/I/A11+5m1K0jL.jpg",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
    },
    {
      nome: "Mythos",
      autor: "Stephan Fry",
      capa: "https://images-na.ssl-images-amazon.com/images/I/51bgQDKD+pL._SX324_BO1,204,203,200_.jpg",
      categoria: "Fantasia",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 329914)}`,
    },
  ],
  emprestados: [
    {
      nome: "A Morte de Virgílio",
      autor: "Hermann Broch",
      capa: "https://images-na.ssl-images-amazon.com/images/I/31Za4e-x08L._BO1,204,203,200_.jpg",
      categoria: "História Ficcional",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 993214)}`,
      emprestado: "Carla Xavier",
      em: 25 - 10 - 2021,
      ate: 25 - 11 - 2021,
      obs: "Devolve assim que terminar",
    },
    {
      nome: "O Código da Vinci",
      autor: "Dan Brown",
      capa: "https://m.media-amazon.com/images/I/41U51ByfcwL.jpg",
      categoria: "Mistério",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 321994)}`,
      emprestado: "Carla Xavier",
      em: 25 - 10 - 2021,
      ate: 25 - 11 - 2021,
      obs: "Devolve assim que terminar",
    },
    {
      nome: "Necromancer",
      autor: "William Gibson",
      capa: "https://preview.redd.it/6ffen5751x661.jpg?auto=webp&s=38bbbff01112576858710450580f54b1c36663ab",
      categoria: "Suspense",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 321994)}`,
      emprestado: "Carla Xavier",
      em: 25 - 10 - 2021,
      ate: 25 - 11 - 2021,
      obs: "Devolve assim que terminar",
    },
    {
      nome: "Drácula",
      autor: "Bran Stocker",
      capa: "https://www.hotelcoroanadeaur.ro/wp-content/uploads/2019/06/dracula-bram-stoker-270x400.jpg",
      categoria: "Terror",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 329914)}`,
      emprestado: "Carla Xavier",
      em: 25 - 10 - 2021,
      ate: 25 - 11 - 2021,
      obs: "Devolve assim que terminar",
    },
    {
      nome: "Inferno",
      autor: "Dan Brown",
      capa: "https://images-na.ssl-images-amazon.com/images/I/81Tzi88m+jL.jpg",
      categoria: "Terror",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 999999)}`,
      emprestado: "Carla Xavier",
      em: 25 - 10 - 2021,
      ate: 25 - 11 - 2021,
      obs: "Devolve assim que terminar",
    },
    {
      nome: "O Livro Da Mitologia",
      autor: "Thomas Bulfinch",
      capa: "https://images-na.ssl-images-amazon.com/images/I/61Bu2clrlbL.jpg",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: `book-${Math.floor(Math.random() * 399214)}`,
      emprestado: "Carla Xavier",
      em: 25 - 10 - 2021,
      ate: 25 - 11 - 2021,
      obs: "Devolve assim que terminar",
    },
  ],
};

const HomeReducer = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    AddBook(state, action) {
      state.livros.unshift(action.payload);
    },
    BorrowBook(state, action) {
      const { payload } = action;
      const { Book, Index } = payload;
      state.emprestados.unshift(Book);
      state.livros.splice(Index, 1);
    },
    RecoverBook(state, action) {
      const { payload } = action;
      const { Book, Index } = payload;
      state.livros.unshift(Book);
      state.emprestados.splice(Index, 1);
    },
  },
});

export const { AddBook, BorrowBook, RecoverBook } = HomeReducer.actions;
export default HomeReducer.reducer;
