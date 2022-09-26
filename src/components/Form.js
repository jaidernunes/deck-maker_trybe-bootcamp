import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="name-input">
          Nome:
          <input
            id="name-input"
            data-testid="name-input"
            type="text"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            id="description-input"
            data-testid="description-input"
            type="textarea"
          />
        </label>
        <label htmlFor="attr1-input">
          attr1
          <input
            id="attr1-input"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2-input">
          attr2
          <input
            id="attr2-input"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3-input">
          attr3
          <input
            id="attr3-input"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image-input">
          Image url:
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            id="rare-input"
            data-testid="rare-input"
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
            id="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

// export default _;
