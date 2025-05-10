import React from "react";
import "./FacturationUserForm.css";

function FacturationUserForm() {
  return (
    <form className="facturation-form">
      <h2>DETALLES DE FACTURACIÓN</h2>

      <div className="input-row">
        <label>
          Nombre:
          <input type="text" name="firstName" placeholder="Ej. Nombre" />
        </label>

        <label>
          Apellidos:
          <input
            type="text"
            name="lastName"
            placeholder="Ej. Apellido1 Apellido2"
          />
        </label>
      </div>

      <label>
        Nombre de la empresa (opcional):
        <input
          type="text"
          name="companyName"
          placeholder="Ej. Tu Empresa S.A."
        />
      </label>

      <label>
        Dirección:
        <input type="text" name="address" placeholder="Calle Ejemplo, 123" />
      </label>

      <label>
        Código Postal:
        <input type="text" name="postalCode" placeholder="Ej. 28001" />
      </label>

      <label>
        Localidad/Ciudad:
        <input type="text" name="city" placeholder="Ej. Madrid" />
      </label>

      <label>
        Teléfono:
        <input type="tel" name="phone" placeholder="Ej. +64 654654654" />
      </label>
    </form>
  );
}

export default FacturationUserForm;
