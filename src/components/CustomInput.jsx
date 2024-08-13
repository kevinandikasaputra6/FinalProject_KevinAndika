import Form from "react-bootstrap/Form";

function InputType({ typeInput }) {
  if (typeInput.type === "option") {
    return (
      <>
        <label
          className="form-label"
          id="tipedriver"
          name="typeDriver"
          required
          onChange={(e) => handleChange(e)}
        >
          {typeInput.label}
          <span className="text-danger">*</span>
        </label>
        <Form.Select aria-label="Default select example">
          <option className="form-select" disabled selected>
            Pilih Tipe driver
          </option>
          <option value="Dengan Supir">Dengan Sopir</option>
          <option value="Lepas Kunci">Tanpa Sopir (Lepas Kunci)</option>
        </Form.Select>
      </>
    );
  } else if (
    typeInput.type === "date" ||
    typeInput.type === "time" ||
    typeInput.type === "number" ||
    typeInput.type === "text"
  ) {
    return (
      <>
        <label
          className="form-label"
          required
          onChange={(e) => handleChange(e)}
        >
          {typeInput.label}
          <span className="text-danger">*</span>
        </label>
        <Form.Control type={typeInput.type} placeholder="Jumlah Penumpang" />
      </>
    );
  } else {
    return (
      <button
        type="button"
        id="cari"
        className="btn btn-success"
        onClick={(e) => handleSearch(e)}
      >
        Cari Mobil
      </button>
    );
  }
}
export default function CustomInput({ typeInput }) {
  return (
    <>
      <InputType typeInput={typeInput} />
    </>
  );
}
