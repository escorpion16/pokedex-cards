import React, {useState} from 'react';
import Card from './components/card';
import './App.css';

function App(){
  const [types]  = useState(["Grass", "Poison", "Fire", "Water", "Flying", "Bug", "Normal"])
  const [pokemons] = useState([{
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://professorlotus.com/Sprites/Bulbasaur.gif",
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
  {
    "id": 2,
    "name": {
      "english": "Ivysaur",
      "japanese": "フシギソウ",
      "chinese": "妙蛙草",
      "french": "Herbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://professorlotus.com/Sprites/Ivysaur.gif",
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 60
    }
  },
  {
    "id": 3,
    "name": {
      "english": "Venusaur",
      "japanese": "フシギバナ",
      "chinese": "妙蛙花",
      "french": "Florizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://i.pinimg.com/originals/bd/f7/63/bdf763ebd5d86133a3a53497f006dab4.gif",
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80
    }
  },
  {
    "id": 4,
    "name": {
      "english": "Charmander",
      "japanese": "ヒトカゲ",
      "chinese": "小火龙",
      "french": "Salamèche"
    },
    "type": [
      "Fire"
    ],
    "sprite": "https://professorlotus.com/Sprites/Charmander.gif",
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 65
    }
  },
  {
    "id": 5,
    "name": {
      "english": "Charmeleon",
      "japanese": "リザード",
      "chinese": "火恐龙",
      "french": "Reptincel"
    },
    "type": [
      "Fire"
    ],
    "sprite": "https://professorlotus.com/Sprites/Charmeleon.gif",
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      "Speed": 80
    }
  },
  {
    "id": 6,
    "name": {
      "english": "Charizard",
      "japanese": "リザードン",
      "chinese": "喷火龙",
      "french": "Dracaufeu"
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "sprite": "https://professorlotus.com/Sprites/Charizard.gif",
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      "Speed": 100
    }
  },
  {
    "id": 7,
    "name": {
      "english": "Squirtle",
      "japanese": "ゼニガメ",
      "chinese": "杰尼龟",
      "french": "Carapuce"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://pokefarm.com/upload/Ashuna/Squirtle.gif",
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      "Speed": 43
    }
  },
  {
    "id": 8,
    "name": {
      "english": "Wartortle",
      "japanese": "カメール",
      "chinese": "卡咪龟",
      "french": "Carabaffe"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://professorlotus.com/Sprites/Wartortle.gif",
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 58
    }
  },
  {
    "id": 9,
    "name": {
      "english": "Blastoise",
      "japanese": "カメックス",
      "chinese": "水箭龟",
      "french": "Tortank"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/blastoise.gif",
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defense": 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      "Speed": 78
    }
  },
  {
    "id": 10,
    "name": {
      "english": "Caterpie",
      "japanese": "キャタピー",
      "chinese": "绿毛虫",
      "french": "Chenipan"
    },
    "type": [
      "Bug"
    ],
    "sprite": "https://professorlotus.com/Sprites/Caterpie.gif",
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 45
    }
  },
  {
    "id": 11,
    "name": {
      "english": "Metapod",
      "japanese": "トランセル",
      "chinese": "铁甲蛹",
      "french": "Chrysacier"
    },
    "type": [
      "Bug"
    ],
    "sprite": "https://professorlotus.com/Sprites/Metapod.gif",
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 30
    }
  },
  {
    "id": 12,
    "name": {
      "english": "Butterfree",
      "japanese": "バタフリー",
      "chinese": "巴大蝶",
      "french": "Papilusion"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "sprite": "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/butterfree.gif",
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 50,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 70
    }
  },
  {
    "id": 13,
    "name": {
      "english": "Weedle",
      "japanese": "ビードル",
      "chinese": "独角虫",
      "french": "Aspicot"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://professorlotus.com/Sprites/Weedle.gif",
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 50
    }
  },
  {
    "id": 14,
    "name": {
      "english": "Kakuna",
      "japanese": "コクーン",
      "chinese": "铁壳蛹",
      "french": "Coconfort"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://professorlotus.com/Sprites/Kakuna.gif",
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defense": 50,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 35
    }
  },
  {
    "id": 15,
    "name": {
      "english": "Beedrill",
      "japanese": "スピアー",
      "chinese": "大针蜂",
      "french": "Dardargnan"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://pa1.narvii.com/7390/106ebd63c8023516900a26cccde92801667e3305r1-560-570_hq.gif",
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 40,
      "Sp. Attack": 45,
      "Sp. Defense": 80,
      "Speed": 75
    }
  },
  {
    "id": 16,
    "name": {
      "english": "Pidgey",
      "japanese": "ポッポ",
      "chinese": "波波",
      "french": "Roucool"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://forums.pokemmo.eu/uploads/monthly_2020_08/Pidgey.gif.8a8c19cd2a3bb2693d771df76f47f404.gif",
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 56
    }
  },
  {
    "id": 17,
    "name": {
      "english": "Pidgeotto",
      "japanese": "ピジョン",
      "chinese": "比比鸟",
      "french": "Roucoups"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://professorlotus.com/Sprites/Pidgeotto.gif",
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defense": 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 71
    }
  },
  {
    "id": 18,
    "name": {
      "english": "Pidgeot",
      "japanese": "ピジョット",
      "chinese": "大比鸟",
      "french": "Roucarnage"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://professorlotus.com/Sprites/Pidgeot.gif",
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defense": 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 101
    }
  },
  {
    "id": 19,
    "name": {
      "english": "Rattata",
      "japanese": "コラッタ",
      "chinese": "小拉达",
      "french": "Rattata"
    },
    "type": [
      "Normal"
    ],
    "sprite": "https://professorlotus.com/Sprites/Rattata.gif",
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defense": 35,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      "Speed": 72
    }
  },
  {
    "id": 20,
    "name": {
      "english": "Raticate",
      "japanese": "ラッタ",
      "chinese": "拉达",
      "french": "Rattatac"
    },
    "type": [
      "Normal"
    ],
    "sprite": "https://professorlotus.com/Sprites/Raticate.gif",
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defense": 60,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 97
    }
  }])
      
  const [typeSelected, setTypeSelected] = useState("Todos")

  const handleInputSelect = (event) => {
    setTypeSelected(event.target.value)
  }  
  
  return (
    <div className="container">
      <div className="filters">
        <select onChange={handleInputSelect}>
          {/* Usar el estado types y realizar un map para colocar el valor en cada etiqueta option */}
          <option key="0" value="Todos">Todos</option>
          {types.map((type,index) => {
            return <option key={index} value={type}>{type}</option>
          })}
        </select>
      </div>
      <div className="filters">
        <form>
          <input type="text" value="Charmander" />
        </form>
      </div>
      <div className="App">
        {
          pokemons.filter(pokemon => {return typeSelected === "Todos" ? true : pokemon.type.includes(typeSelected)}).map(element => {
            return <Card pokemon={element} powerPokemon={element.base} />
          })
        }
      </div>
    </div>
    
  );
} 


export default App;
