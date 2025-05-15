import "./FacturationUserForm.css";

function FacturationUserForm() {
  return (
    <form className="facturation-form">
      <div className="facturation-form__row">
        <label className="facturation-form__label">
          Nombre:
          <input
            type="text"
            name="firstName"
            className="facturation-form__input"
            placeholder="Introduce tu nombre"
          />
        </label>

        <label className="facturation-form__label">
          Apellidos:
          <input
            type="text"
            name="lastName"
            className="facturation-form__input"
            placeholder="Introduce tus apellidos"
          />
        </label>
      </div>

      <label className="facturation-form__label">
        Empresa (opcional):
        <input
          type="text"
          name="companyName"
          className="facturation-form__input"
          placeholder="Nombre de la empresa"
        />
      </label>

      <label className="facturation-form__label">
        Dirección:
        <input
          type="text"
          name="address"
          className="facturation-form__input"
          placeholder="Calle, número, piso..."
        />
      </label>

      <label className="facturation-form__label">
        Código Postal:
        <input
          type="text"
          name="postalCode"
          className="facturation-form__input"
          placeholder="Ej: 28001"
        />
      </label>

      <label className="facturation-form__label">
        Localidad/Ciudad:
        <input
          type="text"
          name="city"
          className="facturation-form__input"
          placeholder="Ciudad o localidad"
        />
      </label>

      <label className="facturation-form__label">
        Teléfono:
        <input
          type="tel"
          name="phone"
          className="facturation-form__input"
          placeholder="Número de contacto"
        />
      </label>
    </form>
  );
}

export default FacturationUserForm;
