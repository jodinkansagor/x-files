import React from 'react';
import ListItem from './ListItem';
import { useCharacter } from './hooks/characterHook';
import { Paging } from '../components/Paging';



const List = () => {
  const { characters, setNewPage, page, setBackPage } = useCharacter();

  const listItemElements = characters.map(({ name, photoUrl, _id }) => (
    <ListItem key={name} name={name} _id={_id} photoUrl={photoUrl} />
  ));

  const handlePaging = ({ target }) => {
    console.log(target.value);
    setNewPage(target.value);
  };

  const handleBackPaging = ({ target }) => {
    setBackPage(target.value);
  };

  return (
    <section>
      <Paging onClick={handleBackPaging} page={page} label="Previous"/>
      <Paging onClick={handlePaging} page={page} label="Next"/>
      <ul>
        {listItemElements}
      </ul>
    </section>
  );

};

export default List;
