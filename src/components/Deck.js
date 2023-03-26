import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Deck extends React.Component {
  render() {
    const {
      removeDeleted,
      deck,
    } = this.props;
    return (
      <>
        <h3>Meu Deck:</h3>
        {deck.map((cardProps, i) => (
          <Card
            key={ i }
            cardId={ i }
            cardName={ cardProps.cardName }
            cardDescription={ cardProps.cardDescription }
            cardAttr1={ cardProps.cardAttr1 }
            cardAttr2={ cardProps.cardAttr2 }
            cardAttr3={ cardProps.cardAttr3 }
            cardImage={ cardProps.cardImage }
            cardRare={ cardProps.cardRare }
            cardTrunfo={ cardProps.cardTrunfo }
            removeDeleted={ removeDeleted }
          />))}
      </>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  removeDeleted: PropTypes.func.isRequired,
};
