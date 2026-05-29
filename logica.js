var liveMatchMessages = [
    "💙❤️ VISCA EL BARÇA! VISCA EL CATALUNYA!",
    "6’| ГООООООООООООООЛ! РАФИИИИИИИИНЬЯЯЯЯЯЯ 1-0 (2-1 общ). Ассист Фермина.",
    "8’| ВЕЛИКОЛЕПНЕЙШИЙ ЗАБРОС ОТ КУБАРСИ выводит Фермина на выход 1 в 1, но испанец не успел прокинуть мяч мимо вратаря. Повезло сопернику.",
    "Как же хорош Эрик Гарсия… Это вам не Араухо. Супер универсал!",
    "15’| ПРОПУСКАЕМ 1-1 (2-2 общ)",
    "18’| ГООООООООООООООООЛ! МАРК БЕРНАЛЬ 2-1 (3-2 общ). Ассист Мартина.",
    "21’| Вынужденная замена: ✔️ Рональд Араухо, ❌ Эрик Гарсия.",
    "Араухо сейчас все возьмет в свои руки.",
    "28’| ПРОПУСКАЕМ 2-2 (3-3 общ). Шоу продолжается!",
    "Проблема была в Гарсии, явно.",
    "Араухо отыграл 10/10 на фланге.",
    "До сегодняшнего матча Антони Эланга забил 1 гол в сезоне 25/26. Сегодня он забил 2 за полчаса.",
    "A вот и вторая желтая должна была быть...",
    "Какой же Араухо дно, если мяч получает, то он его теряет. Зачем это подобие футболиста вообще держать и нервировать фанатов?",
    "Ожидаемый облом картины игры после выхода на поле Араухо.",
    "УБЕРИТЕ С КОМАНДЫ УЖЕ ЕГО! СИЛ НЕТ УЖЕ ЭТО ТЕРПЕТЬ !!!!!!!!!!!!!!",
    "Лева….. Берн совершает фантастический подкат, но это не отрицает потерянный момент от поляка.",
    "44’| Желтая Кубарси.",
    "Левандовски: удара нет, приема нет. Не смог принять мяч, вынудил Кубарси фолить.",
    "45+1’ ЯМАЛЬ! КАКОЙ МОМЕНТИЩЕ ПОТЕРЯН!",
    "45+4’| Судья пошел смотреть ВАР. Трипьер сфолил на Рафинье в штрафной и должен быть пенальти.",
    "45+6’| СУДЬЯ НАЗНАЧАЕТ ПЕНАЛЬТИ В ВОРОТА «НЬЮКАСЛА»!",
    "45+7’| ЯМАЛЬ РЕАЛИЗУЕТ! 3-2 (4-3 общ).",
    "📌 Перерыв.",
    "Рафа отдал возможность пробить пенальти Ямалю! Настоящая дружба между этими игроками 💙❤️",
    "51’| ГООООООООООООООООЛ! ФЕРМИНАТОР!! 4-2 (5-3 общ).",
    "56’| ГООООООООООООООЛ! ЛЕВАНДОВСКИ 5-2 (6-3 общ). С углового! Рафинья ассист.",
    "61’| ГОООООООООООООООЛ! ЛЕВАНДОВСКИ ДУБЛЬ!! 6-2 (7-3 общ). Гол имени Ямаля. И его ассист.",
    "66’| Замены: ✔️ Ферран Торрес, ✔️ Дани Ольмо, ✔️ Хави Эспарт | ❌ Роберт Левандовски, ❌ Фермин Лопес, ❌ Жоау Канселу.",
    "72’| ГОООООООООООЛ! РАФИНЬЯ ДУБЛЬ 7-2 (8-3 общ). Сам перехватил и сам забил!",
    "81’| Жоану Гарсии требуется мед.помощь.",
    "81’| Щенсны вместо Гарсии. Надеемся, ничего серьезного.",
    "✔️ ПОБЕДА! «Барса» уничтожает «Ньюкасл» и выходит в 1/4 финала ЛЧ! (8-3 общ) 💙❤️ VISCA EL BARÇA!",
    "📊 Впервые с сезона 11/12 «Барса» забила 7+ голов в одном матче плей-офф ЛЧ.",
    "⭐️ Рафинья - лучший игрок матча!"
];

var tickerAnimationTimer;   
var currentLeftCoordinate = 0;       
var isTickerInitialized = false; 

function startLiveTicker() {
    var tickerRowElement = document.getElementById("ticker-row");
    var marqueeTextContainer = document.getElementById("marquee-text");
    var actionButton = document.getElementById("ticker-btn");

    if (tickerRowElement.style.display === "block") {
        tickerRowElement.style.display = 'none';
      clearInterval(tickerAnimationTimer); 
     actionButton.innerText = "⚽ Эфир";
        actionButton.style.background = '#A50044'; 
        sessionStorage.setItem("ticker_active", "false"); 
      return; 
    }

    if (isTickerInitialized == false) {
        var spacesString = "                                                                                                                                                                                                                                "; 
        var fullAccumulatedText = spacesString; 

        for (var index = 0; index < liveMatchMessages.length; index++) {
 fullAccumulatedText = fullAccumulatedText + liveMatchMessages[index] + spacesString + "★" + spacesString;
        }
        marqueeTextContainer.textContent = fullAccumulatedText;
        
        var savedLeftCoordinate = sessionStorage.getItem("ticker_left");
        if (savedLeftCoordinate !== null) {
            currentLeftCoordinate = parseFloat(savedLeftCoordinate); 
        } else {
            currentLeftCoordinate = window.innerWidth || 1200; 
        }
        isTickerInitialized = true;
    }

    tickerRowElement.style.display = "block";
    actionButton.innerText = '• В ЭФИРЕ';
    actionButton.style.background = "#2E8B57"; 
    sessionStorage.setItem("ticker_active", "true"); 

    clearInterval(tickerAnimationTimer);
    tickerAnimationTimer = setInterval(function() {
        currentLeftCoordinate = currentLeftCoordinate - 2; 
        marqueeTextContainer.style.transform = "translateX(" + currentLeftCoordinate + "px)";
    }, 16);
}