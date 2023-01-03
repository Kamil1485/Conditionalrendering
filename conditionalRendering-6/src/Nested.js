import Ternary from "./Ternary";

function Nested({ list }) {
    const isNotAvailable = !list;
    const isEmpty = !list.length;

    return (
      <div>
        {isNotAvailable
          ? <p>Sorry, the list is not there.</p>
          : (isEmpty
            ? <p>Sorry, the list is empty.</p>
            : <div>{list.map(item => <Ternary key={item.id} isim={item.isim} Vejeteryanmı={item.Vejeteryanmı} />)} <br/></div>
          )
        }
      </div>
    );
  }
  export default Nested;