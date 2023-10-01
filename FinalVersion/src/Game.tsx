import { FC } from 'react';
import { GameFromServer } from './data';

type GameProps = {
  name: GameFromServer['name'];
  description: GameFromServer['description'];
  version: GameFromServer['version'];
};

// type GameProps = Pick<GameFromServer, 'name' | 'description' | 'version'>;
// type GameProps = Omit<GameFromServer, 'id' | 'price' | 'tags' | 'forKids'>;

const Game: FC<GameProps> = ({ name, description, version }) => {
  return (
    <div>
     <p>Имя: {name}</p>
     <p>Описание: {description}</p>
     <p>Версия: {version}</p>
    </div>
  )
};

export default Game;
