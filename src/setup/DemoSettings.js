import React from "react";

function DemoSettings({ demoSettings, currentMode }) {
  return (
    <div className="col">
      <div className="mb-4">
        <button
          type="button"
          className="btn-sm btn-outline-info"
          title="Start Demo Mode"
          disabled={currentMode}
          onClick={() => demoSettings()}
        >
          <span>toggle demo mode</span>
        </button>
      </div>
    </div>
  );
}
export default DemoSettings;
