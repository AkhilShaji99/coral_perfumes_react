function ChangeEmail() {
  return (
    <div
      className="modal fade "
      id="changeEmail"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        {/* modal content */}
        <div className="modal-content">
          {/* modal body */}
          <div className="modal-body p-6">
              <div>
                {/* heading */}
                <h5 className="mb-5 text-center">CHANGE E-Mail</h5>
              </div>
              <div>
                {/* button */}
                <button
                  type="button"
                  className="btn-close btn-custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            {/* row */}
            <div className="row g-3">
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input
                  type="text"
                  className="form-control"
                  disabled
                  placeholder="9463777767"
                />
              </div>
              {/* col */}
              <div className="col-12">
                {/* input */}
                <label>Add New Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mob Number*"
                />
              </div>
              <div className="col-12 text-center my-5">
                <button
                  className="btn btn-dark w-100"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChangeEmail;