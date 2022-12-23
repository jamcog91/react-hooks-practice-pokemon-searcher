import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { useEffect, useState } from "react"

function PokemonCollection({pokiObj}) {

  return (
    <Card.Group itemsPerRow={6}>
      <h1></h1>
    </Card.Group>
  );
}

export default PokemonCollection;
