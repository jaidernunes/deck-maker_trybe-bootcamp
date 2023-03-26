import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardId,
      // removeDeleted,
    } = this.props;

    const checkTrunfo = (isTrunfo) => {
      if (isTrunfo) { return <h2 data-testid="trunfo-card">Super Trunfo</h2>; }
    };

    const checkIfKey = (isKey) => {
      const maxKeys = '999';
      if (isKey !== Number(maxKeys)) {
        return (
          <button
            type="button"
            name="remover"
            data-testid="delete-button"
            // disabled={ isSaveButtonDisabled }
            // onClick={ ]removeDeleted(cardId) }
          >
            Excluir
          </button>
        );
      }
    };

    return (
      <div className="cardPreview">
        <h1 data-testid="name-card">{cardName}</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <h5 data-testid="attr1-card">{cardAttr1}</h5>
        <h5 data-testid="attr2-card">{cardAttr2}</h5>
        <h5 data-testid="attr3-card">{cardAttr3}</h5>
        <h3 data-testid="rare-card">{cardRare}</h3>
        {checkTrunfo(cardTrunfo)}
        {checkIfKey(cardId)}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardId: PropTypes.number.isRequired,
  // removeDeleted: PropTypes.func.isRequired,
};
