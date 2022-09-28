import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      deck: [],
    };
  }

  handleChangeSetState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  validateSave = () => {
    const { state } = this;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = state;
    const maxAttr = 90;
    const maxAttrSum = 210;

    // check strings
    if (cardName.trim().length === 0
    || cardDescription.trim().length === 0
    || cardImage.trim().length === 0
    || cardRare.trim().length === 0) {
      return true;
    }

    // check numbers
    if (cardAttr1 > maxAttr || cardAttr1 < 0
      || cardAttr2 > maxAttr || cardAttr2 < 0
      || cardAttr3 > maxAttr || cardAttr3 < 0
    ) {
      return true;
    }

    // check sum
    return (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxAttrSum);
  };

  // create new card and put in deck Arr - deck state not read????
  newCardObj = () => {
    const { state } = this;
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      // deck,
    } = state;

    const cardObj = {
      cardName: [cardName],
      cardDescription: [cardDescription],
      cardAttr1: [cardAttr1],
      cardAttr2: [cardAttr2],
      cardAttr3: [cardAttr3],
      cardImage: [cardImage],
      cardRare: [cardRare],
      cardTrunfo: [cardTrunfo],
    };

    const checkTrunfo = () => {
      if (cardTrunfo === true) {
        this.setState({
          hasTrunfo: true,
        });
        return true;
      }
    };

    // const hadTrunfo = checkTrunfo();

    this.setState((prevState) => ({
      deck: [...prevState.deck, cardObj],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: checkTrunfo(),
    }));
    // console.log(prevState.hasTrunfo);
  };

  render() {
    const { state } = this;
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      deck,
    } = state;
    const isSaveDisabled = this.validateSave(this);

    return (
      <div className="mainContainer">
        <h1>Tryunfo</h1>
        <div className="horizontalDisplay">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveDisabled } // button to do
            onInputChange={ this.handleChangeSetState }
            onSaveButtonClick={ this.newCardObj }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <h3>Meu Deck:</h3>
        {/* <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          /> */}
        {deck.map((cardProps) => (
          <Card
            key={ cardProps.cardName }
            cardName={ cardProps.cardName }
            cardDescription={ cardProps.cardDescription }
            cardAttr1={ cardProps.cardAttr1 }
            cardAttr2={ cardProps.cardAttr2 }
            cardAttr3={ cardProps.cardAttr3 }
            cardImage={ cardProps.cardImage }
            cardRare={ cardProps.cardRare }
            cardTrunfo={ cardProps.cardTrunfo }
          />))}
      </div>
    );
  }
}

export default App;
