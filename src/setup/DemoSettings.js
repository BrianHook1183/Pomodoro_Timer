import React from "react";

function DemoSettings({ demoSettings }) {
  return (
    <div className="col">
      <div className="mb-4">
        <button
          type="button"
          className="btn btn-outline-warning"
          title="Start Demo Mode"
          onClick={() => demoSettings()}
        >
          <span>demo mode:</span>
          <br />
          <span>(lower duration limits)</span>
        </button>
      </div>
    </div>
  );
}
export default DemoSettings;
