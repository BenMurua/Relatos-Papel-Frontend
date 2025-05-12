import "./FacturationUserForm.css";

function FacturationUserForm() {
  return (
    <form className="facturation-form">
      <h2 className="facturation-form__title">DETALLES DE FACTURACIÓN</h2>

      <div className="facturation-form__row">
        <label className="facturation-form__label">
          Nombre:
          <input
            className="facturation-form__input"
            type="text"
            name="firstName"
          />
        </label>

        <label className="facturation-form__label">
          Apellidos:
          <input
            className="facturation-form__input"
            type="text"
            name="lastName"
          />
        </label>
      </div>

      <label className="facturation-form__label">
        Nombre de la empresa (opcional):
        <input
          className="facturation-form__input"
          type="text"
          name="companyName"
        />
      </label>

      <label className="facturation-form__label">
        Dirección:
        <input className="facturation-form__input" type="text" name="address" />
      </label>

      <label className="facturation-form__label">
        Código Postal:
        <input
          className="facturation-form__input"
          type="text"
          name="postalCode"
        />
      </label>

      <label className="facturation-form__label">
        Localidad/Ciudad:
        <input className="facturation-form__input" type="text" name="city" />
      </label>

      <label className="facturation-form__label">
        Teléfono:
        <input className="facturation-form__input" type="tel" name="phone" />
      </label>
    </form>
  );
}

export default FacturationUserForm;
