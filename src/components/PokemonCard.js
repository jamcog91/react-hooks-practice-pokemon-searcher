import React from "react";
import { Card } from "semantic-ui-react";
import { useEffect, useState } from 'react'

function PokemonCard({pokiObj}) {
  
  return (
    <Card>
      <div>
        <div className="image">
          <img src={pokiObj.sprites} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokiObj.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokiObj.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
