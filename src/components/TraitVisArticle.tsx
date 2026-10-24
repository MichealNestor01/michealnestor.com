import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { icons } from "@/components/ui/icons";
import {
  traitvisReportFile,
  traitvisReportPath,
} from "@/pages/DissertationReport";

const DownloadIcon = icons.download;

const steps = [
  {
    title: "Load a dataset",
    body: "A folder of big-endian brick-of-floats files, one attribute each, plus a config.txt that names the grid, the index order, and an optional missing-value sentinel. The files themselves stay as they are.",
  },
  {
    title: "Mark a trait",
    body: "Tick the attributes that belong in the feature. Each slider moves in that attribute's own units, with a histogram of the samples underneath. Recording the sliders stores one point of the trait.",
  },
  {
    title: "Score every sample",
    body: "Each attribute is scaled into a shared range, then every sample is given its Euclidean distance to the nearest trait point. Zero is an exact match. A larger distance is a neighbourhood around the trait.",
  },
  {
    title: "Extract the surface",
    body: "Marching cubes draws the shell of samples that share one distance. The distance is a percentage of that normalised space: 0 sits on the trait point, 100 reaches the far corner of attribute space.",
  },
];

/**
 * Long-form write-up for the TraitVis project page.
 * Replaces the generic paragraph body in ProjectDetail.
 */
const TraitVisArticle = () => (
  <article className="space-y-12 [&_p]:text-justify [&_p]:hyphens-auto">
    <p className="text-lg text-muted-foreground">
      TraitVis draws a surface around a combination of values in a multi-field
      dataset, then lets you move around it. I wrote it for my final-year dissertation at the
      University of Leeds. The program on this page is that project as it stands
      now: the same feature level-sets, and a build that runs in the browser.
    </p>

    <section>
      <h2 className="text-2xl font-semibold mb-4">What it draws</h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          A multi-field dataset, as defined for this project, is a set of scalar
          fields on one shared spatial domain. Hurricane
          Isabel, the dataset in the dissertation and in the demo, is a Weather
          Research and Forecasting simulation released for the IEEE Visualization
          2004 contest by the U.S. National Center for Atmospheric Research. One
          timestep is a 500 × 500 × 100 grid, 25 million samples, with a separate
          file for pressure, precipitation, temperature, the cloud and rain
          fields, and the three components of the wind. Wind speed in the demo
          is derived from those three components.
        </p>
        <p>
          An iso-surface is the shell where one of those fields equals a chosen
          value. That answers "where is the pressure this low?" and says nothing
          about "where is the wind high and the pressure low at the same place."
          Jankowai and Hotz (IEEE TVCG, 2020) generalise the iso-surface to
          several fields at once. You mark points in that attribute space. Those
          points are the trait. Each sample is then scored by how far its
          attributes sit from the nearest trait point, and marching cubes
          extracts the shell of samples that share one score. The zero shell is
          an exact match. A larger score keeps a surface even when no sample
          lands on the trait exactly.
        </p>
        <p>
          The dissertation set out to reproduce that paper: load an arbitrary
          multi-field dataset, define a trait as a set of points, generate the
          distance field, mesh it, and fly a first-person camera around the
          result. On an early Isabel timestep, a trait of low precipitation and
          low wind speed produced surfaces in which the coastlines of Florida
          and the Bahamas are readable, which is what the paper shows.
        </p>
      </div>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 list-none p-0">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="enhanced-glass rounded-lg p-5"
          >
            <p className="text-sm font-medium text-primary mb-1">
              {index + 1}. {step.title}
            </p>
            <p className="text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>

    <figure>
      <img
        src="/images/portfolio/traitvis.png"
        alt="Two TraitVis surfaces on Hurricane Isabel. An orange surface follows high wind speed. A blue surface follows low pressure."
        className="w-full rounded-lg border border-white/10"
      />
      <figcaption className="mt-3 text-sm text-muted-foreground">
        Two surfaces on Isabel. Orange is high wind speed. Blue is low
        pressure.
      </figcaption>
    </figure>

    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">The dissertation</h2>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" asChild>
            <Link to={traitvisReportPath}>Read the report</Link>
          </Button>
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={traitvisReportFile} download="TraitVis-dissertation.pdf">
              <DownloadIcon className="h-4 w-4" />
              Download report
            </a>
          </Button>
        </div>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          The report is <em>Generating and Exploring Feature Level-Sets in
          Arbitrary Multi-field Datasets</em>, submitted in May 2024 for
          COMP3931. Professor Hamish Carr supervised it, and it received a
          first-class mark. The submitted source is the{" "}
          <code>v1.0-dissertation-submission</code> branch.
        </p>
        <p>
          There is no common file format for multi-field datasets, so the reader
          takes a config file I specified for the project. It describes the
          grid, the index order, and each attribute's file, name, and range.
          Isabel's files are big-endian bricks of floats with no header. The
          parser, the reader, the distance field, and marching cubes were
          covered by GoogleTest. The window, camera, and panels were checked by
          using them: a graphics result is hard to assert in a unit test.
        </p>
        <p>
          The stack was there to get a renderer up quickly: OpenGL, GLFW, Dear
          ImGui, GLM, and Premake. The scene is a mesh, a camera, and a light.
          Lighting is a Phong model with the specular term left
          out, plus a dim light from the opposite direction so a surface still
          reads when it faces away from the lamp. On the machine I measured, a
          14-attribute trait on Isabel finished in under ten seconds, and the
          frame rate sat on the 240 fps cap.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-4">Since submission</h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          The report's last chapter is a list of what the prototype left
          unfinished. Much of that list is in the repository now. The branch
          above is the submission. <strong>Run Project</strong> on this page is
          the current program.
        </p>
        <p>
          The distance field used to be rebuilt, and stored again, every time
          the distance changed. You can now keep the field and drag the
          distance slider to cut a new shell from it. Keeping it is optional:
          one Isabel field is about 100 MB. On desktop the field can be filled
          by a GL 4.3 compute shader. Where that is unavailable the same job
          runs on the CPU, in slabs, and those slabs run in parallel when the
          platform has threads.
        </p>
        <p>
          Shading used the face normal of each triangle, so the lighting
          faceted. Normals now come from the slope of the distance field,
          interpolated along the edge the surface crosses. Isabel marks missing
          samples with the sentinel <code>1e35</code>. Those values are stored
          as missing, and a per-surface option closes the mesh where a real
          sample meets a missing one. On Isabel that closure is the coastline.
          Leave it open and the holes stay open.
        </p>
        <p>
          The histograms that lived in an appendix, as a Python script, are
          drawn under the attribute sliders. Undo and redo cover trait points,
          adding and removing surfaces, and edits to colour, transparency, and
          distance. A surface can be written out as OBJ and read back in.
          Transparent surfaces are depth-peeled, front to back, with a cap on
          how many layers are drawn. There is a point light, shadows, a clip
          plane, and a screenshot of the 3D view without the panels.
        </p>
        <p>
          The parser, the fields, and the mesher now live in a static library
          that does not include an OpenGL header. The desktop application and
          the tests link that library. The browser build links it too, so the
          demo is that C++ running in the page.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-4">In the browser</h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Emscripten compiles the library and the ImGui front end to
          WebAssembly. The shaders are the desktop shaders. At load time the
          program writes the version line: <code>#version 330 core</code> on
          the desktop, <code>#version 300 es</code> for WebGL2. WebGL2 has no
          compute shaders, so the distance field stays on the CPU in the
          browser. The attribute files are not packed into the WebAssembly
          module. Drop a dataset folder, choose which attributes to load, and
          the page copies those bytes into the C++ buffers. The header shows
          how much of a 2 GB budget is in use.
        </p>
        <p>
          <strong>Run Project</strong> opens that page full screen. Load sample
          fetches the Isabel subset shipped beside it: pressure, precipitation,
          and wind velocity, timestep 02. Space captures the mouse. WASD moves,
          Q and E move up and down, and Escape releases the camera. A surface
          with no vertices means no sample fell inside the distance. The page
          is built for a desktop browser.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-4">Hurricane Isabel</h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Micheal Nestor would like to thank Bill Kuo, Wei Wang, Cindy Bruyere,
          Tim Scheitlin, and Don Middleton of the U.S. National Center for
          Atmospheric Research (NCAR) and the U.S. National Science Foundation
          (NSF) for providing the Weather Research and Forecasting (WRF) Model
          simulation data of Hurricane Isabel.
        </p>
        <p>
          The dataset is available from{" "}
          <a
            href="http://www.vets.ucar.edu/vg/isabeldata/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline decoration-2 underline-offset-4"
          >
            NCAR
          </a>.
        </p>
      </div>
    </section>
  </article>
);

export default TraitVisArticle;
