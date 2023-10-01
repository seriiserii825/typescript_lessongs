import { FC, ChangeEvent, ChangeEventHandler, MouseEvent } from 'react';

type AdultOrNotProps = {
    setIsAdult: (value: boolean) => any;
};

const AdultOrNot: FC<AdultOrNotProps> = ({ setIsAdult }) => {
    const yesHandler = () => {
        setIsAdult(true);
    };

    const noHandler = (event: MouseEvent<HTMLButtonElement>) => {
        setIsAdult(false);
        console.log(event.screenX);
    };

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value);
    };

    return (
        <div>
            Вам Есть 18?
            <button onClick={yesHandler}>Да</button>
            <button onClick={noHandler}>Нет</button>

            <input type="text" onChange={onChangeHandler} />
        </div>
    )
  }
  
  export default AdultOrNot;
  