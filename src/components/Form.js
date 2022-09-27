import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {

  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    const {
      // cardName,
      // cardDescription,
      // cardAttr1,
      // cardAttr2,
      // cardAttr3,
      // cardImage,
      // cardRare,
      // cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form">
        <label htmlFor="name-input">
          Nome:
          <input
            id="cardName"
            name="name-input"
            data-testid="name-input"
            type="text"
            // value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            id="cardDescription"
            data-testid="description-input"
            type="textarea"
            // value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          attr1
          <input
            id="cardAttr1"
            data-testid="attr1-input"
            type="number"
            // value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          attr2
          <input
            id="cardAttr2"
            data-testid="attr2-input"
            type="number"
            // value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          attr3
          <input
            id="cardAttr3"
            data-testid="attr3-input"
            type="number"
            // value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Image url:
          <input
            id="cardImage"
            data-testid="image-input"
            type="text"
            // value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            id="cardRare"
            data-testid="rare-input"
            // value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo:
          <input
            type="checkbox"
            id="cardTrunfo"
            data-testid="trunfo-input"
            // checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          id="saveButon"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  // cardName: PropTypes.string.isRequired,
  // cardDescription: PropTypes.string.isRequired,
  // cardAttr1: PropTypes.string.isRequired,
  // cardAttr2: PropTypes.string.isRequired,
  // cardAttr3: PropTypes.string.isRequired,
  // cardImage: PropTypes.string.isRequired,
  // cardRare: PropTypes.string.isRequired,
  // cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

// Form.defaultProps = {
//   onInputChange: function handleChange({ target }) {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   },
// };

// export default _;
