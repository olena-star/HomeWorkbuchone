const data = [
  {
    id: 1,
    title: 'Бухгалтерские услуги в вашем городе',
    button: 'Button 1',
    h1: true,
  },
  {
    id: 2,
    title: 'Бухгалтерские услуги в вашем стране',
    button: 'Button 2',
    h1: false,
  },
  {
    id: 3,
    title: 'Бухгалтерские услуги в вашем регионе',
    button: 'Button 3',
    h1: false,
  },
  {
    id: 4,
    title: 'Бухгалтерские услуги в вашем доме',
    button: 'Button 4',
    h1: false,
  },
];

let slider_idx = 0;
const slider_wrapper = document.querySelector('.slider_wrapper');
const spanArray = Array.from(document.getElementsByClassName('header_point'));
console.log(spanArray);

const func = (data) => {
  spanArray[0].id = 'span_accent';
  data.forEach((el, idx) => {
    const slider = document.createElement('div');
    const slider_header_title = document.createElement(
      `${el.h1 === true ? 'h1' : 'h2'}`
    );
    const slider_header_button = document.createElement('button');
    slider.className = 'slider';
    slider_header_title.className = 'slider_header-title';
    slider_header_button.className = 'slider_header-button';
    idx > 0 ? (slider.id = 'displayNone') : (slider.id = 'displayFlex');
    slider_header_title.innerText = el.title;
    slider_header_button.innerText = el.button;
    slider.append(slider_header_title, slider_header_button);
    slider_wrapper.append(slider);
  });
};
func(data);
const slider_button_left = document.querySelector('.slider_button-left');
const slider_button_right = document.querySelector('.slider_button-right');

const render = (arr, idx) => {
  arr.forEach((el) => (el.id = ''));
  arr[idx].id = 'span_accent';
};

const left = () => {
  if (slider_idx !== 0) {
    slider_idx--;
    const width = slider_wrapper.clientWidth;
    slider_wrapper.style.left = `-${slider_idx * width}px`;
    Array.from(slider_wrapper.children).forEach((el, idx) => {
      idx === slider_idx ? (el.id = 'displayFlex') : (el.id = 'displayNone');
    });
    render(spanArray, slider_idx);
  }
};

const right = () => {
  if (slider_idx < data.length - 1) {
    slider_idx++;
    const width = slider_wrapper.clientWidth;
    slider_wrapper.style.left = `-${slider_idx * width}px`;
    Array.from(slider_wrapper.children).forEach((el, idx) => {
      idx === slider_idx ? (el.id = 'displayFlex') : (el.id = 'displayNone');
    });
    render(spanArray, slider_idx);
  }
};

slider_button_left.addEventListener('click', left);
slider_button_right.addEventListener('click', right);

// BLOCK ========== SERVICES ========== //

const services_cards = document.querySelector('.services_cards');

const renderServicesCards = () => {
  for (let i = 1; i <= 6; i++) {
    const services_card = document.createElement('div');
    const services_paragraph = document.createElement('p');
    services_cards.append(services_card);
    services_card.append(services_paragraph);
    services_card.style.backgroundImage = 'url("./images/card_bg.png")';
    services_paragraph.innerText = 'Бухгалтерское обслуживание';
  }
};

renderServicesCards();

// BLOCK ========== ABOUT US ========== //

const aboutUs_cards = document.querySelector('.aboutUs_cards');

const renderAboutUsCards = () => {
  for (let i = 1; i <= 4; i++) {
    // Create element
    const aboutUs_card = document.createElement('article');
    const aboutUs_title = document.createElement('h2');
    const aboutUs_paragraph = document.createElement('p');
    const aboutUs_link = document.createElement('a');
    // Add element
    aboutUs_cards.append(aboutUs_card);
    aboutUs_card.append(aboutUs_title, aboutUs_paragraph, aboutUs_link);
    // Add info
    aboutUs_title.innerText = '90';
    aboutUs_paragraph.innerText = 'Завершено крупных сделок';
    aboutUs_link.innerText = 'Все кейсы';
  }
};
renderAboutUsCards();
// BLOCK ========== CLIENTS ========== //

const clients_slider_data = [
  { id: 1, src: './images/microsoft.png', bgr_color: 'transparent' },
  { id: 2, src: './images/microsoft.png', bgr_color: 'lightblue' },
  { id: 3, src: './images/microsoft.png', bgr_color: 'lightcoral' },
  { id: 4, src: './images/microsoft.png', bgr_color: 'lightgreen' },
];

let clients_slider_idx = 0;
const clients_slider_wrapper = document.querySelector(
  '.clients_slider_wrapper'
);
const clients_spanArray = Array.from(
  document.getElementsByClassName('clients_point')
);

const clients_slider = (data) => {
  clients_spanArray[0].id = 'clients_span_accent';
  data.forEach((el, idx) => {
    const slider = document.createElement('div');
    slider.className = 'clients_slider_container';
    slider.style.backgroundColor = el.bgr_color;

    for (let i = 1; i <= 4; i++) {
      const imgElem = document.createElement('img');
      imgElem.src = el.src;
      imgElem.alt = 'Logo microsoft';
      slider.append(imgElem);
    }

    idx > 0 ? (slider.id = 'displayNone') : (slider.id = 'displayFlex');
    clients_slider_wrapper.append(slider);
  });
};
clients_slider(clients_slider_data);
const clients_slider_button_left = document.querySelector(
  '.clients_slider_button-left'
);
const clients_slider_button_right = document.querySelector(
  '.clients_slider_button-right'
);

const render_clients_span = (arr, idx) => {
  arr.forEach((el) => (el.id = ''));
  arr[idx].id = 'clients_span_accent';
};

const clients_left = () => {
  if (clients_slider_idx !== 0) {
    clients_slider_idx--;
    const width = clients_slider_wrapper.clientWidth;
    clients_slider_wrapper.style.left = `-${clients_slider_idx * width}px`;
    Array.from(clients_slider_wrapper.children).forEach((el, idx) => {
      idx === clients_slider_idx
        ? (el.id = 'displayFlex')
        : (el.id = 'displayNone');
    });
    render_clients_span(clients_spanArray, clients_slider_idx);
  }
};

const clients_right = () => {
  if (clients_slider_idx < data.length - 1) {
    clients_slider_idx++;
    const width = clients_slider_wrapper.clientWidth;
    clients_slider_wrapper.style.left = `-${clients_slider_idx * width}px`;
    Array.from(clients_slider_wrapper.children).forEach((el, idx) => {
      idx === clients_slider_idx
        ? (el.id = 'displayFlex')
        : (el.id = 'displayNone');
    });
    render_clients_span(clients_spanArray, clients_slider_idx);
  }
};

clients_slider_button_left.addEventListener('click', clients_left);
clients_slider_button_right.addEventListener('click', clients_right);

// BLOCK ========== REVIEWS ========== //

const reviews_slider_data = [
  {
    id: 1,
    firstname: 'Екатерина',
    lastname: 'Иванова',
    position: 'Директор ООО “Раз-два”',
    image: './images/Ellipse.svg',
    review:
      'Прекрасная компания, которая предоставляет бухгалтерские услуги на высшем уровне. Мы сотрудничаем с ними уже несколько лет, и всегда остаемся довольны качеством и профессионализмом их работы. Благодаря их участию, у нашей компании всегда в порядке финансовая отчетность, налоговая отчетность, и все бухгалтерские процессы проходят гладко. Рекомендуем эту фирму всем, кто ищет надежного партнера в области бухгалтерии.',
  },
  {
    id: 2,
    firstname: 'Иван',
    lastname: 'Петров',
    position: 'Менеджер по продажам в ООО “Техно Про”',
    image: './images/Ellipse.svg',
    review:
      'Хочу выразить благодарность компании за их выдающиеся услуги. Мы партнеры уже несколько лет, и я всегда впечатлен их профессионализмом и отличным отношением к клиентам. Они предоставляют широкий спектр продуктов и всегда готовы помочь с выбором наиболее подходящего решения для нашего бизнеса. Наше сотрудничество с ООО “Техно Про” помогло нам значительно улучшить нашу продуктивность и эффективность работы. Большое спасибо за отличную работу!',
  },
  {
    id: 3,
    firstname: 'Мария',
    lastname: 'Сидорова',
    position: 'Главный редактор в издательском доме “Книжный мир”',
    image: './images/Ellipse.svg',
    review:
      'Издательский дом “Книжный мир” долгое время сотрудничает и мы безумно довольны их творческим подходом и профессионализмом. Они занимаются разработкой дизайна обложек наших книг, и каждый раз удивляют нас своими креативными идеями. ООО “График Дизайн” всегда выполняет работу в срок и учитывает все наши пожелания. Наше сотрудничество с ними способствует привлечению большего числа читателей к нашим книгам. Спасибо, ООО “График Дизайн”, за ваше великолепное творчество и партнерскую поддержку!',
  },
  {
    id: 4,
    firstname: 'Алексей',
    lastname: 'Козлов',
    position: 'Генеральный директор в ООО “СтройТех”',
    image: './images/Ellipse.svg',
    review:
      'Я хочу выразить свою благодарность компании за их профессионализм и качество услуг. Мы сотрудничаем с ними на протяжении нескольких лет, и они всегда выполняют свою работу на высшем уровне. ООО “СтройТех” предоставляет нам строительную технику в аренду, и они всегда оперативно доставляют оборудование, что очень важно для нашей компании. Мы ценим их ответственный подход к работе и надежность как поставщика. Рекомендую ООО “СтройТех” всем, кто ищет надежного партнера в области строительства.',
  },
];

let reviews_slider_idx = 0;
const reviews_slider_wrapper = document.querySelector(
  '.reviews_slider_wrapper'
);
const reviews_spanArray = Array.from(
  document.getElementsByClassName('reviews_point')
);

const reviews_slider = (data) => {
  reviews_spanArray[0].id = 'reviews_span_accent';
  data.forEach((el, idx) => {
    const slider = document.createElement('div');
    slider.className = 'reviews_slider_container';
    slider.style.backgroundColor = el.bgr_color;

    const reviewElem = document.createElement('p');
    const imgElem = document.createElement('img');
    const nameElem = document.createElement('p');
    const positionElem = document.createElement('p');
    const userContainerElem = document.createElement('div');
    const nameContainerElem = document.createElement('div');

    reviewElem.className = 'user_review';
    nameElem.className = 'user_name';
    positionElem.className = 'user_position';
    userContainerElem.className = 'user_container';
    nameContainerElem.className = 'user_name_container';

    reviewElem.innerText = el.review;
    imgElem.src = el.image;
    imgElem.alt = 'User image';
    nameElem.innerText = `${el.firstname} ${el.lastname}`;
    positionElem.innerText = el.position;
    nameContainerElem.append(nameElem, positionElem);
    userContainerElem.append(imgElem, nameContainerElem);
    slider.append(reviewElem, userContainerElem);

    idx > 0 ? (slider.id = 'displayNone') : (slider.id = 'displayFlex');
    reviews_slider_wrapper.append(slider);
  });
};
reviews_slider(reviews_slider_data);
const reviews_slider_button_left = document.querySelector(
  '.reviews_slider_button-left'
);
const reviews_slider_button_right = document.querySelector(
  '.reviews_slider_button-right'
);

const render_reviews_span = (arr, idx) => {
  arr.forEach((el) => (el.id = ''));
  arr[idx].id = 'reviews_span_accent';
};

const reviews_left = () => {
  if (reviews_slider_idx !== 0) {
    reviews_slider_idx--;
    const width = reviews_slider_wrapper.clientWidth;
    reviews_slider_wrapper.style.left = `-${reviews_slider_idx * width}px`;
    Array.from(reviews_slider_wrapper.children).forEach((el, idx) => {
      idx === reviews_slider_idx
        ? (el.id = 'displayFlex')
        : (el.id = 'displayNone');
    });
    render_reviews_span(reviews_spanArray, reviews_slider_idx);
  }
};

const reviews_right = () => {
  if (reviews_slider_idx < data.length - 1) {
    reviews_slider_idx++;
    const width = reviews_slider_wrapper.clientWidth;
    reviews_slider_wrapper.style.left = `-${reviews_slider_idx * width}px`;
    Array.from(reviews_slider_wrapper.children).forEach((el, idx) => {
      idx === reviews_slider_idx
        ? (el.id = 'displayFlex')
        : (el.id = 'displayNone');
    });
    render_reviews_span(reviews_spanArray, reviews_slider_idx);
  }
};

reviews_slider_button_left.addEventListener('click', reviews_left);
reviews_slider_button_right.addEventListener('click', reviews_right);
