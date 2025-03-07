import { useState, useEffect } from "react";
import Game from "./Game";
import AdultOrNot from "./AdultQuestion";
import { getGamesFromServer, priceWithCurrency } from "./utils";
import { TGame } from "./data";

function App() {
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [games, setGames] = useState<TGame[]>([]);

  useEffect(() => {
    getGamesFromServer().then((gamesFromServer) => {
      setLoading(false);
      // setGames(gamesFromServer as TGame[]);
      setGames(gamesFromServer as TGame[]);
    });
  }, []);

  const renderTags = (tags: NonNullable<TGame["tags"]>) => {
    return tags.map((tag, index) => <span key={tag + index}>{tag}</span>);
  };

  if (loading) {
    return <div>Загружаем игры...</div>;
  }

  if (isAdult === null) {
    return <AdultOrNot setIsAdult={setIsAdult} />;
  }

  return (
    <div>
      {games.map((game) => (
        <div key={game.id} style={{ border: "1px solid blue" }}>
          Игра:
          {game.forKids && !isAdult ? (
            <b style={{ color: "red" }}>Вам не доступна эта игра</b>
          ) : (
            <>
              <Game
                name={game.name}
                description={game.description}
                version={game.version}
              />
              {typeof game.price === "number" && (
                <>Цена: {priceWithCurrency(game.price)}</>
              )}
              {game.tags && <>Тэги: {renderTags(game.tags)}</>}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
