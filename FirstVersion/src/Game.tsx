import { FC } from "react";
import { TGame } from "./data";

type TGameProps = Pick<TGame, 'name' |'description' | 'version'>;

const Game: FC<TGameProps> = ({ name, description, version }) => {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Описание: {description}</p>
      <p>Версия: {version}</p>
    </div>
  );
};

export default Game;
