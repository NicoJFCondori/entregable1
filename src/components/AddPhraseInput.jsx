const AddPhraseInput = ({ inputValue, onInputChange, onAddClick }) => {
    return (
    <div className="addPhraseInput">
        <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Ingresa una nueva frase"
        />
        <button onClick={onAddClick}>Agregar</button>
    </div>
    );
};

export default AddPhraseInput;