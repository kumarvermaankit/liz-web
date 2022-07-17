import React from "react";
import styled, { css } from "styled-components";
import { VectorMap } from "@south-paw/react-vector-maps";

// You'll need to download the json file from the docs site or you can create your own.
// import * as world from "./world.json";
// import * as india from "./india.json";

import { world, india } from "../../utils/MapData";

const MapContainer = styled.div`
  margin: 1rem auto;
  padding: 0 2rem;
  svg {
    /* stroke: #fff; */

    // All layers are just path elements
    path {
      fill: #5e6062;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      // &:hover {
      //   fill: #4ba6d6;
      // }

      // // When a layer is focused.
      // &:focus {
      //   fill: #4ba6d6;
      // }

      // When a layer is 'checked' (via checkedLayers prop).
      // &[aria-checked="true"] {
      //   fill: rgba(56, 43, 168, 1);
      // }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: rgba(56, 43, 168, 0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="in"] {
        fill: rgba(0, 253, 224, 0.32);
      }

      &[id="us"] {
        fill: rgba(0, 253, 224, 0.32);
      }
      &[id="jp"] {
        fill: rgba(0, 253, 224, 0.32);
      }
    }
  }
`;

const Map = () => {
  const [selected, setSelected] = React.useState("");
  const [currentLayer, setCurrentLayer] = React.useState(world);

  // const style = { margin: "1rem auto", width: "800px" };

  const onClick = ({ target }) => {
    // const id = target.attributes.id.value;
    // // If selected includes the id already, remove it - otherwise add it
    // selected.includes(id)
    //   ? setSelected(selected.filter((sid) => sid !== id))
    //   : setSelected(id);
  };

  console.log("SELECTED::", selected);

  React.useEffect(() => {
    if (selected) {
      setCurrentLayer(india);
    }
  }, [selected]);

  return (
    <section id="faq" class="faq padding-100">
      <div class="container">
        <div class="row">
          <div class="text-center col-12 section-title" data-aos="fade-zoom-in">
            <h3>
              Our Global <span>Presence</span>
            </h3>
            <div class="space-25"></div>
            {/* <!-- <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli
                        incidit
                        labore
                        lorem ipsum amet madolor sit amet.</p> --> */}
            <div class="space-50"></div>
          </div>
        </div>
      </div>
      <MapContainer>
        <VectorMap {...currentLayer} layerProps={{ onClick }} />
      </MapContainer>
    </section>
  );
};
export default Map;
