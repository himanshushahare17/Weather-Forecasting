import { generateAdvisoryPDF } from "../utils/pdfGenerator";

function DownloadPDF({ weather, advisories }) {
  if (!weather || !advisories) return null;

  return (
    <button
      onClick={() => generateAdvisoryPDF(weather, advisories)}
      className="download-btn"
    >
      📄 Download Advisory PDF
    </button>
  );
}

export default DownloadPDF;
