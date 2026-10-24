import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { icons } from "@/components/ui/icons";

const DownloadIcon = icons.download;

/** Served by the portfolio. This file is not part of the TraitVis web build. */
export const traitvisReportFile = "/reports/traitvis-dissertation.pdf";
export const traitvisReportPath = "/reports/traitvis";

/**
 * In-site reader for the TraitVis dissertation.
 * The PDF stays on this site. Download is a separate action.
 *
 * @component
 * @returns {JSX.Element} The dissertation reader
 */
const DissertationReport = () => {
  useEffect(() => {
    document.title = "Dissertation | Micheal Nestor";
  }, []);

  return (
    <div className="flex h-screen flex-col bg-background">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background/95 px-4 py-2">
        <div className="flex min-w-0 items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/projects/traitvis">Back to TraitVis</Link>
          </Button>
          <p className="truncate text-sm font-medium text-foreground">
            Generating and Exploring Feature Level-Sets in Arbitrary
            Multi-field Datasets
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2" asChild>
          <a href={traitvisReportFile} download="TraitVis-dissertation.pdf">
            <DownloadIcon className="h-4 w-4" />
            Download report
          </a>
        </Button>
      </div>
      <iframe
        title="Generating and Exploring Feature Level-Sets in Arbitrary Multi-field Datasets"
        src={traitvisReportFile}
        className="min-h-0 w-full flex-1 bg-white"
      />
    </div>
  );
};

export default DissertationReport;
