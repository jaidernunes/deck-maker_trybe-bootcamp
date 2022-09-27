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

    // let isDisabled = true;
    // check strings
    if (cardName.trim().length === 0
    || cardDescription.trim().length === 0
    || cardImage.trim().length === 0
    || cardRare.trim().length === 0) {
      return true;
    }

    if (cardAttr1 > maxAttr || cardAttr1 < 0
      || cardAttr2 > maxAttr || cardAttr2 < 0
      || cardAttr3 > maxAttr || cardAttr3 < 0
    ) {
      return true;
    }

    return (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxAttrSum);
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
    } = state;
    const isSaveDisabled = this.validateSave(this);
    console.log(isSaveDisabled);

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveDisabled } // button to do
          onInputChange={ this.handleChangeSetState }
          onSaveButtonClick={ () => console.log('clicked save') }

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
    );
  }
}

export default App;
