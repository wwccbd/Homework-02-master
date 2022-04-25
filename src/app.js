console.log("ready");
/*
Benjamin Danielson
WWCC CS247 Homework 02 - Styling with CSS

Sources referenced: 
Class Recordings
https://www.w3schools.com/w3css
https://developer.mozilla.org/en-US/docs/Web/CSS
*/
//cards
const CARD1 = `
    <div class="card1">
        <div class"divImage"> 
            <img class="icon" src="TODO" />
        </div>
        <aside> 
            <h1>TITLE</h1>
            <p>Description</p>
        </aside>
    </div>`;

const CARD2 = `
        <div class="card2">
        <img class="icon" src="TODO" />
        <div class="CardTitle"></div>
        <div class="CardDesc"></div>

        <button type="button">OK</button>
        <footer> 
            <div class="footerText"></div>
            <div class="footerSpacer"></div>
            <div class="footerImages">
                <img class="icon" src="TODO" />
                <img class="icon" src="TODO" />
            </div>
        </footer>
    </div>    
`;
//Function For the First card
function createCard1(card) {
    const newCard = $(CARD1);
    //set the over cards css styles, using flex/flex-direction row to keep it looking horizontal 
    newCard.css({'background-color' : '#FFFFFF', "overflow" : 'hidden', 'display' : 'flex', 'flex-direction' : 'row', 'width' : '512px' , 'height' : '96px', 'font-family' : 'Arial'});
    //set the image source and style, keep it inline and float left.
    newCard.find('img').attr('src', card.src);
    newCard.find('img').css({'width' : '64px' , 'height' : '64px', 'padding' : '8', 'float' : 'left', 'display' : 'inline-block'});
    //keep aside inline and take the rest of the width
    newCard.find('aside').css({'display' : 'inline', 'padding' : '4', 'width' : '80%'});
    //set the title text to title arg, set the h1 not to wrap and to cut off with ... using overflow ellipsis
    newCard.find('h1').text(card.title);
    newCard.find('h1').css({'text-overflow' : 'ellipsis', 'overflow' : 'hidden', 'white-space' : 'nowrap', 'font-size' : '16px', 'margin-top' : '4px', 'margin-bottom' : '0px', });
    //set paragraph text, set it to properly wrap.
    newCard.find('p').text(card.description);
    newCard.find('p').css({'word-break' : 'break-word', 'height' : '100%', 'width' : '100%', 'margin-top' : '4px', 'text-align' : 'left', 'color' : 'grey'});
    return newCard;
};
//Function For the Second card
function createCard2(card) {
    const newCard2 = $(CARD2);
     //set the over cards css styles, using flex/flex-direction row to keep it looking vertical 
    newCard2.css({'background-color' : '#FFFFFF', "overflow" : 'hidden', 'display' : 'flex', 'flex-direction' : 'column', 'width' : '420px' , 'height' : '480px', 'font-family' : 'Arial'});
    //set img source to the gray image and to take up the told of the page.
    newCard2.find('img').attr('src', card.src);
    newCard2.find('img').css({'width' : '100%' , 'height' : '33%'});
    //set class .CardTitle text and set its style
    newCard2.find('.CardTitle').text(card.title);
    newCard2.find('.CardTitle').css({'text-align' : 'center', 'font-size' : '32px', 'margin' : '8px', 'font-weight' : 'bold'});
    //set class .CardDesc text and set its style
    newCard2.find('.CardDesc').text(card.description);
    newCard2.find('.CardDesc').css({'word-break' : 'break-word', 'height' : '100%', 'width' : '100%', 'text-align' : 'left', 'font-size' : '18px', 'margin' : '8px'});
    //set button styles, using margin auto to put it in the middle of the container
    newCard2.find('button').css({'margin' : 'auto', 'width' : '100px', 'height' : '150px', 'background-color' : '#1E90FF', 'color' : 'white', 'border-radius' : '5px',  'border' : 'none', 'font-size' : '24px'});
    newCard2.find('footer').css({'display' : 'flex', 'flex-direction' : 'row', 'padding' : '4'});
    //find class footerText and set its text/style
    newCard2.find('.footerText').text('Jun 8, 2022')
    newCard2.find('.footerText').css({'color' : 'grey', 'margin' : '5px', 'font-size' : '12px', 'float' : 'left', 'width' : '22%'});
    //set the class spacer to take up the middle space. I'm sure there is a better way to do this, but I have run out of time.
    newCard2.find('.footerSpacer').css({'width' : '88%'});
    //get the footerimages class and set its style.
    newCard2.find('.footerImages').css({'display' : 'flex', 'flex-direction' : 'row', 'margin-left' : 'none', 'float' : 'right' });
    //get the footerimages class and find its img classes, set those attributes. These already have image sources from earlier in the function.
    newCard2.find('.footerImages').find('img').css({'float' : 'right', 'width' : '16px' , 'height' : '16px', 'padding' : '4px'});
    return newCard2;
};

//append the cards to the html page
$(document.getElementById('card1Area')).append(createCard1({src: "./image.png", title: "Title of the card. If the content is too long it'll cut it short...", description: "Description of the card. With Support for the multi-line content that automatically wraps."}));
$(document.getElementById('card2Area')).append(createCard2({src: "./image.png", title: "Title Of Card", description: "Content of the card. A long multiline paragraph of whatever to fill the space."}));